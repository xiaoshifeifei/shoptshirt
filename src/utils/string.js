String.prototype.format = function (fmt) {
    if (!fmt || fmt === {}) {
        return this;
    }
    let string = this;
    for (const key in fmt) {
        string = string.replace(new RegExp("\\{" + key + "\\}", "g"), fmt[key])
    }
    return string;
};

String.prototype.isEmpty = function () {
    const str = this;
    return str === 'null' || str === 'undefined' || str === '';
};

export default {
    init() {
        console.log("*** string installed ***")
    }
}
