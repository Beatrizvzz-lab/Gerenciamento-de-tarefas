import {ObjectId} from "mongodb";
import {conectarbanco} from "../db/db.js"
const conexao = await conectarbanco();

export async function getusers()  {
    const db = conexao.db("Tarefas");
   const colecao = db.collection("gerenciador");
   return colecao.find().toArray()
}

export async function criarpost(post){
    const db = conexao.db("Tarefas");
    const colecao = db.collection("gerenciador")
    return colecao.insertOne(post)
}
export async function atualizarusers(id, nomecompleto , email , telefone , endereco , senha , confirmacao) {
    const db = conexao.db("Tarefas");
    const colecao = db.collection("gerenciador");
    try{
    const objId = ObjectId.createFromHexString(id);
    const filtro = {_id: new ObjectId(objId)}
    const alteracoes = {
        $set:{nomecompleto , email , telefone , endereco , senha , confirmacao}
    }
    const resultado = await colecao.updateOne(filtro, alteracoes);
    return resultado
    }catch(erro){
        console.log("erro ao atualizar usuários");
    }
}
export async function deleteusers(id, nomecompleto , email , telefone , endereço , senha , confirmacao) {
    const db = conexao.db("Tarefas");
    const colecao = db.collection("gerenciador");
    try{
    const objId = ObjectId.createFromHexString(id);
    const filtro = {_id: new ObjectId(objId)}
    const alteracoes = {
        $et:{nomecompleto , email , telefone , endereço , senha , confirmacao },
    }
    const resultado = await colecao.deleteMany(filtro, alteracoes);
    return resultado
    }catch(erro){
        console.log("erro ao deletar usuários");
    }
}