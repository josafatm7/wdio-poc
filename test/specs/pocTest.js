const loginPage = require('../pageobjects/login.page');
const user = require('../pageobjects/userLogin');


describe('NY Times Login ', async () => {

    it('Login successfully ', async () => {
        //webdriver.io
        await loginPage.open();
        (await $("(//a[@class='pz-nav__button white js-nav-login'])[1]")).click()
        await user.login()
    })
})

// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {


//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });