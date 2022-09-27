/* main page objects*/
const conf = require('../../wdio.conf').config;


module.exports = new class Page {

    open() {
        return browser.url(conf.baseUrl)
    }
}
