import mongoose, { Document, Model, Schema } from "mongoose";

//definir a estrutura dos objs
export interface Itarefa extends Document{
    //heradamos a base Document do Mongoose
    //criar a estrutura do obj
    titulo: string;
    concluida: boolean;
    criadaEm: Date;
}

//criar as regras para a interface ao conectar com o Mongo (Schema)

const TarefaSchema: Schema<Itarefa> = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true,"O Título é obrigatório"],
        trim: true,
        maxlength:[50, "máximo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm: {
        type: Date,
        default: Date.now
    }
});

//export do modelo
const Tarefa :Model<Itarefa> = mongoose.models.Tarefa || mongoose.model<Itarefa>("Tarefa", TarefaSchema);
//mongoose.models.Tarefa => verifica se o modelo já existe
//mongoose.model<Itarefa>("Tarefa", TarefaSchema) => cria o modelo

export default Tarefa; //exporta o modelo
//import Tarefa from "../models/Tarefas"            //importa o modelo
