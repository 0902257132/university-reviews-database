const {
  Text,
  Password,
  Checkbox,
  Relationship,
} = require("@keystonejs/fields");

module.exports = {
  schemaDoc: "A list of comment which discuss about a topic",
  fields: {
    email: {
      type: Text,
      isRequired: true,
    },
    password: {
      adminDoc: "Fill if you are admin university",
      type: Password,
    },
    passwordUser: {
      adminDoc: "Password for user",
      type: Text,
    },
    username: {
      type: Text,
      isRequired: true,
    },
    isAdmin: {
      type: Checkbox,
      isRequired: true,
    },
    topics: {
      type: Relationship,
      ref: "Topic.user",
      many: true,
    },
    comments: {
      type: Relationship,
      ref: "Comment.user",
      many: true,
    },
  },
  labelResolver: (item) => item.email,
};
