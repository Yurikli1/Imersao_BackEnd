import { MongoClient } from "mongodb"; // Importa o cliente do MongoDB para conectar e interagir com o banco

// Função para conectar ao banco de dados MongoDB
export default async function conectarAoBanco(stringConexao) {
    let mongoClient; // Declara uma variável para armazenar a instância do cliente do MongoDB

    try {
        // Inicializa o cliente do MongoDB com a string de conexão fornecida
        mongoClient = new MongoClient(stringConexao);

        // Log para indicar que a conexão está sendo iniciada
        console.log('Conectando ao cluster do banco de dados...');

        // Estabelece a conexão com o banco de dados
        await mongoClient.connect();

        // Log para indicar que a conexão foi bem-sucedida
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        // Retorna o cliente do MongoDB conectado para ser utilizado
        return mongoClient;
    } catch (erro) {
        // Em caso de erro, exibe uma mensagem no console detalhando o problema
        console.error('Falha na conexão com o banco!', erro);

        // Finaliza o processo para evitar continuar a execução com o banco desconectado
        process.exit();
    }
}
