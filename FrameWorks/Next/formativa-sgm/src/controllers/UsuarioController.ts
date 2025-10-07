//listar todos os usuarios 

import Usuario, { IUsuario } from "@/models/Usuarios";
import connectMongo from "@/services/mongodb"

export const getUsuarios = async()=>{
   //conectar com o banco de dados
   await connectMongo();
   //solitar para o mongo db
   const usuarios = await Usuario.find();//listar todos os usuarios da coleção
   return usuarios;
}

//listar um unico usuario
export async function getUsuariosById(id:string){
 await connectMongo();
 const usuario = await Usuario.findById(id);
 return usuario;
}

//criar usuario
export const createUsuario = async(data:Partial<IUsuario>)=>{
    await connectMongo();
    const novoUsuario =new Usuario(data);
    const novoUsuarioId = await novoUsuario.save();
    return novoUsuarioId;
}

//atualizar dados do usuario
export const uptateUsuario = async(id:string, data:Partial<IUsuario>)=>{
    await connectMongo();
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, data, {
        new: true, //retorna o documento atualizado
        runValidators: true //valida os dados de acordo com o schema
    });
    return usuarioAtualizado;
};

//deletar usuario
export const deleteUsuario = async(id:string)=>{
    await connectMongo();
    const usuarioDeletado = await Usuario.findByIdAndDelete(id);
    return usuarioDeletado;
};
//metodo para autenticação do usuario (login) 
export const autenticaUsuario = async(email:string, senha:string)=>{
    await connectMongo();
    //buscar o usuario pelo email
    const usuario = await Usuario.find({email}).select("+senha");
    if(!usuario || usuario.length === 0){
        throw new Error("Usuário não encontrado");

        //comparar a senha
        const senhaCorreta = await usuario[0].compareSenha(senha);
        if(!senhaCorreta) return null;//senha incorreta
        //se der certo
        return usuario[0];
    }
    }
    