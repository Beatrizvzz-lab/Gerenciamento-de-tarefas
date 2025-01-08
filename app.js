import express from "express";
import cors from "cors";
import route from "./routes/route.js";
import taskroute from "./routes/taskroute.js"

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", route);
app.use("/",taskroute);

app.listen(3000, ()=>{
    console.log("Sistema Está Rodando!")
})