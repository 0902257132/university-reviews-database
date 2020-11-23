const { Text } = require("@keystonejs/fields");
const access = require("./../access-control");

module.exports = {
  access: {
    read: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    update: access.userIsAdminOrOwner,
  },
  fields: {
    name: {
      type: Text,
    },
    subject: {
      type: Text,
    },
  },
};
