import express from "express"; // Importa o framework Express para criar e gerenciar o servidor
import multer from "multer"; // Importa o Multer para lidar com uploads de arquivos
import cors from "cors";
import { atualizaPosts, listarPosts, postarPosts, uploadImagem } from "../controllers/postsController.js"; // Importa as funções do controlador para manipular as rotas

const corsOption = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

// Configuração de armazenamento para o Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Define o diretório onde os arquivos serão salvos
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Define o nome do arquivo como o original enviado pelo cliente
        cb(null, file.originalname);
    }
});

// Cria uma instância do Multer com o armazenamento configurado
const upload = multer({ dest: "./uploads", storage });

// Define as rotas do aplicativo
const routes = (app) => {
    // Permite que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());
    app.use(cors(corsOption))
    // Rota para buscar todos os posts, chama a função listarPosts do controlador
    app.get("/posts", listarPosts);

    // Rota para criar um novo post, chama a função postarPosts do controlador
    app.post("/posts", postarPosts);

    // Rota para upload de imagem, chama a função uploadImagem do controlador
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizaPosts)
}

// Exporta as rotas para serem utilizadas em outras partes do aplicativo
export default routes;
