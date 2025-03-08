import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// API Route
app.get("/api/greet",(req,res)=>{
    const {name} =req.query;
    if(!name){
        return res.status(400).json({ error: "Name is required." });
    }else{
return res.status(200).json({ message: `Hello, ${name}! Welcome to Younglabs.` });
    }
})


//Server
app.listen(PORT,()=>{
    console.log(`app is running at port no: ${PORT}`)
})