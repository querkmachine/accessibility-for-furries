const isProduction = process.env.ENVIRONMENT === "prod";

const excludeFromProductionBuild = (data) => {
  return isProduction && data.draft;
};

module.exports = {
  layout: "post.njk",
  eleventyComputed: {
    eleventyExcludeFromCollections: (data) => {
      return excludeFromProductionBuild(data)
        ? true
        : data.eleventyExcludeFromCollections;
    },
    permalink: (data) => {
      return excludeFromProductionBuild(data) ? false : data.permalink;
    },
  },
};
