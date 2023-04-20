import { defineConfig } from "tsup";
import { postcssModules, sassPlugin } from "esbuild-sass-plugin";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  entry: ["src/index.ts"],
  treeshake: true,
  sourcemap: "inline",
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  format: ["cjs", "esm"],
  external: ["react"],
  esbuildPlugins: [
    sassPlugin({
      // generating inline styles
      type: "style",
      // transforms css.modules in pure CSS giving them propers names to avoid conflicts between modules
      transform: postcssModules(
        // options for postcss-modules: https://github.com/madyankin/postcss-modules
        {},
        // list of postcss plugins to be applied.
        [postcssPresetEnv()]
      ),
    }),
  ],
});
