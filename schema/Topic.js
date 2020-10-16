const { Integer, Text, Relationship, DateTime } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const editorConfig = {
    forced_root_block : ""
  }

module.exports =  {
    schemaDoc: 'A list of topics which user want to share',
    fields: {
        title:{
            type: Text,
            isRequire: true
        },
        content: {
            type: Wysiwyg,
            isRequire: true,
            editorConfig
        },
        //Warning
        tags:{
            type: Text
        },
        date: {
            type: DateTime,
        }, 
        like: {
            type: Integer
        },
        comments: {  
            type: Relationship,
            ref: 'Comment'
        },
        user: { 
            type: Relationship,
            ref: 'Account.topics',
            many: false
        },
        university: {
            type: Relationship,
            ref: 'University.topics',
            many: false
        },
      
    }
}