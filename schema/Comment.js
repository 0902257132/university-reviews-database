const {  Text, Relationship  } = require('@keystonejs/fields');

module.exports =  {
    schemaDoc: 'A list of comment which discuss about a topic',
    fields: {
       content:{
           type: Text,
           isRequire: true
       },
       user: { //warning
           type: Text
       }
      
    }
}