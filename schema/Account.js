const {  Text, Password, Checkbox  } = require('@keystonejs/fields');

module.exports =  {
    schemaDoc: 'A list of comment which discuss about a topic',
    fields: {
      email:{
          type: Text,
          isRequire: true
      },
      password:{
        type: Password,
        isRequire: true
    },
    username:{
        type: Text,
        isRequire: true
    },
    isAdmin :{
        type: Checkbox,
        isRequire: true
    }
    }
}