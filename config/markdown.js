const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = markdownIt({
	html: true,
	typographer: true,
	breaks: true,
}).use(markdownItAnchor, {
	tabIndex: false,
});
