const homeScreen = require("../screen/home.screen");
const loginScreen = require("../screen/login.screen");
const myStoreScreen = require("../screen/myStore.screen");
const productScreen = require("../screen/product.screen")


let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'


describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueCredentials()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)
        await productScreen.goToAddProdutc();
        await productScreen.goToSimplePhysycal();

        expect(await myStoreScreen.myStoreLogoDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')

    });
})