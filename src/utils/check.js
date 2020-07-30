import Vue from 'vue'

function checkEmail(email) {
    let reg = new RegExp(/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/);
    return reg.test(email)
}

//校验密码强度---沒有匹配到以下級別就提示
function checkPassWord(value) {
    // 0： 表示第一个级别 1：表示第二个级别 2：表示第三个级别
    // 3： 表示第四个级别 4：表示第五个级别
    var arr = [], array = [1, 2, 3, 4];
    if (value.length < 6) {//最初级别
        return 0;
    }
    if (/\d/.test(value)) {//如果用户输入的密码 包含了数字
        arr.push(1);
    }
    if (/[a-z]/.test(value)) {//如果用户输入的密码 包含了小写的a到z
        arr.push(2);
    }
    if (/[A-Z]/.test(value)) {//如果用户输入的密码 包含了大写的A到Z
        arr.push(3);
    }
    if (/\W/.test(value)) {//如果是非数字 字母 下划线
        arr.push(4);
    }
    for (let i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) === -1) {
            return array[i];
        }
    }
}

export default {
    init() {
        console.log("*** check installed ***");
        Vue.prototype.$check = {
            checkEmail,
            checkPassWord
        }
    }
}
