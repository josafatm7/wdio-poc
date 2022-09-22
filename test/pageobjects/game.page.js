class gamePage {

    /*general Puzzles buttons*/
    get playBtn() { return $(".pz-moment__button") }
    get gearBtn() { return $(".xwd__toolbar_icon--settings-gear") }


    /*Puzzle Settings Modal*/
    get moveBtn() { return $("input[value='move']") }
    get nextClueBtn() { return $("input[name='autoAdvance']") }
    get saveCloseBtn() { return $("button[aria-label='Save and close']") }

    /*nav-menu*/
    get revealBtn() { return $("button[aria-label='reveal'] ") }
    get resetBtn() { return $("button[aria-label='Reset']") } //Daily

    /*nav-menu-reveal-menu*/
    get revealPuzzlelBtn() { return $("li[class='xwd__tool--button xwd__tool--texty xwd__tool--open'] li:nth-child(3) button:nth-child(1)") } //Daily

    /* confirming modal content*/
    get confirmRevealBtn() { return $("button[aria-label='Reveal']") }

    /*congrats modal*/
    get closeBtn() { return $(".pz-icon.pz-icon-close") }
    get viewAllGamesBtn() { return $("button[aria-label='View all games']") }

    /*wordle*/
    get wordleCloseBtn() { return $("div[class='Modal-module_closeIcon__b4z74']") }
}

module.exports = new gamePage();