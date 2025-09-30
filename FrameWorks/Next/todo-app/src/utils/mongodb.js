import mongoose from 'mongoose';

//arrow function -> conexão
const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL) //estabelece a conexão com o banco
 .then(() => {
       console.log("Conectado ao MongoDB");
   })
   .catch((error) => {
       console.error("Erro ao conectar ao MongoDB:", error); 
   });
}

export default connectMongo;    