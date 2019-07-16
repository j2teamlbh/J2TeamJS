arrActions = [{
        device: "máy lạnh",
        action: "bật",
        commands: "hãy bật máy lạnh"
    },
    {
        device: "máy lạnh",
        action: "tắt",
        commands: "hãy tắt máy lạnh"
    },
    {
        device: "đèn",
        action: "bật",
        commands: "hãy bật đèn"
    }
];
arrActions.push({
    device: "quạt",
    action: "bật",
    commands: "hãy bật quạt hoặc cái gì đó thích thì bật thôi"
})
arrActions.push({
    device: ["quạt", "đèn"],
    action: "bật",
    commands: "hãy bật quạt và đèn"
})
function runActions(action,devices) {
    switch (action) {
        case 'bật':
            if (devices === 'máy lạnh') {
                
            } else if (devices === 'quạt') {
                
            } else if (devices === 'đèn') {
                
            } else if (devices === 'cửa') {
                
            }
            return `Đã ${action} ${devices}`;
        case 'tắt':
            if (devices === 'máy lạnh') {

            } else if (devices === 'quạt') {

            } else if (devices === 'đèn') {

            } else if (devices === 'cửa') {

            }
            return `Đã ${action} ${devices}`;
        case 'tăng':
            break;
        case 'giảm':
            break;
        default:
            break;
    }
}
runCommands = (command) => {
    var index = arrActions.findIndex(x => x.commands === command);
    var devices = arrActions[index].device;
    var actions = arrActions[index].action;
    if (Array.isArray(devices)) {
        devices.forEach(device => runActions(actions,device));
    } else {
        console.log(runActions(actions,devices));
    }
}
runCommands('hãy bật máy lạnh')