var faker = require('faker-br');
const adicProdutosScreen = require('../screen/addProduct.screen');
const loginScreen = require('../screen/login.screen');
const myStoreScreenProduct = require('../screen/myStoreProduct.screen');

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let username = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'
let nome = "Agasalho jhony quest"
let descricao = faker.commerce.productAdjective()
let valor = Math.trunc(faker.commerce.price() * 40.00)
let valor2 = Math.trunc(faker.commerce.price())
let sku = Math.floor(Math.random() * 65536)

describe('Access Admin Panel', () => {
    it('Login', async () => {

        await loginScreen.goToLogin(urlLoja, username, password)
        expect(await myStoreScreenProduct.ebacShop()).toEqual("EBAC - Shop")
        await myStoreScreenProduct.clickAddProduct()
        await adicProdutosScreen.cadastroProduto(nome, descricao)
        expect(await adicProdutosScreen.getProductName()).toEqual("Agasalho jhony quest")
        await expect(await adicProdutosScreen.getDescriptionProduct()).toEqual(descricao)
        await adicProdutosScreen.typePrice(valor, valor2)
        await adicProdutosScreen.clickInventory(sku)
        expect(await adicProdutosScreen.getNumeSKU()).toContain('SKU: ' + sku, ' Stock status: In stock')
        await adicProdutosScreen.clickPublish()
        expect(await adicProdutosScreen.msgProductPubli()).toEqual('Product published')


    });

})