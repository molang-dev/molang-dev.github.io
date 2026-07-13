import "./chunk-NBMM2TZK.js";

// src/grammars/vue-sfc-style-variable-injection.json
var name = "vue-sfc-style-variable-injection";
var scopeName = "vue.sfc.style.variable.injection";
var patterns = [{ include: "#vue-sfc-style-variable-injection" }];
var repository = { "vue-sfc-style-variable-injection": { begin: "\\b(v-bind)\\s*\\(", beginCaptures: { "1": { name: "entity.name.function" } }, end: "\\)", name: "vue.sfc.style.variable.injection.v-bind", patterns: [{ begin: `(["'])`, beginCaptures: { "1": { name: "punctuation.definition.tag.begin.html" } }, end: "(\\1)", endCaptures: { "1": { name: "punctuation.definition.tag.end.html" } }, name: "source.ts.embedded.html.vue", patterns: [{ include: "source.js" }] }, { include: "source.js" }] } };
var fileTypes = [];
var vue_sfc_style_variable_injection_default = { name, scopeName, patterns, repository, fileTypes };
export {
  vue_sfc_style_variable_injection_default as default,
  fileTypes,
  name,
  patterns,
  repository,
  scopeName
};
