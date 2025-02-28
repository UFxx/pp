// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	// Your custom configs here
	{
		files: ['**/*.ts', '**/*.js', '**/*.vue'],
		rules: {
			'no-console': 'error',
			'vue/html-indent': ['error', 'tab'],
			'indent': ['error', 'tab'],
			'vue/html-self-closing': ['error', {
				html: {
					void: 'never',
					normal: 'never',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			}],
			'vue/max-attributes-per-line': ['error', {
				singleline: {
					max: 1,
				},
				multiline: {
					max: 1,
				},
			}],
		},
	},
);
