import { MongoClient } from "mongodb"
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://lirabeatriz001:Bia%40864592@cluster0.tvlrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Connect to your Atlas cluster
const client = new MongoClient(url);

 export async function conectarbanco() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
        return client;

    } catch (err) {
        console.log('deu ruimm ao conectar ao banco: ', err.stack);
    }
    
}

conectarbanco().catch(console.dir);
