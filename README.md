#  TCC - EBAC
- [Escola EBAC] - Escola Online
- [Loja EBAC-SHOP] - Site utilizado para realizar o curso de Engenharia Qualidade de Software
## Resumo do Projeto de Testes
Este projeto tem como objetivo avaliar a qualidade e a confiabilidade de um sistema de software por meio de testes automatizados. Foram realizados testes de desempenho utilizando a ferramenta K6 Performance, testes de interface de usuário com o framework Cypress, validando o login da página, testes de API usando Jest, validando os contratos através do Swagger, e foram realizados testes em dispositivos móveis, utilizando o WebDriverIO com Android. Através dos resultados obtidos, foi possível verificar a eficiência do sistema e identificar possíveis falhas e pontos de melhoria para garantir a qualidade do software.
## Estratégia de Teste
<img src="https://user-images.githubusercontent.com/47276195/231316215-ecb84f11-80c0-455f-bd86-200fb0a283a3.png" alt="Mapa" width="50%">



## <span style="color:blue">Cenários de testes Automatizados</span>


- [x] [US-0001] – Adicionar item ao carrinho
- [x] [US-0002] – Login na plataforma
- [x] [US-0003] – API de cupons 

## Referência
- [node.js] - Node.js® is an open-source, cross-platform JavaScript runtime environment
- [Cypress] - Ferramenta utilizada para testes
- [Faker-Br] -  Biblioteca para gerar massa de dados
- [K6] - Ferramenta de perfomance
- [WebdriverIo] - Next-gen browser and mobile automation
- [Appium] -Automation for Apps


## Instalação

Clone o projeto

```bash
  git clone https://github.com/gabrielroquim/TCC-EBAC-QE/
```

Node.js

```sh
npm i node 
```

 Cypress
```sh
npm i cypress
```
K6
```sh
choco install k6
```
 WebdriverIO
```sh
npm init wdio .
```

Jest
```sh
npm install --save-dev jest
```

 Appium
```sh
npm install -g appium
```


Instalar as dependencias
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

##  TCC- Documento word
[Trabalho de conclusao curso - Engenheiro de Qualidade de software](https://github.com/gabrielroquim/TCC-EBAC-QE/files/11205999/Trabalho.de.conclusao.-.Engenheiro.de.Qualidade.de.software_GabrielRoquim.docx)


## 🚀 Sobre mim
Atuando como Q.A há dois anos. 
👩‍💻 Trabalho atualmente na i4Pro
🧠 Estou aprendendo pyton
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/gabrielroquim)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-roquim-407a5539/)


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [cypress]: <https://docs.cypress.io/guides/overview/why-cypress>
   [Faker-Br]: <https://www.npmjs.com/package/faker-br>
   [K6]: <https://k6.io/docs/testing-guides/load-testing-websites/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [WebdriverIo]: <https://webdriver.io/>
   [node.js]: <http://nodejs.org>
   [Appium]: <https://appium.io/>
   [Escola EBAC]: <https://lms.ebaconline.com.br/>
   [Loja EBAC-SHOP]: <http://lojaebac.ebaconline.art.br/>


   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
