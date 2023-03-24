class ProductsScreen {

    get #buttonAddProduct() {
        return $('~Add products');
    }

    get #buttonSimplePhysical() {
        return $('android=new UiSelector().text("Simple physical product")');
    }

    get #buttonFilter(){
        return $('id:btn_product_sorting');
    }

    get #buttonNewestToOldest(){
        return $('android=new UiSelector().text("Date: Newest to oldest")');
    }

    get #textProdutoEbac() {
        return $('android=new UiSelector().text("Produto Ebac")');
    }

    async goToAddProdutc() {
        await this.#buttonAddProduct.click();
    }

    async goToSimplePhysycal() {
        await this.#buttonSimplePhysical.click();
    }

    async validateRegisterProduct(){
        await this.#buttonFilter.click()
        await this.#buttonNewestToOldest.click()
        await this.#textProdutoEbac.isDisplayed();
    }

}

module.exports = new ProductsScreen;