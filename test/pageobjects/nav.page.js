const game = require('../pageobjects/game.page')

class nav {

    /*nav buttons */
    get loginBtn() { return $("div[id='js-nav-actions'] a[class='pz-nav__button white js-nav-login']") }
    get hamburgerBtn() { return $(".pz-nav__hamburger-box") }

    /* hanburger menu: Games  */
    get dailyXWordNavBtn() { return $("a[data-track-label='daily-page-nav']") }
    get theMiniNavBtn() { return $("a[data-track-label='mini-page-nav']") }

    /*Top NYT Games*/
    get allGames() { return $$("(//div[@aria-label='Navigation menu']//nav//div/a[position()=1])[position()<8]") }
    //.pz-nav - drawer__link: first - child

    async clickGamesinNav() {
        const navGames = await this.allGames;
        for (const elem of navGames) {
            await elem.click()
            if (await browser.getUrl() === "https://www.nytimes.com/games/wordle/index.html") {
                await game.wordleCloseBtn.click()
                await browser.back()
            }
            await this.hamburgerBtn.click()
        }
    }

}

module.exports = new nav();