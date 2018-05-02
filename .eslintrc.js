module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"parser": "babel-eslint",
	"extends": "eslint:recommended",
	"parserOptions": { // 定义解析器
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module" // import 
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		// "linebreak-style": [
		//     "error",
		//     "windows"
		// ],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"never"
		],
		//控制台警告
		"no-console": [
			"warn"
		],
		//关闭声明的变量未使用，与React组件冲突；
		"no-unused-vars": [
			"off"
		],
		//构造函数首字母大写
		"new-cap": "error",
	}
};