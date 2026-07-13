import "./chunk-NBMM2TZK.js";

// src/grammars/html-derivative.json
var name = "html-derivative";
var scopeName = "text.html.derivative";
var patterns = [{ include: "text.html.basic#core-minus-invalid" }, { begin: "(</?)(\\w[^<>\\s]*)(?<!/)", beginCaptures: { "1": { name: "punctuation.definition.tag.begin.html" }, "2": { name: "entity.name.tag.html" } }, end: "((?: ?/)?>)", endCaptures: { "1": { name: "punctuation.definition.tag.end.html" } }, name: "meta.tag.other.unrecognized.html.derivative", patterns: [{ include: "text.html.basic#attribute" }] }];
var injections = { "R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)": { patterns: [{ match: "<", name: "invalid.illegal.bad-angle-bracket.html" }] } };
var html_derivative_default = { name, scopeName, patterns, injections };
export {
  html_derivative_default as default,
  injections,
  name,
  patterns,
  scopeName
};
