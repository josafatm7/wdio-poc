class nav {

    /*nav buttons */
    get loginBtn() { return $("(//a[@class='pz-nav__button white js-nav-login'])[1]") }
    get hamburgerBtn() { return $("(//span[@class='pz-nav__hamburger-box'])[1]") }
    get subscribeBtn() { return $("(//a[@class='pz-nav__button_sales js-nav-subscribe'])[1]") }

    /* hanburger menu: Games  */
    get dailyXWordNavBtn() { return $("//a[@data-track-label='daily-page-nav']") }
    get statsNavBtn() { return $("") }
    get leadboardNavBtn() { return $("") }
    get theMiniNavBtn() { return $("//a[@data-track-label='mini-page-nav']") }
    get spellingbeeNavBtn() { return $("//div[@class='featured button action-play standard puzzleInfo js-hub-tracker']") }
    get wordlenavBtn() { return $("") }
    get tilesnavBtn() { return $("") }
    get letterboxNavBtn() { return $("") }
    get vertexNavBtn() { return $("") }
    get letterboxNavBtn() { return $("") }
    get chessNavBtn() { return $("") }

    /* hanburger menu: others  */
    get allGamesNavBtn() { return $("") }
    get archivesNavBtn() { return $("") }
    get leadboardNavBtn() { return $("") }
    get sudokuNavBtn() { return $("") }
    get storiesNavBtn() { return $("") }
    get solveavBtn() { return $("") }

    /*Top NYT Games*/
    get allGames() { return $$("(//div[@aria-label='Navigation menu']//nav//div/a[position()=1])[position()<8]") }

    /*wordle*/
    get wordleNavBtn() { return $("(//*[name()='svg'][@class='NavIcon-module_burgerSvg__WKh0A'])[1]") }
    get wordleMoreGames() { return $("(//div[@class='Nav-module_navItem__Kfeh3'])[6]") }







}

module.exports = new nav();