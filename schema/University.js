const { Text, Relationship, DateTime } = require("@keystonejs/fields");
const { fileAdapter } = require("./Cloundinary.js");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const access = require("./../access-control");

module.exports = {
  schemaDoc: "A list of university in Vietnam",
  access: {
    //delete: access.userIsAdmin,
  },
  fields: {
    name: { type: Text },
    code: { type: Text },
    address: {
      type: Text,
    },
    email: {
      type: Text,
    },
    zone: {
      type: Text,
    },
    introduce: {
      type: Text,
    },
    logo: {
      type: CloudinaryImage,
      adapter: fileAdapter,
    },
    topics: {
      type: Relationship,
      ref: "Topic.university",
      many: true,
    },
    detailUniversity: {
      type: Relationship,
      ref: "DetailUniversity",
    },
  },
};
