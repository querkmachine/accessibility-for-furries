module.exports = function (eleventyConfig) {
	// Copy assets
	eleventyConfig.addPassthroughCopy("./src/images");

	// Markdown configuration
	eleventyConfig.setLibrary("md", require("./config/markdown.js"));

	// PostCSS build
	eleventyConfig.addWatchTarget("./src/styles/stylesheet.css");
	eleventyConfig.on("eleventy.after", require("./config/postcss.js"));

	// Custom shortcodes
	eleventyConfig.addPairedShortcode(
		"character",
		require("./config/characterShortcode.js")
	);

	// Eleventy config
	return {
		dir: {
			input: "./src",
			layouts: "_layouts",
			includes: "_includes",
			output: "./_site",
		},
		markdownTemplateEngine: "njk",
	};
};
