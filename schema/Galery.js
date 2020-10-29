const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { Text } = require("@keystonejs/fields");
const { fileAdapter } = require("./Cloundinary.js");

module.exports = {
  schemaDoc: "Description about image and video - schemaDoc",
  fields: {
    name: {
      type: Text,
      adminDoc: "Description about image and video - adminDoc",
    },
    image: {
      type: CloudinaryImage,
      adapter: fileAdapter,
    },
    video: {
      type: Text,
    },
  },
};
