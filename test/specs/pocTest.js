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
        await game.gearBtn.waitForExist()
        await game.gearBtn.click()
        await game.moveBtn.waitForExist()
        await game.moveBtn.click()
        await game.nextClueBtn.waitForExist()
        await game.nextClueBtn.click()
        await game.closeBtn.waitForExist()
        await game.closeBtn.click()
        await browser.pause(1000)
        await game.gearBtn.click()
        //need to add assertions 
    })


    it('Reveal Mini Puzzle ', async () => {
        await nav.hamburgerBtn.click()
        await browser.pause(2000)
        await nav.theMiniNavBtn.click()
        await browser.pause(2000)
        await game.playBtn.click()
        await browser.pause(2000)
        await game.revealBtn.click()
        await browser.pause(2000)
        await game.revealMiniBtn.click()
        await browser.pause(2000)
        await game.confirmRevealBtn.click()
        await browser.pause(2000)
        await game.closeBtn.click()
        await browser.pause(2000)
        //verify the congrats text 
        //make sure that the puzzle is not alredy solved 
        //if it is already solved,press the reset button 
        //verify the ribon at homepage (//div[@class='progressIconContent miniProgressBlueStar'])[1]
    })

    it('Revealing Daily Puzzle  ', async () => {
        await nav.hamburgerBtn.click()
        await browser.pause(2000)
        await nav.dailyXWordNavBtn.click()
        await browser.pause(2000)
        await game.playBtn.click()
        await browser.pause(2000)
        await game.revealBtn.click()
        await browser.pause(2000)
        await game.revealDailylBtn.click()
        await browser.pause(2000)
        await game.confirmRevealBtn.click()
        await browser.pause(2000)
        await game.closeBtn.click()
        await browser.pause(2000)
        //verify the congrats text 
        //make sure that the puzzle is not alredy solved 
        //if it is already solved,press the reset button 
        //verify the ribon at homepage (//div[@class='progressIconContent miniProgressBlueStar'])[1]
    })

    it('Verifify Each Games In Nav Menu', async () => {
        await nav.hamburgerBtn.click()
        await browser.pause(1000)
        const navGames = await nav.allGames;

        for (const elem of navGames) {
            await elem.click()
            if (await browser.getUrl() === "https://www.nytimes.com/games/wordle/index.html") {
                await browser.pause(1000)
                await game.wordleCloseBtn.click()
                await browser.pause(1000)
                await nav.wordleNavBtn.click()
                await browser.pause(1000)
                await nav.wordleMoreGames.click()
            }
            await browser.pause(1000)
            await nav.hamburgerBtn.click()
            await browser.pause(1000)

        }
    })
})
