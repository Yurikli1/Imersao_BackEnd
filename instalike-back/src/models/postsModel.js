// Importa a função que estabelece a conexão com o banco de dados
import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente
// `process.env.STRING_CONEXAO` é a variável que contém a URL de conexão com o MongoDB
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados chamado "imersao"
    const db = conexao.db("imersao");
    // Seleciona a coleção chamada "posts" dentro do banco
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção "posts" como um array
    return colecao.find().toArray();
}

// Função assíncrona para criar um novo post no banco de dados
export async function criarPost(novoPost) {
    // Seleciona o banco de dados chamado "imersao"
    const db = conexao.db("imersao");
    // Seleciona a coleção chamada "posts" dentro do banco
    const colecao = db.collection("posts");
    // Insere o novo post na coleção e retorna o resultado da operação
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id:new ObjectId(objId)}, {$set:novoPost});
}