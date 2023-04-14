module.exports = function (eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("./src/styles");

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
