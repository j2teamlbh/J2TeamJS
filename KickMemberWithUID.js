javascript: var uidList = prompt('Danh sách uid muốn kick'),
    uid_avoid = prompt('Danh sách UID loại trừ'),
    groupID = prompt('ID Nhóm'),
    uidArr = uidList.split(' '),
    avoidArr = uid_avoid.split(' '),
    newArr = uidArr.filter(e => !avoidArr.includes(e)),
    fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
newArr.forEach((uid) => {
    var fdata = new FormData(),
        j2h = new XMLHttpRequest;
    fdata.append("fb_dtsg", fb_dtsg);
    fdata.append("confirmed", true);
    j2h.onreadystatechange = function () {
        if (j2h.readyState === 4 && j2h.status === 200) {
            console.log('Kicked: ' + uid);
        }
    };
    j2h.open('POST', `https://www.facebook.com/ajax/groups/remove_member/?group_id=${groupID}&member_id=${uid}&source=profile_browser&is_undo=0`);
    j2h.send(fdata);
});
