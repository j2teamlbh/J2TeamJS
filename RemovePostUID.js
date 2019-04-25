// Truy cập vào nhóm cần xóa bài và chạy script nhé
var userId = 5515886; //ID thành viên muốn xóa các bài viết

var fb_dtsg = require('DTSGInitialData').token;
var gid = require('ScriptPath').getPageInfo().extraData.entity_id;
var uid = require('CurrentUserInitialData').USER_ID;

var get_pending_posts = async (gid) => {
    const res = await fetch('https://www.facebook.com/api/graphql/', {
        body: `fb_dtsg=${encodeURIComponent(fb_dtsg)}&__a=1&q=${encodeURIComponent(`node(${gid}){group_pending_stories.first(500){edges{node{id,actors{id,name},message{text},id,creation_time}}}}`)}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    const res_1 = await res.json();
    return res_1[gid].group_pending_stories.edges;
}

var get_posts = async (gid) => {
    const res = await fetch('https://www.facebook.com/api/graphql/', {
        body: `fb_dtsg=${encodeURIComponent(fb_dtsg)}&__a=1&q=${encodeURIComponent(`node(${gid}){group_feed.first(4500){edges{node{id,actors{id,name},message{text},id,creation_time}}}}`)}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    const res_1 = await res.json();
    return res_1[gid].group_feed.edges;
}

var match_spam = (posts, userid) => {
    return posts.filter(post => post.node && post.node.actors[0] && post.node.actors[0].id == userid);
}

var decline_post = async (post_id, actor_id, gid, cb) => {
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

    const res = await fetch('https://www.facebook.com/api/graphql/', {
        body,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return await res.json();
}

var delete_post = (post_id, access_token) => {
    return fetch('https://www.facebook.com/ajax/groups/mall/delete/', {
        body: `group_id=${gid}&post_id=${post_id}&__user=${uid}&__a=1&fb_dtsg=${fb_dtsg}&confirmed=1`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}

var filter_spam = (userid) => {
    console.log('Xóa bài viết theo UID thành viên');
    console.log('Nguồn T-Rekt, J2TEAM');
    console.log('Bắt đầu lọc bài viết, group id: ' + gid);

    get_pending_posts(gid)
        .then(res => match_spam(res, userId))
        .then(spams => {
            console.log(`Tìm thấy ${spams.length} bài viết đang chờ duyệt`);
            console.log('Đang xoá bài viết chờ duyệt...');
            return Promise.all(spams.map(spam => {
                let id = atob(spam.node.id).split(':');
                id = id[id.length - 1];
                return decline_post(spam.node.id, uid, gid).then(res => console.log('Đã xoá bài viết ' + id));
            }));
        })
        .then(() => console.log('Đã xoá tất cả bài viết đang chờ duyệt!\nĐang tìm bài viết trong nhóm...'));

    get_posts(gid)
        .then(res => match_spam(res, userId))
        .then(spams => {
            console.log(`Tìm thấy ${spams.length} bài viết trên group feed`);
            console.log('Đang xoá bài viết trên group feed...');
            return Promise.all(spams.map(spam => {
                let id = atob(spam.node.id).split(':');
                id = id[id.length - 1];
                return delete_post(id, uid, gid).then(res => console.log('Đã xoá bài viết ' + id));
            }));
        })
        .then(() => console.log('Đã xoá tất cả bài viết trên group feed!'));
}

filter_spam(userId);
