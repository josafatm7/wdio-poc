class gamePage {

    /*general buttons*/
    get playBtn() { return $("//button[@aria-label='Play']") }
    get gearBtn() { return $("//i[@class='xwd__toolbar_icon--settings-gear']") }

    /*Puzzle Settings*/
    get moveBtn() { return $("//input[@value='move']") }
    get nextClueBtn() { return $("//input[@name='autoAdvance']") }
    get closeBtn() { return $("//button[@aria-label='Save and close']") }

    /*nav-reveal*/
    get revealBtn() { return $("//button[@aria-label='reveal'] ") }
    get revealMiniBtn() { return $("(//button[@type='button'])[13]") } //mini
    get revealDailylBtn() { return $("(//button[@type='button'])[14]") } //Daily


    /*reveal modal*/
    get confirmRevealBtn() { return $("//button[@aria-label='Reveal']") }



    /*congrats modal*/
    get closeBtn() { return $("//div[@aria-label='close']") }
    get viewAllGamesBtn() { return $("//button[@aria-label='View all games']") }
















}

module.exports = new gamePage();