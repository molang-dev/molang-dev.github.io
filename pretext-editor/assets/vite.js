// src/vite.ts
import { cpSync, mkdirSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
var libDir = dirname(fileURLToPath(import.meta.url));
function pretextEditorPlugin() {
  const pkgRoot = resolve(libDir, "..");
  let outAssets = "dist/assets";
  return {
    name: "pretext-editor",
    config(config) {
      var _a;
      config.define = { __DEV__: "false", ...config.define };
      config.server ?? (config.server = {});
      (_a = config.server).fs ?? (_a.fs = {});
      config.server.fs.allow = [...config.server.fs.allow ?? [], pkgRoot];
    },
    configResolved(config) {
      outAssets = resolve(config.root, config.build.outDir, config.build.assetsDir);
    },
    closeBundle() {
      mkdirSync(outAssets, { recursive: true });
      for (const f of readdirSync(libDir)) {
        if (f.endsWith(".js") && !f.startsWith("index") && !f.startsWith("highlight.worker"))
          cpSync(resolve(libDir, f), resolve(outAssets, f));
      }
      cpSync(resolve(libDir, "onig.wasm"), resolve(outAssets, "onig.wasm"));
    }
  };
}
export {
  pretextEditorPlugin
};
