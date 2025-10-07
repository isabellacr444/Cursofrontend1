//ordem de serviço controller 

import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb"

//listar todos as ordens de serviço 
export const getOrdemServicos = async()=>{
   //conectar com o banco de dados
   await connectMongo();    
    //solitar para o mongo db
    const ordemServicos = await OrdemServico.find();//listar todos os usuarios da coleção
    return ordemServicos;   
}

//listar uma unica ordem de serviço
export async function getOrdemServicoById(id:string){
 await connectMongo();
 const ordemServico = await OrdemServico.findById(id);
 return ordemServico;
}

//criar ordem de serviço
export const createOrdemServico = async(data:Partial<IOrdemServico>)=>{
    await connectMongo();
    const ordemServico = new OrdemServico(data);
    await ordemServico.save();
    return ordemServico;
}   
//atualizar dados da ordem de serviço
export const uptateOrdemServico = async(id:string, data:Partial<IOrdemServico>)=>{
    await connectMongo();
    const ordemServicoAtualizado = await OrdemServico.findByIdAndUpdate
    (id, data, {
        new: true, //retorna o documento atualizado após modificação  
        runValidators: true //valida os dados de acordo com o schema
    });
    return ordemServicoAtualizado;
};
//deletar ordem de serviço
export const deleteOrdemServico = async(id:string)=>{
    await connectMongo();
    const ordemServicoDeletado = await OrdemServico.findByIdAndDelete(id);
    return ordemServicoDeletado;
};
