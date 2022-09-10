const user = require('../pageobjects/userLogin');
const nav = require('../pageobjects/nav.page');
const game = require('../pageobjects/game.page')

describe('Proof of concept Demo', async () => {

    it('NYT-Games Login ', async () => {
        await user.login()
        //assert the login is sucsessful 
    })

    it('Make Two Changes In Puzzle settings', async () => {
        await nav.hamburgerBtn.click()
        await nav.dailyXWordNavBtn.click()
        await game.playBtn.click()
        browser.waitUntil(async () => { await game.gearBtn.isDisplayed() })
        await game.gearBtn.click()
        await browser.pause(1000)
        await game.moveBtn.click()
        await browser.pause(1000)
        await game.nextClueBtn.click()
        await browser.pause(1000)
        await game.closeBtn.click()
        await browser.pause(1000)
        await game.gearBtn.click()
        await browser.pause(1000)

        //need to add assertions 
    })


    // it('Reveal Mini Puzzle ', async () => {
    //     await nav.hamburgerBtn.click()
    //     await browser.pause(2000)
    //     await nav.theMiniNavBtn.click()
    //     await browser.pause(2000)
    //     await game.playBtn.click()
    //     await browser.pause(2000)
    //     await game.revealBtn.click()
    //     await browser.pause(2000)
    //     await game.revealMiniBtn.click()
    //     await browser.pause(2000)
    //     await game.confirmRevealBtn.click()
    //     await browser.pause(2000)
    //     await game.closeBtn.click()
    //     await browser.pause(2000)
    //     //verify the congrats text 
    //     //make sure that the puzzle is not alredy solved 
    //     //if it is already solved,press the reset button 
    //     //verify the ribon at homepage (//div[@class='progressIconContent miniProgressBlueStar'])[1]
    // })

    // it('Revealing Daily Puzzle  ', async () => {
    //     await nav.hamburgerBtn.click()
    //     await browser.pause(2000)
    //     await nav.dailyXWordNavBtn.click()
    //     await browser.pause(2000)
    //     await game.playBtn.click()
    //     await browser.pause(2000)
    //     await game.revealBtn.click()
    //     await browser.pause(2000)
    //     await game.revealDailylBtn.click()
    //     await browser.pause(2000)
    //     await game.confirmRevealBtn.click()
    //     await browser.pause(2000)
    //     await game.closeBtn.click()
    //     await browser.pause(2000)
    //     //verify the congrats text 
    //     //make sure that the puzzle is not alredy solved 
    //     //if it is already solved,press the reset button 
    //     //verify the ribon at homepage (//div[@class='progressIconContent miniProgressBlueStar'])[1]
    // })

    // it('Verifify Each Games In Nav Menu', async () => {
    //     await (await nav.hamburgerBtn).click()
    //     await browser.pause(3000)
    //     await (await nav.dailyXWordNavBtn).click()
    //     await browser.pause(3000)
    //     await (await nav.hamburgerBtn).click()
    //     await browser.pause(3000)
    //     await (await nav.theMiniNavBtn).click()
    //     await browser.pause(3000)
    //     await (await nav.hamburgerBtn).click()
    //     await browser.pause(3000)
    //     await (await nav.theMiniNavBtn).click()
    //     await browser.pause(3000)
    // })


})
