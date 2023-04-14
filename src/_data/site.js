module.exports = () => {
  return {
    name: "Web Accessibility for Furries",
    domain: process.env.ENVIRONMENT === "prod" ? "/" : "",
  };
};
