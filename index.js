var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var bucket   = process.env.S3_BUCKET;
var key = process.env.S3_KEY;
// var ct = process.env.CONTENT_TYPE || 'application/octet-stream';
var e = process.env.EXPIRES_IN || 900;

var params = { 
    Bucket: bucket, 
    Key: key, 
    // ContentType: ct, 
    // Metadata: { 
    //   md5chksum: '<md5>' 
    // }, 
    Expires: parseInt(e) 
  };

s3.getSignedUrl('putObject', params, (err, url) => {
  console.log(url);
});
