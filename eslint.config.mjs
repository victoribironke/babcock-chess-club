import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // ignorePatterns: [".next/**"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Disable the rule
      "react-hooks/exhaustive-deps": "off", // Disable the exhaustive-deps rule
      "@next/next/no-img-element": "off", // Disable the no-img-element rule
    },
  },
];

export default eslintConfig;
