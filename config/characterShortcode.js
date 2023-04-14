const pluginImages = require("@11ty/eleventy-img");

const characterList = {
	emy: { name: "Emy", url: "/personas/#emy", file: "emy.png" },
	grey: { name: "Grey", url: "/personas/#grey", file: "grey.png" },
	meredith: {
		name: "Meredith",
		url: "/personas/#meredith",
		file: "meredith.png",
	},
	olive: { name: "Olive", url: "/personas/#olive", file: "olive.png" },
};

const characterShortcode = function (content, charKey) {
	// Check if required parameters have been given
	if (!charKey || !characterList[charKey]) {
		throw new Error("Character not found.");
	}

	// Get character data and config some stuff
	const char = characterList[charKey];
	const imagePath = "./src/images/characters/" + char.file;
	const imageConfig = {
		widths: [null],
		formats: ["webp"],
		urlPath: "/images/characters/",
		outputDir: "./_site/images/characters/",
	};

	// Process the image (happens asynchronously)
	pluginImages(imagePath, imageConfig);

	// Get image metadata
	const imageMeta = pluginImages.statsSync(imagePath, imageConfig);
	const image = imageMeta.webp[imageMeta.webp.length - 1];

	return `<aside class="fab-character">
  <img class="fab-character__image" src="${image.url}" width="${image.width}" height="${image.height}" alt="" role="presentation">
  <div class="fab-character__content">
    <span class="fab-character__name">
      <a class="fab-character__link" href="${char.url}">${char.name}</a>:
    </span>
    ${content}
  </div>
</aside>`;
};

module.exports = characterShortcode;
