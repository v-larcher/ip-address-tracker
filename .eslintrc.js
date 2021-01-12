module.exports = {
  parserOptions: {
    parser: "babel-eslint",
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {
    semi: ["error", "never"],
    "prettier/prettier": "error",
  },
  settings: {
    // ...
  },
}
