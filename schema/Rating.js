const { Integer, Relationship } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const editorConfig = {
  forced_root_block: '',
};

module.exports = {
  schemaDoc: 'rating of university',
  fields: {
    qualityOfEducation: {
      type: Integer,
      defaultValue: 5,
    },
    infrastructure: {
      type: Integer,
      defaultValue: 5,
    },
    fee: {
      type: Integer,
      defaultValue: 5,
    },
    activities: {
      type: Integer,
      defaultValue: 5,
    },
    jobOpportunities: {
      type: Integer,
      defaultValue: 5,
    },
    user: {
      type: Relationship,
      ref: 'Account.rating',
      isRequired: true,
    },
    university: {
      type: Relationship,
      ref: 'University.rating',
      isRequired: true,
    },
  },
  labelResolver: (item) => item.title,
};
