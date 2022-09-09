const loginPage = require('../pageobjects/login.page');
const user = require('../pageobjects/userLogin');
const gamesHub = require('../pageobjects/gameshub.page');

describe('Proof of concept Demo', async () => {

    it('Validade NYT-Games Login ', async () => {
        await user.login()
    })

})