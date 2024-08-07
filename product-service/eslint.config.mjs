import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	{
		languageOptions: {
			sourceType: 'module',
			globals: {
				...globals.browser,
				describe: 'readonly',
				it: 'readonly',
				before: 'readonly',
				after: 'readonly',
				beforeEach: 'readonly',
				afterEach: 'readonly',
			},
		},
	},
	pluginJs.configs.recommended,
];
