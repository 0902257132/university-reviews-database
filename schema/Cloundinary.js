const { CloudinaryAdapter } = require('@keystonejs/file-adapters');


const fileAdapter =  new CloudinaryAdapter({
    cloudName: 'minhtoi',
    apiKey: '313861419557972',
    apiSecret: 'JJKsgCfOroVPov2EClkSa73RaAc',
    folder: 'university-reviews-folder',
  });

  module.exports = {
    fileAdapter
  }