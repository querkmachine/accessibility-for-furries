const fs = require("fs");
const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = function () {
	fs.readFile("./src/styles/stylesheet.css", (err, css) => {
		if (err) {
			throw new Error(err);
		}

		postcss([postcssPresetEnv])
			.process(css, {
				from: "stylesheet.css",
				to: "styles/stylesheet.css",
			})
			.then((result) => {
				fs.writeFile("./_site/styles/stylesheet.css", result.css, () => true);
			});
		return true;
	});
	return false;
};
