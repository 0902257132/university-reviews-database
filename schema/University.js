const { Text, Relationship, DateTime } = require('@keystonejs/fields');

module.exports =  {
    fields: {
        name:{
            type: Text,
            isRequire: true,
            isUnique: true
        },
        description: {
            type: Text
        },
        topics: {
            type: Relationship,
            ref: 'Topic.university',
            many: true
        },
        date: {
            type: DateTime
        }
    }
}