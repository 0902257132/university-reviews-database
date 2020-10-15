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
            type: Text
        },
        cooperation: {
            type: Text
        },
        galeries: {
            type: Text
        }
    }
}