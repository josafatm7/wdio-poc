/* main page objects*/
module.exports = new class Page {

    open() {
        return browser.url("https://www.nytimes.com/crosswords")
    }
}
