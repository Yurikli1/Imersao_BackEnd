Imersão Back-End - Projeto de Blog de Fotos
-Este repositório contém o código desenvolvido durante a Imersão Back-End da Alura, focado na criação de uma API para um blog de fotos.-

Tecnologias Utilizadas
Node.js: Ambiente de execução para JavaScript no servidor.
Express: Framework para construção de APIs em Node.js.
MongoDB: Banco de dados NoSQL para armazenamento dos posts.
Multer: Middleware para manipulação de uploads de arquivos.
Google Gemini: Integração com a API de IA para funcionalidades avançadas.
Estrutura do Projeto
app.js: Arquivo principal que inicializa o servidor e configura as rotas.
routes/postsRoutes.js: Define as rotas relacionadas aos posts.
controllers/postsController.js: Contém a lógica de controle para as rotas de posts.
models/postsModel.js: Define as funções de interação com o banco de dados para os posts.
config/dbConfig.js: Configuração da conexão com o MongoDB.
uploads/: Diretório onde as imagens enviadas são armazenadas.
Configuração e Execução
Clonar o repositório:

bash
Copiar código
git clone https://github.com/Yurikli1/Imersao_BackEnd.git
cd Imersao_BackEnd
Instalar as dependências:

bash
Copiar código
npm install
Configurar as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
makefile
Copiar código
STRING_CONEXAO=<sua_string_de_conexao_com_o_MongoDB>
PORT=<porta_desejada>
Iniciar o servidor:

bash
Copiar código
npm start
O servidor estará disponível em http://localhost:<porta_desejada>.

Rotas Disponíveis
GET /posts: Retorna todos os posts.
POST /posts: Cria um novo post.
POST /upload: Faz o upload de uma imagem e cria um post associado.
PUT /upload/:id: Atualiza um post existente com uma nova imagem.
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Nota: Este projeto foi desenvolvido como parte da Imersão Back-End da Alura, com foco em práticas de desenvolvimento de APIs e integração com serviços de IA.
