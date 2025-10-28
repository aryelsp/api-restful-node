# 💻 API RESTful de Usuários

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

---

## 📄 Sobre o Projeto

Este projeto consiste em uma **API RESTful de Gerenciamento de Usuários** desenvolvida utilizando **Node.js**, **Express** e **MongoDB**.

## 🚀 Tecnologias Utilizadas

As seguintes tecnologias foram utilizadas no desenvolvimento:

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web minimalista e flexível para Node.js.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.
- **Mongoose**: Modelagem de objetos MongoDB para Node.js.
- **dotenv**: Módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.

---

## ⚙️ Instalação e Configuração

Siga os passos abaixo para rodar a aplicação localmente:

### 1. Clonar o Repositório

```bash
git clone https://github.com/aryelsp/api-restful-node.git
cd api-restful-node
```

### 2. Instalar as Dependências

Execute o comando a seguir no terminal para instalar todas as dependências do projeto:

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo, substituindo `<sua_string_de_conexao>` pela sua URL de conexão do MongoDB:

```
# Conexão com o Banco de Dados MongoDB
MONGO_URI=<sua_string_de_conexao>

# Porta em que o servidor irá rodar
PORT=3000
```

### 4. Iniciar o Servidor

Você pode iniciar o servidor utilizando um dos comandos abaixo:

| Comando       | Descrição                                                                               |
| :------------ | :-------------------------------------------------------------------------------------- |
| `npm start`   | Inicia o servidor em modo de produção.                                                  |
| `npm run dev` | Inicia o servidor com `nodemon` (ideal para desenvolvimento, reinicia automaticamente). |

O servidor estará ativo em: `http://localhost:3000`

---

## 🔗 Rotas da API

A API expõe os seguintes endpoints principais para o gerenciamento de usuários:

> **👋 Para Interagir e Testar:** Você precisará de um cliente HTTP para fazer as requisições, como **Postman**, **Insomnia** ou ferramentas CLI como **cURL**.

| Método   | Rota            | Descrição                                        | Corpo da Requisição (Body)                        |
| :------- | :-------------- | :----------------------------------------------- | :------------------------------------------------ |
| `GET`    | `/usuarios`     | Lista todos os usuários cadastrados.             | **Não aplicável**                                 |
| `GET`    | `/usuarios/:id` | Busca um usuário específico pelo seu ID.         | **Não aplicável**                                 |
| `POST`   | `/usuarios`     | Cria um novo usuário.                            | `{ "nome": "...", "email": "...", "idade": ... }` |
| `PUT`    | `/usuarios/:id` | Atualiza as informações de um usuário existente. | `{ "nome": "...", "email": "...", "idade": ... }` |
| `DELETE` | `/usuarios/:id` | Remove um usuário pelo seu ID.                   | **Não aplicável**                                 |

### ⚠️ Observações de Validação

- Os campos **nome**, **email** e **idade** são **obrigatórios** na criação de um novo usuário.
- Esta API está pronta para ser integrada com qualquer frontend (ex: React, Angular, Vue).

---

## 💡 Como Contribuir

1.  Faça um _fork_ do projeto.
2.  Crie uma _branch_ para sua funcionalidade (`git checkout -b feature/minha-feature`).
3.  Faça o _commit_ das suas alterações (`git commit -m 'feat: Adiciona nova funcionalidade X'`).
4.  Faça o _push_ para a _branch_ (`git push origin feature/minha-feature`).
5.  Abra um _Pull Request_ (PR).

---

<p align="center">Desenvolvido com 💜</p>
