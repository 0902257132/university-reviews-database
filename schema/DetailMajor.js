const { Text } = require("@keystonejs/fields");
const access = require("./../access-control");

module.exports = {
  access: {
    //read: access.userIsAdmin,
   //create: access.userIsAdmin,
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
