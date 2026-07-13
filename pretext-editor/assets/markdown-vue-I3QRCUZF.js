import "./chunk-NBMM2TZK.js";

// src/grammars/markdown-vue.json
var name = "markdown-vue";
var scopeName = "markdown.vue.codeblock";
var patterns = [{ include: "#vue-code-block" }];
var repository = { "vue-code-block": { begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(vue)((\\s+|[,:?{])[^`~]*)?$)", beginCaptures: { "3": { name: "punctuation.definition.markdown" }, "4": { name: "fenced_code.block.language.markdown" }, "5": { name: "fenced_code.block.language.attributes.markdown", patterns: [] } }, end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$", endCaptures: { "3": { name: "punctuation.definition.markdown" } }, name: "markup.fenced_code.block.markdown", patterns: [{ include: "text.html.vue" }] } };
var fileTypes = [];
var markdown_vue_default = { name, scopeName, patterns, repository, fileTypes };
export {
  markdown_vue_default as default,
  fileTypes,
  name,
  patterns,
  repository,
  scopeName
};
