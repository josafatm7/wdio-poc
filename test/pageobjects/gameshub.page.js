class gamesHub {

    /*nav buttons */
    get loginBtn() { return $("(//a[@class='pz-nav__button white js-nav-login'])[1]") }
    get hamburgerBtn() { return $("(//span[@class='pz-nav__hamburger-box'])[1]") }
    get subscribeBtn() { return $("(//a[@class='pz-nav__button_sales js-nav-subscribe'])[1]") }

    /*top 3 games*/
    get theMiniBtn() { return $("//div[@class='featured button action-play standard puzzleInfo js-hub-tracker']") }
}

module.exports = new gamesHub();