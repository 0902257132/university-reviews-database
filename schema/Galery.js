const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { Text } = require('@keystonejs/fields');
const  { fileAdapter }  = require('./Cloundinary.js')

module.exports = {
    fields: {
        name: {
            type: Text
        },
        title: {
            type: Text  
        },
        image: {
            type: CloudinaryImage,
            adapter: fileAdapter
        }  
    }
}