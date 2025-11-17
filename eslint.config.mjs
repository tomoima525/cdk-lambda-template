// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  // Base recommended configs
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // Prettier config to disable conflicting rules
  prettierConfig,

  // TypeScript-specific configuration
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
      globals: {
        // Node.js globals
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        console: "readonly",
        Buffer: "readonly",
        // Jest globals
        describe: "readonly",
        test: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        jest: "readonly",
      },
    },
    rules: {
      "no-console": 0,
      semi: 0,
      "@typescript-eslint/no-explicit-any": 0,
    },
  },

  // JavaScript files configuration (including config files)
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-console": 0,
      semi: 0,
    },
  },

  // Ignore patterns (replaces .eslintignore)
  {
    ignores: [
      "node_modules/**",
      "cdk.out/**",
      "*.d.ts",
    ],
  }
);
