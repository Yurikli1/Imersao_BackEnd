import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js"; // Importa funções do modelo para manipular dados dos posts
import fs from "fs"; // Importa o módulo 'fs' para manipulação de arquivos no sistema
import gerarDescricaoComGemini from "../services/geminiService.js";

// Função para listar todos os posts
export async function listarPosts(req, res) {
    // Chama a função para buscar todos os posts no banco de dados
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts); 
}

// Função para criar um novo post
export async function postarPosts(req, res) {
    // Recupera os dados do novo post enviados no corpo da requisição
    const novoPost = req.body;

    try {
        // Chama a função para salvar o novo post no banco de dados
        const postCriado = await criarPost(novoPost);
        // Envia uma resposta HTTP com status 200 e os dados do post criado
        res.status(200).json(postCriado);
    } catch (error) {
        // Em caso de erro, exibe a mensagem no console e retorna um erro 500 ao cliente
        console.log(error.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

// Função para realizar o upload de uma imagem e salvar os dados no banco
export async function uploadImagem(req, res) {
    // Cria um objeto de novo post com as informações da imagem
    const novoPost = {
        descricao: "", // Campo descrição vazio, pode ser preenchido posteriormente
        imgurl: req.file.originalname, // Nome original do arquivo enviado
        alt: "" // Campo alternativo vazio
    };

    try {
        // Salva os dados do novo post no banco de dados
        const postCriado = await criarPost(novoPost);

        // Define o caminho atualizado da imagem, usando o ID do post criado
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;

        // Renomeia o arquivo da imagem para associá-lo ao ID do post
        fs.renameSync(req.file.path, imagemAtualizada);

        // Envia uma resposta HTTP com status 200 e os dados do post criado
        res.status(200).json(postCriado);
    } catch (error) {
        // Em caso de erro, exibe a mensagem no console e retorna um erro 500 ao cliente
        console.log(error.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

export async function atualizaPosts(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`
    try {
        
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
        const descricao = await gerarDescricaoComGemini(imgBuffer)

        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}