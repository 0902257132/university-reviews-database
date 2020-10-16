const {  Text, Relationship  } = require('@keystonejs/fields');

module.exports =  {
    fields: {
        name: {
            type: Text,
        },
        //warning
        majors:{
            type: Relationship,
            ref: 'DetailMajor',
            many: true

        }
        
    }
}
