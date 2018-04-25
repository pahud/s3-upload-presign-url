## s3-upload-presign-url



#### Usage: 

```
docker run -ti -v $HOME/.aws:/root/.aws -e S3_BUCKET=<S3_UPLOAD_BUCKET_NAME> -e S3_KEY=<S3_OBJECT_KEY_NAME> -e EXPIRES_IN=<EXPIRES_IN_SECONDS> pahud/s3-presign-upload-url
```



#### Example:

```
$ docker run -ti -v $HOME/.aws:/root/.aws -e S3_BUCKET=pahud-demo-us-west-2 -e S3_KEY=100M -e EXPIRES_IN=600 pahud/s3-presign-upload-url

> s3-presign-upload-url@1.0.0 start /app
> node index.js

https://pahud-demo-us-west-2.s3.amazonaws.com/100M?AWSAccessKeyId=AKIAI3CALFU43GAFC6DA&Expires=1524625153&Signature=8c%2Fy2daM%2FlL60sDZ9%2Fzck2IZK6M%3D
a8667f01ae5b:s3-presign-upload-url hunhsieh$ curl -T ./100M 'https://pahud-demo-us-west-2.s3.amazonaws.com/100M?AWSAccessKeyId=AKIAI3CALFU43GAFC6DA&Expires=1524625153&Signature=8c%2Fy2daM%2FlL60sDZ9%2Fzck2IZK6M%3D' > /dev/null
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
 75  100M    0     0   75 75.5M      0  3012k  0:00:33  0:00:25  0:00:08 3535k
```



For China Beijing region, you need to specify the region code: **AWS_REGION='cn-north-1'**

```
$ docker run -ti -v $HOME/.aws:/root/.aws -e S3_BUCKET=pahud-demo-us-west-2 -e S3_KEY=100M -e EXPIRES_IN=120 -e AWS_PROFILE=bjs -e AWS_REGION='cn-north-1' pahud/s3-presign-upload-url

> s3-presign-upload-url@1.0.0 start /app
> node index.js

https://pahud-demo-us-west-2.s3.cn-north-1.amazonaws.com.cn/100M?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAOEVQOGI2VHQNTNHA%2F20180425%2Fcn-north-1%2Fs3%2Faws4_request&X-Amz-Date=20180425T031701Z&X-Amz-Expires=120&X-Amz-Signature=403250e7afea49504781d9b932168312124e55ecb66b0acbdcb7cdc6dc452ff1&X-Amz-SignedHeaders=host
```



## Upload with cURL

Simple upload local file with cURL like this:

```
$ curl -T ./100M 'https://pahud-demo-us-west-2.s3.amazonaws.com/100M?AWSAccessKeyId=AKIAI3CALFU43GAFC6DA&Expires=1524626910&Signature=cZkdmk57MwrsZGrl5BNrT%2Ft%2B3Z0%3D' > /dev/null
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  9  100M    0     0    9  9.8M      0  1475k  0:01:09  0:00:06  0:01:03 1940k
```



