var fb_dtsg = require('DTSGInitialData').token;
var gid = require('ScriptPath').getPageInfo().extraData.entity_id;
var uid = require('CurrentUserInitialData').USER_ID;

var get_pending_posts = (gid) => {
    return fetch('https://www.facebook.com/api/graphql/', {
            body: `fb_dtsg=${encodeURIComponent(fb_dtsg)}&__a=1&q=${encodeURIComponent(`node(${gid}){group_pending_stories.first(1000){edges{node{id,actors{id,name},message{text},id,creation_time}}}}`)}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => res.json())
        .then(res => res[gid].group_pending_stories.edges)
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
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => res.json());
}

var remove_pending_posts = get_pending_posts(gid)
    .then(posts => {
        console.log(`Tìm thấy ${posts.length} bài viết đang chờ duyệt`);
        console.log('Đang xoá bài viết chờ duyệt...');
        return Promise.all(posts.map((item, index) => {
            let id = atob(item.node.id).split(':');
            id = id[id.length - 1];
            console.log(item.node.actors[0].id + ' - ' + item.node.actors[0].name + '\n');
            console.log(item.node.message.text);
            console.log('---------------------\n');
            //             return decline_post(item.node.id, uid, gid).then(res => console.log('Đã xoá bài viết ' + id));
        }));
    })
    .then(() => console.log('Quét xong!'));
