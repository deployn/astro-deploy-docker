import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
  // 1. Global ignores
  {
    ignores: [
      "dist/",
      "node_modules/",
      ".astro/",
      ".prettierrc.mjs",
      "eslint.config.mjs",
      "tailwind.config.mjs",
    ],
  },

  // 2. Base configuration for all files
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },

  // 3. TypeScript configuration
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  // 4. Apply Astro recommended config (as a separate object)
  eslintPluginAstro.configs["flat/recommended"],

  // 5. Apply our custom Astro overrides/additions (as another separate object)
  {
    files: ["**/*.astro"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        parser: tseslint.parser,
        project: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {},
  },

  // 6. Prettier configuration (must be last)
  eslintConfigPrettier
);
