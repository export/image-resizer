'use strict';

var sharp = require('sharp');

sharp.cache(50, 50);

module.exports = function(image, callback){

  // create the sharp object
  var r = sharp(image.contents);

  // apply the filter and pass on the stream
  r.gamma().greyscale().toBuffer(callback);

};
