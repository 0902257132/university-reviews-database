const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { Text } = require("@keystonejs/fields");
const { fileAdapter } = require("./Cloundinary.js");
const access = require("./../access-control");

module.exports = {
  schemaDoc: "Description about image and video - schemaDoc",
  access: {
    read: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    update: access.userIsAdminOrOwner,
  },
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
