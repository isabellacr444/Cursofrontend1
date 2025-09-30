//fazer a conexão com o MongoDB (mongoose)

const { default: mongoose } = require("mongoose")


// arrowFunction 

const connectMongo =  async () => {

    mongoose.connect(process.env.DATABASE_URL)//estabelecer conexão com o banco de dados
    .then(() => console.log("Conectou ao MongoDB"))
    .catch(err => console.error("ERRO AO CONECTAR NO MONGODB:", err));

//conexão assíncrona simples com mongodb
}

export default connectMongo
//modelo pode ser usado em outras partes do projeto de ações do código

module.exports = connectMongo