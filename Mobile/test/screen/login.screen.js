class LoginScreen {
    get #storeAddress() {
        return $('android.widget.EditText')
    }

    get #continue() {
        return $('id:bottom_button')
    }

    get #cotinueWithStoreCredentials() {
        return $('id:login_site_creds')
    }

    get #username() {
        return $('android=new UiSelector().text("Username")')
    }

    get #password() {
        return $('android=new UiSelector().text("Password")')
    }

    get #twoFactorPasswordWithOrBtnText() {
        return $('id:login_enter_password')
    }

    get #passwordTwoFactor() {
        return $('android.widget.EditText')
    }

    get #continueAfterTwoFactorPass() {
        return $('id:bottom_button')
    }

    async setStoreAddress(url) {
       await this.#storeAddress.setValue(url)
    }

    async continue() {
        await this.#continue.click()
    }

    async continueWithStore() {
        await this.#cotinueWithStoreCredentials.click()
    }

    async login(username, password) {
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()

    }

    async continueTwoFactor() {
        await this.#twoFactorPasswordWithOrBtnText.click()
    }

    async passwordTwo(password) {
        await this.#passwordTwoFactor.setValue(password)
    }

    async continueAfterTwoFactorPass() {
        await this.#continueAfterTwoFactorPass.click()
    }
}

module.exports = new LoginScreen()