var AV = require('leanengine');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(request, response) {
  response.success('Hello world!');
});

AV.Cloud.define('god', function(request, response) {
  response.success('Thanks god!');
});

AV.Cloud.define('cloudgod', function(request, response) {
  response.success('Thanks CLOUD=====god!');
});
module.exports = AV.Cloud;
