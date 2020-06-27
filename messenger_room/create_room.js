var roomName = "Phòng họp mặt test"; //Edit here (Max Length: 20)

var start_time = Math.round(new Date().getTime() / 1000);
var user_id = require("CurrentUserInitialData").USER_ID;
var fb_dtsg = require("DTSGInitialData").token;
var variables = `{"input":{"emoji":"👋","room_name":"${roomName}","should_publish":true,"start_time":${start_time},"actor_id":"${user_id}","client_mutation_id":"0e686788-4351-49be-ad79-8d95172eaac4"},"scale":1}`;
var doc_id = "4614122691946439";

var params = {
  variables,
  doc_id,
  fb_dtsg,
};
var data = Object.keys(params)
  .map(function (key) {
    return key + "=" + encodeURIComponent(params[key]);
  })
  .join("&");

fetch("https://www.facebook.com/api/graphql/", {
  method: "POST",
  body: data,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then((res) => res.json())
  .then((result) =>
    console.log(
      "Room URL: " + result.data.joinable_video_chats_update_room.link.link_url
    )
  );
