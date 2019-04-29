javascript: var uidList = prompt('Danh sách uid muốn bỏ chặn'),
    uid_avoid = prompt('Danh sách UID loại trừ'),
    uidArr = uidList.split(' '),
    avoidArr = uid_avoid.split(' '),
    newArr = uidArr.filter(e => !avoidArr.includes(e)),
    fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
newArr.forEach((uid) => {
    var fdata = new FormData(),
        j2h = new XMLHttpRequest;
    fdata.append("fb_dtsg", fb_dtsg);
    fdata.append("remove_block", 1);
    j2h.onreadystatechange = function () {
        if (j2h.readyState === 4 && j2h.status === 200) {
            console.log('Unblocked: ' + uid);
        }
    };
    j2h.open('POST', `https://www.facebook.com/ajax/groups/admin_post/?group_id=364997627165697&user_id=${uid}&source=profilebrowser_blocked&operation=confirm_remove_block`);
    j2h.send(fdata);
});
