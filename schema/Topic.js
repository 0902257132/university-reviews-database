const { Text, Relationship, DateTime } = require('@keystonejs/fields');

module.exports =  {
    fields: {
        name:{
            type: Text,
            isRequire: true
        },
        content: {
            type: Text,
            isRequire: true
        },
        university: {
            type: Relationship,
            ref: 'University.topics',
            many: false
        },
        date: {
            type: DateTime,
            
        }
    }
}