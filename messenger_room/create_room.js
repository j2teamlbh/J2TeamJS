//Edit here
var roomName = "Phòng họp mặt test"; //Max Length: 20
var publishRoom = false; //Set Private
//End Edit

var user_id = require("CurrentUserInitialData").USER_ID;
var fb_dtsg = require("DTSGInitialData").token;

function convertForm(params) {
  return Object.keys(params)
    .map(function (key) {
      return key + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
}

async function createRoom(status) {
  const start_time = Math.round(new Date().getTime() / 1000);
  const variables = `{"input":{"emoji":"👋","room_name":"${roomName}","should_publish":${status},"start_time":${start_time},"actor_id":"${user_id}","client_mutation_id":"0e686788-4351-49be-ad79-8d95172eaac4"},"scale":1}`;
  const doc_id = "4614122691946439";

  const params = {
    variables: variables.toString(),
    doc_id,
    fb_dtsg,
  };
  try {
    const result = await fetch("https://www.facebook.com/api/graphql/", {
      method: "POST",
      body: convertForm(params),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const resultJson = await result.json();
    const roomData = resultJson.data.joinable_video_chats_update_room.link;
    return roomData.link_hash;
  } catch (e) {
    console.log(e);
  }
}

function setPrivate() {
  const variables = `{input: {client_mutation_id: "6",actor_id: ${user_id},anyone_with_link_can_join: true,visibility_mode: "WHITELISTED_PARTICIPANTS"}}`;
  const doc_id = "4392322977451818";
  const params = {
    variables,
    doc_id,
    fb_dtsg,
  };

  fetch("https://www.facebook.com/api/graphql/", {
    method: "POST",
    body: convertForm(params),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => res.json())
    .then(() => {
      createRoom(true).then((id) =>
        console.log("Room URL: https://msngr.com/" + id)
      );
    });
}

function startRoom() {
  if (publishRoom) {
    createRoom(true).then((id) =>
      console.log("Room URL: https://msngr.com/" + id)
    );
  } else {
    setPrivate();
  }
}

startRoom();
