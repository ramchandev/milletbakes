#!/usr/bin/env python3
"""Convert Stitch HTML bodies into JSX fragments (mechanical attribute rewrite)."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DESIGN = ROOT / "design"
OUT = ROOT / "src" / "generated"

ATTR_RENAME = {
    "class": "className",
    "for": "htmlFor",
    "tabindex": "tabIndex",
    "colspan": "colSpan",
    "rowspan": "rowSpan",
    "maxlength": "maxLength",
    "minlength": "minLength",
    "readonly": "readOnly",
    "autocomplete": "autoComplete",
    "autofocus": "autoFocus",
    "crossorigin": "crossOrigin",
    "srcset": "srcSet",
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
    "clip-path": "clipPath",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "font-size": "fontSize",
    "font-family": "fontFamily",
    "font-weight": "fontWeight",
    "text-anchor": "textAnchor",
    "stop-color": "stopColor",
    "stop-opacity": "stopOpacity",
    "xmlns:xlink": "xmlnsXlink",
    "xlink:href": "xlinkHref",
    "xml:space": "xmlSpace",
}

BOOLEAN_ATTRS = {
    "checked",
    "selected",
    "disabled",
    "required",
    "readOnly",
    "autoFocus",
    "multiple",
    "hidden",
}

VOID_TAGS = {
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
}


def extract_body(html: str) -> str:
    match = re.search(r"<body[^>]*>(.*)</body>", html, re.I | re.S)
    if not match:
        raise SystemExit("No body found")
    body = match.group(1)
    body = re.sub(r"<script\b[^>]*>.*?</script>", "", body, flags=re.I | re.S)
    return body.strip()


def strip_chrome(body: str) -> str:
    body = re.sub(r"<header\b[^>]*>.*?</header>", "", body, flags=re.I | re.S, count=1)
    body = re.sub(r"<footer\b[^>]*>.*?</footer>", "", body, flags=re.I | re.S, count=1)
    return body.strip()


def convert_comment(match: re.Match[str]) -> str:
    text = match.group(1).replace("*/", "* /")
    return "{/* " + text.strip() + " */}"


def rewrite_attr_name(name: str) -> str:
    lower = name.lower()
    if lower in ATTR_RENAME:
        return ATTR_RENAME[lower]
    if lower.startswith("on") and len(lower) > 2:
        return "on" + lower[2].upper() + lower[3:]
    if "-" in name and not name.startswith("data-") and not name.startswith("aria-"):
        parts = name.split("-")
        return parts[0] + "".join(p.title() for p in parts[1:])
    return name


def convert_handler(value: str) -> str:
    value = value.strip()
    if value.startswith("event.preventDefault()"):
        return "{(event) => { event.preventDefault(); }}"
    if value.startswith("addToCart(") or value.startswith("updateQty(") or value.startswith(
        "updatePackaging("
    ) or value.startswith("dispatchWhatsAppOrder(") or value.startswith("toggleCartDrawer(") or value.startswith(
        "toggleFaq("
    ):
        return "{() => " + value.rstrip(";") + "}"
    return "{() => { " + value + " }}"


def rewrite_tag(match: re.Match[str]) -> str:
    raw = match.group(0)
    if raw.startswith("</"):
        return raw
    name = match.group(1)
    rest = match.group(2) or ""
    self_closing = bool(match.group(3)) or name.lower() in VOID_TAGS

    def attr_sub(am: re.Match[str]) -> str:
        aname = rewrite_attr_name(am.group(1))
        quote = am.group(2)
        aval = am.group(3)
        if aname in {"onClick", "onChange", "onSubmit", "onInput"}:
            return f"{aname}={convert_handler(aval)}"
        if aname == "style" and aval.strip() == "":
            return ""
        if aname in BOOLEAN_ATTRS:
            return aname
        if aname == "className":
            aval = aval.replace("class=", "")
        return f"{aname}={quote}{aval}{quote}"

    rest = re.sub(
        r'([:@A-Za-z_][:A-Za-z0-9_-]*)=(["\'])(.*?)\2',
        attr_sub,
        rest,
        flags=re.S,
    )
    rest = re.sub(r"\s(checked|selected|disabled|required|multiple|hidden)(?=\s|/|$)", r" \1", rest)
    rest = rest.strip()
    open_tag = f"<{name}" + (f" {rest}" if rest else "")
    if self_closing:
        return open_tag + " />"
    return open_tag + ">"


def html_to_jsx(html: str) -> str:
    jsx = re.sub(r"<!--(.*?)-->", convert_comment, html, flags=re.S)
    jsx = re.sub(r"</?([A-Za-z][\w:-]*)([^<>]*?)(/?)>", rewrite_tag, jsx)
    jsx = jsx.replace("classNameName", "className")
    return jsx


def wrap(name: str, jsx: str) -> str:
    return f'''/* Auto-generated from Stitch HTML. Visual markup is preserved. */
export default function {name}() {{
  return (
    <>
{jsx}
    </>
  );
}}
'''


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    mapping = {
        "home.html": "HomeMarkup",
        "shop.html": "ShopMarkup",
        "our-story.html": "StoryMarkup",
        "corporate.html": "CorporateMarkup",
        "contact.html": "ContactMarkup",
    }
    for filename, component in mapping.items():
        html = (DESIGN / filename).read_text()
        body = strip_chrome(extract_body(html))
        jsx = html_to_jsx(body)
        (OUT / f"{component}.tsx").write_text(wrap(component, jsx))
        print(f"wrote {component} ({len(jsx)} chars)")


if __name__ == "__main__":
    main()
