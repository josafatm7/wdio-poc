const user = require('../pageobjects/login.page');
const nav = require('../pageobjects/nav.page');
const game = require('../pageobjects/game.page')

describe('Proof of concept Demo', async () => {

    it('NYT-Games Login ', async () => {
        await user.login()
        //assert the login is sucsessful 
    })

    xit('Make Two Changes In Puzzle settings', async () => {
        await nav.hamburgerBtn.waitForExist()
        await nav.hamburgerBtn.click()
        await nav.dailyXWordNavBtn.waitForExist()
        await nav.dailyXWordNavBtn.click()
        await game.playBtn.waitForExist()
        await game.playBtn.click()
        if ((await game.resetBtn).isDisplayed()) {
            (await game.resetBtn).click()
        }
        await game.gearBtn.waitForExist()
        await game.gearBtn.click()
        await game.moveBtn.waitForExist()
        await game.moveBtn.click()
        await game.nextClueBtn.waitForExist()
        await game.nextClueBtn.click()
        await game.saveCloseBtn.waitForExist()
        await game.saveCloseBtn.click()
        //need to add assertions 
    })


    xit('Reveal Mini Puzzle ', async () => {
        await nav.hamburgerBtn.click()
        await browser.pause(1000)
        await nav.theMiniNavBtn.click()
        await browser.pause(1000)
        await game.playBtn.click()
        if ((await game.resetBtn).isDisplayed()) {
            (await game.resetBtn).click()
        }
        await game.revealBtn.click()
        await browser.pause(1000)
        await game.revealPuzzlelBtn.click()
        await browser.pause(1000)
        await game.confirmRevealBtn.click()

        await browser.pause(2000)
        await game.closeBtn.click()
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
        await game.playBtn.click()
        await browser.pause(1000)
        if ((await game.resetBtn).isDisplayed()) {
            (await game.resetBtn).click()
        }
        await game.revealBtn.click()
        await browser.pause(1000)
        await game.revealPuzzlelBtn.click()
        await browser.pause(1000)
        await game.confirmRevealBtn.click()
        await game.closeBtn.click()
        //verify the congrats text 
        //make sure that the puzzle is not alredy solved 
        //if it is already solved,press the reset button 
        //verify the ribon at homepage (//div[@class='progressIconContent miniProgressBlueStar'])[1]
    })

    it('Verifify Each Games In Nav Menu', async () => {
        await nav.hamburgerBtn.click()
        const navGames = await nav.allGames;

        for (const elem of navGames) {
            await elem.click()
            if (await browser.getUrl() === "https://www.nytimes.com/games/wordle/index.html") {
                await game.wordleCloseBtn.click()
                await nav.wordleNavBtn.click()
                await nav.wordleMoreGames.click()
            }
            await nav.hamburgerBtn.click()

        }
    })
})
