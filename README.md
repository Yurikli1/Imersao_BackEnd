#**🎉IMERSÃO BACK-END - Projeto de Blog de Fotos**

-Este repositório contém o código desenvolvido durante a Imersão Back-End da Alura, focado na criação de uma API para um blog de fotos.-

##**🛠️TECNOLOGIAS UTILIZADAS**:

*Node.js*: Ambiente de execução para JavaScript no servidor.
*Express*: Framework para construção de APIs em Node.js.
*MongoDB*: Banco de dados NoSQL para armazenamento dos posts.
*Multer*: Middleware para manipulação de uploads de arquivos.
*Google Gemini*: Integração com a API de IA para funcionalidades avançadas.

###**ESTRUTURA DO PROJETO**

*app.js*: Arquivo principal que inicializa o servidor e configura as rotas.

*routes/postsRoutes.js*: Define as rotas relacionadas aos posts.

*controllers/postsController.js*: Contém a lógica de controle para as rotas de posts.

*models/postsModel.js*: Define as funções de interação com o banco de dados para os posts.

*config/dbConfig.js*: Configuração da conexão com o MongoDB.

*uploads/*: Diretório onde as imagens enviadas são armazenadas.

####**🚀CONFIGURAÇÃO E EXECUÇÃO**

Clonar o repositório:

-git clone https://github.com/Yurikli1/Imersao_BackEnd.git

-cd Imersao_BackEnd

**INSTALAR AS DEPÊNDENCIAS**:

-npm install

**CONFIGURAR AS VARIÁVEIS DE AMBIENTE**:

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

-STRING_CONEXAO=<sua_string_de_conexao_com_o_MongoDB>

PORT=<porta_desejada>


**INICIAR O SERVIDOR**:

-npm run dev *(olhar o comando que está no **dev**, isto é apenas um atalho para iniciar o servidor)*

O servidor estará disponível em http://localhost:<porta_desejada>.

#####**ROTAS DISPONÍVEIS**

*GET /posts*: Retorna todos os posts.

*POST /posts*: Cria um novo post.

*PUT /upload/:id*: Atualiza um post existente com uma nova imagem.


***Nota: Este projeto foi desenvolvido como parte da Imersão Back-End da Alura, com foco em práticas de desenvolvimento de APIs e integração com serviços de IA.***
