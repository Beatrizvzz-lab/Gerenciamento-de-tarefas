import express from "express"
import { delrotina, listarrotina, postrotina, putrotina} from "../controllers/taskcontroller.js"


const router = express.Router(); 
    router.get("/rotina", listarrotina);
    router.post("/rotina", postrotina);
    router.put("/rotina/:id", putrotina);
    router.delete("/rotina/:id", delrotina);


export default router
