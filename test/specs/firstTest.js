const loginPage = require('../pageobjects/login.page');


describe('NY Times Login ', async () => {

    it('Login successfully ', async () => {
        //webdriver.io
        await loginPage.open();
        (await $("(//a[@class='pz-nav__button white js-nav-login'])[1]")).click()
        await browser.pause(2000)
        loginPage.login("josafat.melendez@nytimes.com", "K5sFqn-eKZFA}Pv?.")
        await browser.pause(5000);
    })

})








// it('Login successfully ', async () => {
//     //webdriver.io
//     await loginPage.open()
//         //console.log(await browser.getTitle())
//         //await expect(browser).toHaveTitleContaining("The Crossword- The New York Times")
//         ; (await $("(//a[@class='pz-nav__button white js-nav-login'])[1]")).click()
//     await browser.pause(2000)
//         ; (await $("(//input[@type='email'])[1]")).setValue("josafat.meledndeerrorznytimes.com")
//     await browser.pause(3000)
//         ; (await $("(//button[@type='submit'])")).click();
//     await browser.waitUntil(
//         async () => (await $("(//span[@role='alert'])").getText()) === 'Please enter a valid email address.',
//         {
//             timeout: 5000,
//             timeoutMsg: 'Please enter a valid email address does not appear'
//         }
//     );

//     await expect($("(//span[@role='alert'])")).toHaveTextContaining("Please enter a valid email address.")
//         ; await console.log((await $("(//span[@role='alert'])")).getText())

//     // browser.pause(5000)
// }), it('Invalid Password Message', async () => {
