class MyStoreScreen {

    get #myStoreLogo() {
        return $('~My store')
    }

    get #myStoreName() {
        return $('id:toolbar_subtitle')
    }

    async getStoreName() {
        return await this.#myStoreName.getText()
    }

    async myStoreLogoDisplayed() {
        await this.#myStoreLogo.waitForExist({ timeout: 20000 })
        return await this.#myStoreLogo.isDisplayed()
    }


}

module.exports = new MyStoreScreen()