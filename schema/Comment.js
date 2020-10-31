const { Text, Relationship } = require("@keystonejs/fields");

module.exports = {
  schemaDoc: "A list of comment which discuss about a topic",
  fields: {
    content: {
      type: Text,
      isRequired: true,
    },
    user: {
      type: Relationship,
      ref: "Account.comments",
      many: false,
      isRequired: true,
    },
    topic: {
      type: Relationship,
      ref: "Topic.comments",
      many: false,
      isRequired: true,
    },
  },
  labelResolver: (item) => item.content,
};
