import {getusers, criarpost, atualizarusers, deleteusers} from "../models/usersmodel.js"
export async function listarusers(req , res){
    const get = await getusers();
    res.status(200).json(get)
}

export async function postusers(req, res){
    const post = req.body
try{
    const postcriado = await criarpost(post);
    res.status(200).json(postcriado);
}catch(erro){
    console.log(erro.message);
    res.status(500).json("Erro interno no servidor");
}   
}
export async function putusers(req, res){
    const id = req.params.id
    const {nomecompleto , email , telefone , endereco , senha , confirmacao} = req.body
    try{
        const put = await atualizarusers(id,nomecompleto , email , telefone , endereco , senha , confirmacao);
        res.status(200).json(put);
    }catch(erro){
        console.log(erro.message);
        res.status(500).json("Erro ao atualizar usuário")
    }
}
export async function delusers(req, res){
    const id = req.params.id
    try{
        const del = await deleteusers(id);
        res.status(200).json(del);
    }catch(erro){
        console.log(erro.message);
        res.status(500).json("Erro ao deletar usuário")
    }
}

