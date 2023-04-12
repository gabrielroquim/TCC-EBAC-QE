#  TCC - EBAC
## Estratégia de Teste
![Mapa de teste](S:\OneDrive\EBAC\Modulo34-ProjetoFinal\mapa.png)


## __Cenários de testes Automatizados__
- [x] [US-0001] – Adicionar item ao carrinho
- [x] [US-0002] – Login na plataforma
- [x] [US-0003] – API de cupons 

## Sites Pesquisados
- [node.js] - Node.js® is an open-source, cross-platform JavaScript runtime environment
- [Cypress] - Ferramenta utilizada para testes
- [Faker-Br] -  Biblioteca para gerar massa de dados
- [K6] - Ferramenta de perfomance
- [WebdriverIo] - Next-gen browser and mobile automation
- [Appium] -Automation for Apps


## Instalação

- Node.js

```sh
npm i node 
```

- Cypress
```sh
npm i cypress
```
- K6
```sh
choco install k6
```
- WebdriverIO
```sh
npm init wdio .
```

- Jest
```sh
npm install --save-dev jest

```

- Appium
```sh
npm install -g appium
```


- Instalar as dependencias
```sh
npm install
```

## Executar Testes
- `cy:open`: Abre o Cypress
- `cypress`: Executa os testes do Cypress
- `cy:report`: Gera um relatório dos resultados dos testes com o Mochawesome e o Marge
- `test:allure`: Executa os testes do Cypress com a geração de relatórios do Allure
- `allure:open`: Abre os relatórios gerados pelo Allure
- `cy:dashboard`: Executa os testes do Cypress e envia os resultados para o Dashboard do Cypress
- `cyCypress`: Executa os testes do Cypress
- `allureGenerate`: Gera os relatórios do Allure a partir dos resultados dos testes
- `apiCypress`: Executa os testes de contrato com o Cypress



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [cypress]: <https://docs.cypress.io/guides/overview/why-cypress>
   [Faker-Br]: <https://www.npmjs.com/package/faker-br>
   [K6]: <https://k6.io/docs/testing-guides/load-testing-websites/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [WebdriverIo]: <https://webdriver.io/>
   [node.js]: <http://nodejs.org>
   [Appium]: <https://appium.io/>


   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
