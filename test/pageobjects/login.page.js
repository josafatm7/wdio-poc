const Page = require('./page');


class LoginPage extends Page {

    get emailAddress() { return $("(//input[@type='email'])[1]") }
    get password() { return $("(//input[@type='password'])[1]") }
    get alertMessage() { return $("(//span[@role='alert'])[1]") }
    get submitEmail() { return $("(//button[@type='submit'])[1]") }
    get loginButton() { return $("(//button[@type='submit'])[1]") }
    get loginWithoutPasswordButton() { return $("(//button[@class='css-1e0rnk6-MagicLinkStyledButton e1e6zg669'])[1]") }
    get editEmailAddress() { return $("(//button[@aria-label='edit email'])[1]") }
    get showPassword() { return $("(//button[@aria-label='Show password'])[1]") }
    get termsOfService() { return $("(//div[@class='css-1xd1ug7-Container edabiy60']//a[1]]") }
    get privacyPolicy() { return $("(//div[@class='css-1xd1ug7-Container edabiy60']//a[2]]") }
    get googleButton() { return $("(//button[@data-testid='google-sso-button'])[1]") }
    get facebookButton() { return $("(//button[@data-testid='facebook-sso-button'])[1]") }
    get appleButton() { return $("(//button[@data-testid='apple-sso-button'])[1]") }

    async login(emailAddress, password) {
        await this.emailAddress.setValue(emailAddress);
        await this.submitEmail.click();
        await browser.pause(2000)
        await this.password.setValue(password);
        await browser.pause(2000)
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();