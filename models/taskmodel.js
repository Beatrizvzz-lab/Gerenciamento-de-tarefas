import {ObjectId} from "mongodb";
import {conectarbanco} from "../db/db.js"
const conexao = await conectarbanco();

export async function getrotina()  {
    const db = conexao.db("listas");
   const colecao = db.collection("rotina");
   return colecao.find().toArray()
}

export async function criarrotina(criar){
    const db = conexao.db("listas");
    const colecao = db.collection("rotina")
    return colecao.insertOne(criar)
}
export async function atualizarrotina(id, titulotarefa , descricao , prioridade , status , prazo , resposnsavel, horasgastas) {
    const db = conexao.db("listas");
    const colecao = db.collection("rotina");
    try{
    const objId = ObjectId.createFromHexString(id);
    const filtro = {_id: new ObjectId(objId)}
    const alteracoes = {
        $set:{titulotarefa , descricao , prioridade , status , prazo , resposnsavel, horasgastas}
    }
    const resultado = await colecao.updateOne(filtro, alteracoes);
    return resultado
    }catch(erro){
        console.log("erro ao atualizar tarefa");
    }
}
export async function deleterotina(id, titulotarefa , descricao , prioridade , status , prazo , resposnsavel, horasgastas) {
    const db = conexao.db("listas");
    const colecao = db.collection("rotina");
    try{
    const objId = ObjectId.createFromHexString(id);
    const filtro = {_id: new ObjectId(objId)}
    const alteracoes = {
        $et:{titulotarefa , descricao , prioridade , status , prazo , resposnsavel, horasgastas},
    }
    const resultado = await colecao.deleteMany(filtro, alteracoes);
    return resultado
    }catch(erro){
        console.log("erro ao deletar tarefa");
    }
}