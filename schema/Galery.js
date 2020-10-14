const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { Text } = require('@keystonejs/fields');
const  { fileAdapter }  = require('./Cloundinary.js')

module.exports = {
    schemaDoc: 'A list of image and video about university',
    fields: {
        name: {
            type: Text
        },
        image: {
            type: CloudinaryImage,
            adapter: fileAdapter
        },
        video: {
            type: Text
        }
    }
}