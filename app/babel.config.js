module.exports = {
	presets: ["@babel/preset-env"],
	plugins: [
		["transform-runtime", {
			"helpers": false,
			"polyfill": false
		}]
	]
};
