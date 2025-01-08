import express from "express"
import { delusers, listarusers, postusers, putusers } from "../controllers/controllers.js"


const router = express.Router(); 
    router.get("/gerenciador", listarusers);
    router.post("/gerenciador", postusers);
    router.put("/gerenciador/:id", putusers);
    router.delete("/gerenciador/:id", delusers);


export default router
