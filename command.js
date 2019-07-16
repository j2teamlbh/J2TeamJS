// Các câu lệnh em thiết lập sẵn, 
// các câu lệnh này e để cho người dùng có thể tùy chọn câu lệnh truyền vào và câu lệnh trả lời lại, 
// cố định thiết bị(device) và hành động(action):
var origCommands = [{
        device: "máy lạnh",
        action: "bật",
        commands: "bật máy lạnh",
        response: "đã bật máy lạnh",
    },
    {
        device: "máy lạnh",
        action: "tắt",
        commands: "tắt máy lạnh",
        response: "đã tắt máy lạnh"
    },
    {
        device: "tất cả đèn",
        action: "bật",
        commands: "bật tất cả đèn",
        response: "đã bật tất cả đèn"
    },
    {
        device: "tất cả đèn",
        action: "tắt",
        commands: "tắt tất cả đèn",
        response: "đã tắt tất cả đèn"
    },
    {
        device: "đèn trên",
        action: "bật",
        commands: "bật đèn ở trên",
        response: "đã bật đèn ở trên"
    },
    {
        device: "đèn trên",
        action: "tắt",
        commands: "tắt đèn ở trên",
        response: "đã tắt đèn ở trên"
    },
    {
        device: "đèn giữa",
        action: "bật",
        commands: "bật đèn ở giữa",
        response: "đã bật đèn ở giữa"
    },
    {
        device: "đèn giữa",
        action: "tắt",
        commands: "tắt đèn ở giữa",
        response: "đã tắt đèn ở giữa"
    },
    {
        device: "đèn dưới",
        action: "bật",
        commands: "bật đèn ở dưới",
        response: "đã bật đèn ở dưới"
    },
    {
        device: "đèn dưới",
        action: "tắt",
        commands: "tắt đèn ở dưới",
        response: "đã tắt đèn ở dưới"
    },
    {
        device: "tất cả quạt",
        action: "bật",
        commands: "bật tất cả quạt",
        response: "đã bật tất cả quạt"
    },
    {
        device: "quạt trên",
        action: "bật",
        commands: "bật quạt ở trên",
        response: "đã bật quạt ở trên"
    },
    {
        device: "quạt trên",
        action: "tắt",
        commands: "tắt quạt ở trên",
        response: "đã tắt quạt ở trên"
    },
    {
        device: "quạt dưới",
        action: "bật",
        commands: "bật quạt ở dưới",
        response: "đã bật quạt ở dưới"
    },
    {
        device: "quạt dưới",
        action: "tắt",
        commands: "tắt quạt ở dưới",
        response: "đã tắt quạt ở dưới"
    },
    {
        device: "cửa",
        action: "mở",
        commands: "mở cửa",
        response: "đã mở cửa"
    },
    {
        device: "cửa",
        action: "đóng",
        commands: "đóng cửa",
        response: "đã đóng cửa"
    },
    {
        device: "toàn bộ",
        action: "bật",
        commands: "bật hệ thống",
        response: "đã bật hệ thống"
    },
    {
        device: "toàn bộ",
        action: "tắt",
        commands: "tắt hệ thống",
        response: "đã tắt hệ thống"
    },
    {
        device: "máy lạnh",
        action: "tăng",
        commands: "tăng nhiệt độ máy lạnh lên",
        response: "đã tăng nhiệt độ máy lạnh lên $t độ"
    },
    {
        device: "máy lạnh",
        action: "giảm",
        commands: "giảm nhiệt độ máy lạnh xuống",
        response: "đã giảm nhiệt độ máy lạnh xuống $t độ"
    },
    {
        device: "đèn,quạt",
        action: "bật",
        commands: "bật đèn và quạt",
        response: "đã bật đèn và quạt"
    }
];

// origCommands.push({
//     device: "máy lạnh,đèn",
//     action: "bật",
//     commands: "hãy bật máy lạnh và đèn"
// })

