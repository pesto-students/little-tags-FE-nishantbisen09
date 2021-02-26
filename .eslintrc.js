module.exports = {
  parser: "babel-eslint",
  root: true,
  env: {
    node: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "warn",
    "react/prop-types": [0],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [
    {
      files: ["serviceWorker.js"],
    },
  ],
};
