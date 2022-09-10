const loginPage = require('./login.page');
const nav = require('./nav.page')

class user {

    async delCookie() { await browser.deleteCookies('NYT-S'); }

    async setCookie() {
        await browser.setCookies({
            domain: '.nytimes.com',
            expiry: 1696290846, // When the cookie expires, specified in seconds since Unix Epoch
            name: 'NYT-S',
            value: '2weMqKyg/gTiw8FDpfx78eLnyN6Q/Z2RODygpp2BopI37O.st93CusPoAI.5rVWtr1jOoea6bgYnSTsrB90hjTHY0wA9rc9IWlq1UlWHI8n7Ij./XlHiUpcS5.xshxE8G87RXgB7/0ZTCwRE9WOR9ET0DfqlIgfGVQXO97dv7egKi8.rvYh2d43nKj6PpsrqrHtaBw/ksVuNL01GB0db3nzw00^^^^CBISKQiXk-SYBhCPlOSYBhoSMS2gFykSw8ymhppRyxOrT8VoIN6eiUUqAh43GkA3NjFCdhZE5U3d_heXbCbS4kHTMVTzWVejuo8YzJlkUHvSzyZ-xYSdb_vwEtvXgU-7wjI53Py-d8f-jqlu9MEO',
            path: '/',
            domain: '.nytimes.com',
        })
        await loginPage.open();
    }

    async login() {
        await loginPage.open();
        await (await nav.loginBtn).click();
        await this.delCookie();
        await this.setCookie();
    }
}
module.exports = new user();