function runActions(action, devices, number) {
    switch (action) {
        case 'bật':
            if (devices === 'máy lạnh') {
                // Thực hiện hành động
            } else if (devices === 'tất cả quạt') {
               // Thực hiện hành động
            } else if (devices === 'tất cả đèn') {
                // Thực hiện hành động
            } else if (devices === 'đèn trên') {
                // Thực hiện hành động
            } else if (devices === 'đèn giữa') {
                // Thực hiện hành động
            } else if (devices === 'đèn dưới') {
                // Thực hiện hành động
            } else if (devices === 'quạt trên') {
               // Thực hiện hành động
            } else if (devices === 'quạt dưới') {
                // Thực hiện hành động
            } else if (devices === 'toàn bộ') {
                // Thực hiện hành động
            }
            return `${devices}`;
        case 'tắt':
            if (devices === 'máy lạnh') {
                // Thực hiện hành động
            } else if (devices === 'tất cả quạt') {
                // Thực hiện hành động
            } else if (devices === 'tất cả đèn') {
                // Thực hiện hành động
            } else if (devices === 'đèn trên') {
                // Thực hiện hành động
            } else if (devices === 'đèn giữa') {
                // Thực hiện hành động
            } else if (devices === 'đèn dưới') {
                // Thực hiện hành động
            } else if (devices === 'quạt trên') {
                // Thực hiện hành động
            } else if (devices === 'quạt dưới') {
                // Thực hiện hành động
            } else if (devices === 'toàn bộ') {
                // Thực hiện hành động
            }
            return `${devices}`;
        case 'tăng':
            var result = false;
            if (devices === 'máy lạnh') {
                if (parseInt(number) > 15 && parseInt(number) < 32) {
                    // Thực hiện hành động
                    result = true;
                }
            }
            return result;
        case 'giảm':
            var result = false;
            if (devices === 'máy lạnh') {
                if (parseInt(number) > 15 && parseInt(number) < 32) {
                    // Thực hiện hành động
                    result = true;
                }
            }
            return result;
        case 'mở':
            if (devices === 'cửa') {
                // Thực hiện hành động
            }
            return `${devices}`;
        case 'đóng':
            if (devices === 'cửa') {
                // Thực hiện hành động
            }
            return `${devices}`;
        default:
            break;
    }
}

function readText(command) {
    var commandCopy = command;
    if (command.indexOf('tăng nhiệt độ máy lạnh lên') > -1) {
        command = 'tăng nhiệt độ máy lạnh lên';
    } else if (command.indexOf('giảm nhiệt độ máy lạnh xuống') > -1) {
        command = 'giảm nhiệt độ máy lạnh xuống';
    }
    if (origCommands.findIndex(x => x.commands === command) > -1) {
        var index = origCommands.findIndex(x => x.commands === command);
        var devices = origCommands[index].device;
        var actions = origCommands[index].action;
        var response = origCommands[index].response;
        //Nếu thiết bị là 1 chuỗi gồm nhiều thiết bị như là: "đèn,quạt" thì e sẽ chuyển thành 1 mảng 
        //và dùng forEach để thực hiện hành động
        //A xem nếu có thể custom nhiều hành động với nhiều thiết bị thì tốt quá :D như là: bật đèn và tắt quạt (optional :D)
        if (devices.indexOf(',') > -1) {
            arrTemp = [];
            devices.split(',').forEach(device => {
                arrTemp.push(runActions(actions, device));
            });
            //Trả về câu trả lời người dùng đặt nếu không có thì trả lời mặc định
            if (response) {
                console.log(response);
            } else {
                console.log(`Đã ${actions} ${arrTemp.join(" và ")}`);
            }
        } else {
            //Ở đây e tách nhiệt độ ra nếu chuỗi truyền vào có số như là tăng nhiệt độ lên 30 độ C. 
            // E dùng indexOf để xem nó có trùng vs câu lệnh mình đặt là "tăng nhiệt độ máy lạnh lên"
            // {
            //     device: "máy lạnh",
            //     action: "tăng",
            //     commands: "tăng nhiệt độ máy lạnh lên",
            //     response: "đã tăng nhiệt độ máy lạnh lên $t độ"
            // },
            var number = commandCopy.replace(/^\D+|\D+$/g, "");
            let result = runActions(actions, devices, number);
            if (actions === 'giảm' || actions === 'tăng') {
                if (result) {
                    if (response) {
                        console.log(response.replace("$t", number));
                    } else {
                        console.log(`Đã ${actions} nhiệt độ máy lạnh xuống ${number} độ`);
                    }
                } else {
                    console.log(`Nhiệt độ máy lạnh phải nằm trong khoảng 16 đến 31 độ`);
                }
            } else {
                console.log(`Đã ${actions} ${result}`)
            }
        }
    } else {
        //Trả về câu lệnh xác nhận nếu câu lệnh chưa được thêm
        console.log(`Bạn vừa nói là: ${command} đúng không? Câu lệnh chưa có, hãy thử lại`);
    }
}
//Hiện tại dữ liệu giọng nói của em nó chuyển sang text sẽ ở dạng mảng:
//Ví dụ:
var commands = ['bật tất cả đèn', 'bật tất cả đen'];
var commands2 = ['tăng nhiệt độ máy lạnh lên 30 độ', 'tăng nhiệt độ máy lạnh lên 30 độ C'];
var commands3 = ['bật máy lạnh'];
// Vì dữ liệu truyền vào hầu như câu chuẩn xác nó nằm ở vị trí 0 nên e truyền vào commands[0] luôn 
// nhưng lâu lâu nó vẫn nằm ở vị trí khác nên nếu có thể so sánh mảng thì tốt không thì cũng không sao ạ.
readText(commands[0]);
