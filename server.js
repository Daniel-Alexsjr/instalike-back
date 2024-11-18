import express from "express"

const app = express();
app.listen(3000, ()=>{
    console.log("servidor escutando...");
});

app.get("/api", (req, res)=>{
    res.status(200).send("The quick brow fox jumps over the lazy dog");
});