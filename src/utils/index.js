import date from './date'
import string from './string'
import http from './http'
import debug from './debug'
import check from './check'

function install() {
    date.init();
    string.init();
    http.init();
    debug.init();
    check.init();
}

const utils = {
    install: function () {
        install()
    }
};

export default utils
