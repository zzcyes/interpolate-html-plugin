const esbuild = require("esbuild");

const commonConfig = {
  entryPoints: ["src/index.js"],
  minify: true,
  target: ["es2018"],
};

Promise.all([
  esbuild.build({
    ...commonConfig,
    format: "cjs",
    outfile: "dist/index.js",
  }),
]).catch(() => process.exit(1));
