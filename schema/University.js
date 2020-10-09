const { Text, Relationship } = require('@keystonejs/fields');

module.exports =  {
    fields: {
        name:{
            type: Text,
            isRequire: true
        },
        description: {
            type: Text
        },
        topics: {
            type: Relationship,
            ref: 'Topic.university',
            many: true
        }
    }
}