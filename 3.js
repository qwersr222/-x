/*
[rewrite_local]
#本地重写

#重写路径
https:\/\/cat\-match\.easygame2021\.com\/sheep\/v1\/game\/personal\_info\? script-response-body https://raw.githubusercontent.com/qwersr222/-x/main/3.js

[MITM]
#域名
hostname = cat-match.easygame2021.com

*/
body = $response.body.replace(/win_count":\d+/g , 'win_count":99999999999999999').replace(/topic_count":\d+/g , 'topic_count":1').replace(/today_state":\d+/g , 'today_state":999999999').replace(/today_time":\d+/g , 'today_time":0.1');
$done({body});
