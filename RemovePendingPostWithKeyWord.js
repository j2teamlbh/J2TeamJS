var spam_keyword = 'Wow video ⬇🎞💖💋🔞👙😍🎞⬇';

var fb_dtsg = require('DTSGInitialData').token;
var gid = require('ScriptPath').getPageInfo().extraData.entity_id;
var uid = require('CurrentUserInitialData').USER_ID;

var get_pending_posts = (gid) => {
  return fetch('https://www.facebook.com/api/graphql/', { 
    body: `fb_dtsg=${encodeURIComponent(fb_dtsg)}&__a=1&q=${encodeURIComponent(`node(${gid}){group_pending_stories.first(500){edges{node{id,actors{id,name},message{text},id,creation_time}}}}`)}`, 
    method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'} 
  })
  .then(res => res.json())
  .then(res => res[gid].group_pending_stories.edges)
}

var match_spam = (posts, keyword) => {
  return posts.filter(post => post.node && post.node.message && post.node.message.text.includes(keyword));
}

var decline_post = (post_id, actor_id, gid, cb) => {
  let post_data = {
    q: 'Mutation GroupPendingPostAction : GroupDeletePendingStoryResponsePayload {group_delete_pending_story(<input>) {story {id},client_mutation_id}}',
    query_params: {
      "input": JSON.stringify({
        "group_id": gid,
        "story_id": post_id,
        "client_mutation_id": "1",
        "actor_id": actor_id
      })
    }
  };

  let body = Object.keys(post_data).reduce((prev, k) => prev + `${k}=${encodeURIComponent(typeof post_data[k] == 'object' ? JSON.stringify(post_data[k]) : post_data[k])}&`, '');

  body += `fb_dtsg=${encodeURIComponent(fb_dtsg)}&__a=1`;

  return fetch('https://www.facebook.com/api/graphql/', { 
    body,
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'} 
  })
  .then(res => res.json());
}

var filter_spam = (keyword) => {
    console.log('Script lọc bài spam đang chờ, viết bởi T-Rekt, J2TEAM');
    console.log('Bắt đầu lọc spam, group id: ' + gid);

    get_pending_posts(gid)
        .then(res => match_spam(res, spam_keyword))
        .then(spams => {
           console.log(`Tìm thấy ${spams.length} bài viết spam đang chờ duyệt`); 
           console.log('Đang xoá bài viết spam chờ duyệt...');
           return Promise.all(spams.map(spam => {
            let id = atob(spam.node.id).split(':');
            id = id[id.length - 1];

            return decline_post(spam.node.id, uid, gid).then(res => console.log('Đã xoá bài viết ' + id));
           }));
        })
        .then(() => console.log('Đã xoá tất cả bài viết spam đang chờ duyệt!'));
}

filter_spam(spam_keyword);
