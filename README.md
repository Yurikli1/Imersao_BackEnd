# 📸 Imersão Back-End - Blog de Fotos

Este repositório contém o projeto desenvolvido durante a Imersão Back-End da Alura, focado na criação de uma API para um blog de fotos.

---

## 🚀 Como Configurar e Rodar o Projeto

Após clonar o repositório e entrar no diretório do projeto:

### 1️⃣ Instalar Dependências
Certifique-se de que as dependências necessárias estão instaladas:
```bash
npm install
```

### 2️⃣ Configurar as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto com as seguintes informações:
```
STRING_CONEXAO=<sua_string_de_conexao_com_o_MongoDB>
PORT=<porta_desejada>
```

> **Dica**: Se você estiver usando o MongoDB Atlas, copie a string de conexão fornecida no painel do MongoDB.

### 3️⃣ Inicializar o Servidor
Inicie o servidor usando:
```bash
npm start
```

Se tudo estiver configurado corretamente, você verá uma mensagem no terminal indicando que o servidor está rodando, como:
```
Servidor rodando na porta 3000
```

Acesse o servidor local em:
```
http://localhost:3000
```

---

## 📖 Rotas Disponíveis

O projeto conta com as seguintes rotas para interação:

| Método | Endpoint       | Descrição                           |
|--------|----------------|-------------------------------------|
| GET    | `/posts`       | Retorna todos os posts.            |
| POST   | `/posts`       | Cria um novo post.                 |
| POST   | `/upload`      | Faz upload de uma imagem e cria um post. |
| PUT    | `/upload/:id`  | Atualiza um post com uma nova imagem. |

### Exemplos de Requisição

#### 1️⃣ `GET /posts`
- **Descrição**: Retorna todos os posts salvos no banco de dados.
- **Exemplo de Resposta:**
  ```json
  [
    {
      "_id": "64f5c1e34a2d2e3345678a90",
      "descricao": "Uma bela foto!",
      "imgUrl": "http://localhost:3000/uploads/foto1.png",
      "alt": "Descrição da imagem"
    }
  ]
  ```

#### 2️⃣ `POST /posts`
- **Descrição**: Cria um novo post.
- **Body Exemplo:**
  ```json
  {
    "descricao": "Nova foto adicionada!",
    "alt": "Texto alternativo"
  }
  ```

#### 3️⃣ `POST /upload`
- **Descrição**: Faz upload de uma imagem e cria o post.
- **Requer:** Um arquivo enviado no campo `imagem` via `multipart/form-data`.

#### 4️⃣ `PUT /upload/:id`
- **Descrição**: Atualiza um post existente com uma nova imagem.
- **Body Exemplo:**
  ```json
  {
    "descricao": "Descrição atualizada",
    "alt": "Texto alternativo atualizado"
  }
  ```

---

## 🛠️ Tecnologias e Ferramentas

![Node.js](https://img.shields.io/badge/Node.js-16.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-4.x-brightgreen)
![Multer](https://img.shields.io/badge/Multer-v1.x-orange)

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para construção de APIs RESTful.
- **MongoDB**: Banco de dados NoSQL para armazenamento das informações.
- **Multer**: Middleware para manipulação de uploads de imagens.

---

## 🧪 Testes e Validações

- Você pode usar ferramentas como o **Postman** ou **Insomnia** para testar as requisições.
- Certifique-se de que o servidor esteja rodando e as rotas estejam acessíveis via `http://localhost:<porta>`.

---

## 🙌 Contribuições

Sinta-se à vontade para contribuir com melhorias, abrindo issues ou enviando pull requests.

- 💡 Sugestões de melhorias são sempre bem-vindas!
- 🛠️ Encontrou um bug? Por favor, reporte!

---

## 💙 Desenvolvido Por

Feito com 💻, ☕ e muita dedicação por **[Yurikli1](https://github.com/Yurikli1)**.
