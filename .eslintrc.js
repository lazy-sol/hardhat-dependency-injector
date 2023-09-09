module.exports = {
	"env": {
		"node": true,
		"es6": true,
	},
	"extends": [
		"eslint:recommended",
	],
	"globals": {
		"task": "readonly",
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
	},
	"rules": {
		"no-console": [
			"off",
		],
		"indent": [
			"error",
			"tab",
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		"no-trailing-spaces": [
			"error",
		],
		"quotes": [
			"error",
			"double",
		],
		"semi": [
			"error",
			"always",
		],
		"no-var": [
			"error",
		],
		"comma-dangle": [
			"error",
			{
				"objects": "always-multiline",
				"arrays": "always-multiline",
			},
		],
		"object-curly-spacing": [
			"error",
			"never",
		],
		"key-spacing": [
			"error",
			{
				"afterColon": true,
				"mode": "minimum",
			},
		],
	},
};
