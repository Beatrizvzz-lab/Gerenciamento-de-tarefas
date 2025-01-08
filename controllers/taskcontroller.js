import {getrotina, criarrotina, atualizarrotina, deleterotina} from "../models/taskmodel.js"
export async function listarrotina(req , res){
    const list = await getrotina();
    res.status(200).json(list)
}

export async function postrotina(req, res){
    const criar = req.body
try{
    const criado = await criarrotina(criar);
    res.status(200).json(criado);
}catch(erro){
    console.log(erro.message);
    res.status(500).json("Erro interno no servidor");
}   
}
export async function putrotina(req, res){
    const id = req.params.id
    const {titulotarefa , descricao , prioridade , status , prazo , resposnsavel, horasgastas} = req.body
    try{
        const atl = await atualizarrotina(id,titulotarefa , descricao , prioridade , status , prazo , resposnsavel, horasgastas);
        res.status(200).json(atl);
    }catch(erro){
        console.log(erro.message);
        res.status(500).json("Erro ao atualizar tarefas")
    }
}
export async function delrotina(req, res){
    const id = req.params.id
    try{
        const del = await deleterotina(id);
        res.status(200).json(del);
    }catch(erro){
        console.log(erro.message);
        res.status(500).json("Erro ao deletar tarefas")
    }
}

