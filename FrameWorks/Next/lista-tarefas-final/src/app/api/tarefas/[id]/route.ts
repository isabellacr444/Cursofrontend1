//PATCH - DELETE // rotas com parametro ID

import { deleteTarefa, updateTarefa } from "@/controllers/tarefaController";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Parametros {
  id: string;
}

//PATCH
export async function PATCH(req: NextRequest, { rota }: { rota: Parametros }) {
  try {
    const { id } = rota; //pega o id da Rota
    const data = await req.json();
    const tarefaAtualizada = await updateTarefa(id, data);
    if(!tarefaAtualizada){
        return NextResponse.json({success:false,error:"Not Found"})
    }
    return NextResponse.json({ success: true, data: tarefaAtualizada });
  } catch (e) {
    return NextResponse.json({ success: false, error: e });
  }
}

//DELETE
export async function DELETE({ rota }: { rota: Parametros }) {
  try {
    const { id } = rota;
    const resposta = await deleteTarefa(id);
    if (!resposta) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (e) {
    return NextResponse.json({ success: false, error: e });
  }
}
