<p align="center"> <img src="https://github.com/leandro-hd/authentication-api-ts/blob/master/public/images/logo.svg" width="256px" height="256px" alt="LogAuth"> </p>

<p align="center">
  <a href="#status">Status do Projeto</a> 🟠 
  <a href="#features">Features</a> 🟠 
  <a href="#execute">Como Executar</a> 🟠 
  <a href="#demo">Demonstração da Aplicação</a> 🟠 
  <a href="#techs">Tecnologias Utilizadas</a> 🟠 
  <a href="#author">Autor</a> 🟠 
  <a href="#license">Licença</a>
</p>

Criar uma conta - Mobile | Entrar - Mobile | Sobre - Mobile
:-----------------------:|:---------------:|:--------------:
![](https://github.com/leandro-hd/authentication-api-ts/blob/master/assets/mobile/register.JPG) | ![](https://github.com/leandro-hd/authentication-api-ts/blob/master/assets/mobile/login.JPG) | ![](https://github.com/leandro-hd/authentication-api-ts/blob/master/assets/mobile/about.JPG)

Criar uma conta - Desktop | Sobre - Desktop
:------------------------:|:---------------:
![](https://github.com/leandro-hd/authentication-api-ts/blob/master/assets/desktop/register.JPG) | ![](https://github.com/leandro-hd/authentication-api-ts/blob/master/assets/desktop/about.JPG)

<p align="center"> Uma API construída para autenticar e validar os usuários registrados em um banco de dados. </p>

<p align="center">
  <img src="https://img.shields.io/github/license/leandro-hd/authentication-api-ts?style=for-the-badge" alt="License MIT"> &nbsp;
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"> &nbsp;
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="Mongo DB"> &nbsp;
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn">
</p>

<br/>

<h2 id="status"> ✅ Status do projeto </h2>

<p> 🚧 Em construção... 🚧 </p>

<br/>

<h2 id="features"> 📌 Features </h2>

- [x] Cadastro de usuários;
- [x] Autenticação e validação;
- [x] Envio de e-mail com token;
- [x] Redefinição de senha;
- [x] Interface web;
- [ ] Suporte mobile;

<br/>

<h2 id="demo"> 🔗 Demonstração da aplicação </h2>

<a href="https://authentication-api-ts.herokuapp.com/">
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="https://authentication-api-ts.herokuapp.com/">
</a>

<br/>

<h2 id="execute"> 🏁 Como Executar </h2>

<h3> Pré-requisitos </h3>

<strong> Obrigatórios </strong>
- Ter instalado em sua máquina o <strong>Node.js</strong>;
- Ter instalado em sua máquina um gerenciador de pacotes, como o <strong>npm</strong> ou <strong>yarn</strong> (nesse projeto foi utilizado o <strong><a href="https://yarnpkg.com/package/download" target="_blank">yarn</a></strong>);
  
<strong> Opcional </strong>
- Possuir um editor de códigos (nesse projeto foi utilizado o <strong><a href="https://code.visualstudio.com/download" target="_blank">VSCode</a></strong>);
- Criar uma conta em algum serviço de testes de envio de e-mails (nesse projeto foi utilizado o <strong><a href="https://mailtrap.io/register/signup" target="_blank">Mailtrap</a></strong>);

<h3> Rodando o servidor </h3>

- Clone o repositório;
- No terminal, acesse a pasta do projeto, e execute na raíz o comando <code>yarn install</code>, para instalar todas as dependências; 
- Crie um arquivo <code>.env</code> na raíz do projeto, e inclua os campos <code>HOST = Host do serviço de email</code>, <code>PORT_MAIL = Porta do serviço de email</code>, <code>USER = Nome do usuário no serviço de email</code>, <code>PASS = Senha do usuário no serviço de email</code>, <code>SECRET = Sua assinatura</code> e <code>MONGODB_URL = URL do banco de dados</code> (as variáveis de ambiente foram configuradas de acordo com as tecnologias utilizadas no projeto);
- Inicie o servidor com <code>yarn dev</code>;

<h3> Acessando a aplicação </h3>

- Em seu navegador, acesse <code>localhost:3333</code>;

<br/>

<h2 id="techs"> 🧩 Tecnologias Utilizadas </h2>

As principais ferramentas usadas na construção do projeto foram:

👉 &nbsp; Node.js; <br/><br/>
👉 &nbsp; Express; <br/><br/>
👉 &nbsp; TypeScript; <br/><br/>
👉 &nbsp; JWT; <br/><br/>
👉 &nbsp; MongoDB; <br/><br/>
👉 &nbsp; Heroku;

<br/>

<h2 id="author"> ✏️ Autor </h2>

<p> Feito por <strong>Leandro Dias</strong> 👋. </p>

[![Github Badge](https://img.shields.io/badge/-Github-000?style=for-the-badge&logo=Github&logoColor=white&link=https://github.com/leandro-hd)](https://github.com/leandro-hd) [![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:leandrohg2003@gmail.com)](mailto:leandrohg2003@gmail.com)

<br/>

<h2 id="license"> 📝 Licença </h2>

<p> Este projeto está sob a <strong>licença MIT</strong>. </p>

<img src="https://img.shields.io/github/license/leandro-hd/authentication-api-ts?style=for-the-badge" alt="License MIT">
