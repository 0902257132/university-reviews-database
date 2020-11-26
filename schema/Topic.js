const { Integer, Text, Relationship, DateTime } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const editorConfig = {
  forced_root_block: "",
};
const access = require("./../access-control");

module.exports = {
  schemaDoc: "A list of topics which user want to share",
  access: {
    read: access.userIsAdmin,
    create: access.userIsAdmin,
  },
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    content: {
      type: Wysiwyg,
      isRequired: true,
      editorConfig,
    },
    //Warning
    tags: {
      type: Text,
    },
    date: {
      type: DateTime,
    },
    like: {
      type: Integer,
    },
    comments: {
      type: Relationship,
      ref: "Comment.topic",
      many: true,
    },
    user: {
      type: Relationship,
      ref: "Account.topics",
      many: false,
      isRequired: true,
    },
    university: {
      type: Relationship,
      ref: "University.topics",
      many: false,
      isRequired: true,
    },
  },
  labelResolver: (item) => item.title,
};
