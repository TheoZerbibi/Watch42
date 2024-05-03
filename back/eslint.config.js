const typescriptParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
	{
		files: ['src/**/*.ts', 'apps/**/*.ts', 'libs/**/*.ts', 'test/**/*.ts'],
		ignores: ['.husky/', '.vscode/', '.yarn/', '.pnpm-store/', 'coverage/', 'dist/'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: 'tsconfig.json',
				tsconfigRootDir: __dirname,
				sourceType: 'module',
			},
			globals: {
				node: true,
				jest: true,
			},
		},
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
		},
		rules: {
			indent: ['error', 'tab'],
			semi: ['error', 'always'],
			'no-tabs': 0,
			'linebreak-style': ['error', 'unix'],
			'no-throw-literal': 'error',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/interface-name-prefix': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/ban-types': [
				'error',
				{
					extendDefaults: true,
					types: {
						'{}': false,
					},
				},
			],
		},
	},
];
