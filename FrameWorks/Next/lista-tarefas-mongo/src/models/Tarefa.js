//para modelar ea tarefa vou usar o proprio mongoDB

const { default: mongoose } = require("mongoose");

const TarefaSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required:[true, "O titulo da tarefa é obrigatorio"], //personalizo a mensagem de erro
        maxlength:[50, "<50char"],
        trim: true
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm:{
        type: Date,
        default: Date.now //pega a data na criaçao da tarefa
    }
});

export default mongoose.models.Tarefa || mongoose.model("Tarefa", TarefaSchema);
//se o modelo ja existir, usa ele, senao cria um novo modelo
//exporta  o m,odelo para ser usado em outras partes do projeto
