const user = require('../pageobjects/login.page');
const nav = require('../pageobjects/nav.page');
const game = require('../pageobjects/game.page');
const conf = require('../../wdio.conf').config;



describe('Proof of concept Demo', async () => {

    it('NYT-Games Login ', async () => {
        await user.login()
        //await expect(game.loginBtn()).

    })

    it('Make Two Changes In Puzzle settings', async function () {
        await nav.hamburgerBtn.waitForExist()
        await nav.hamburgerBtn.click()
        await nav.dailyXWordNavBtn.waitForExist()
        await nav.dailyXWordNavBtn.click()
        await game.revealPuzzle()
        this.retries(2)
        //need to add assertions 
    })

    xit('Reveal Mini Puzzle ', async () => {
        await nav.hamburgerBtn.click()
        await browser.pause(1000)
        await nav.theMiniNavBtn.click()
        await browser.pause(1000)
        await game.revealPuzzle()
        this.retries(2)

        //verify the congrats text 
        //make sure that the puzzle is not alredy solved 
        //if it is already solved,press the reset button 
        //verify the ribon at homepage (//div[@class='progressIconContent miniProgressBlueStar'])[1]
    })

    xit('Revealing Daily Puzzle  ', async () => {
        await nav.hamburgerBtn.click()
        await browser.pause(1000)
        await nav.dailyXWordNavBtn.click()
        await browser.pause(1000)
        await game.revealPuzzle()
        //verify the congrats text 
        //make sure that the puzzle is not alredy solved 
        //if it is already solved,press the reset button 
        //verify the ribon at homepage (//div[@class='progressIconContent miniProgressBlueStar'])[1]
    })

    xit('Verifify Each Games In Nav Menu', async () => {
        await nav.hamburgerBtn.click()
        await nav.clickGamesinNav()
    })
})
