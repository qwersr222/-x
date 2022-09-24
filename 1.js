/*
[rewrite_local]
#本地重写

#重写路径
https:\/\/cat-match\.easygame2021\.com\/sheep\/v1\/game\/map\_info\_ex\?matchType\=3 url script-response-body 1.js

[MITM]
#域名
hostname = cat-match.easygame2021.com

*/
var body = $response.body; //声明一个变量
let obj = JSON.parse($response.body);
obj={
  "err_code" : 0,
  "err_msg" : "",
  "data" : {
    "map_md5" : [
      "046ef1bab26e5b9bfe2473ded237b572",
      "046ef1bab26e5b9bfe2473ded237b572"
    ],
    "map_seed" : [
      866577695,
      1510507122,
      866577695,
      1510507122
    ]
  }
}

$done({body: JSON.stringify(obj)});
