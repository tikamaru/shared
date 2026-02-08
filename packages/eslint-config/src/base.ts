import eslintJs from '@eslint/js'
import type { Linter } from 'eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import turbo from 'eslint-plugin-turbo'
import typescriptEslint from 'typescript-eslint'

export const baseConfig: Linter.Config[] = [
  eslintJs.configs.recommended,
  ...typescriptEslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.config.*']
        }
      }
    }
  },
  {
    plugins: {
      turbo
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'error',
      '@typescript-eslint/consistent-type-imports': 'error'
    }
  },
  {
    ignores: ['dist/**']
  },
  prettierRecommended
]
