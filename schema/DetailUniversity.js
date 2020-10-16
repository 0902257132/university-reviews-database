const {  Text, Relationship  } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const editorConfig = {
    forced_root_block : ""
  }
module.exports =  {
    schemaDoc: 'A list of comment which discuss about a topic',
    fields: {
        introduce: {
            type: Wysiwyg,
            editorConfig
        },
        majors: {
            type: Relationship,
            ref: 'GroupMajor',
            many: true
        },
        partner: {
            type: Relationship,
            ref: 'Partner',
            many: true
        },
        galeries: {
            type: Relationship,
            ref: 'Galery',
            many: true
        }
    }
}
