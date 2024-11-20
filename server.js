import express from "express"

const posts = [
    { 
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "grey cat",
        imagem: "https://placecats.com/g/300/200"
    },
    {
        id: 3,
        descricao: "bella",
        imagem: "https://placecats.com/bella/300/200"
    },
    {
        id: 4,
        descricao: "neo_2",
        imagem: "https://placecats.com/neo_2/300/200"
    }
];

const app = express();
app.use(express.json());


app.listen(3000, ()=>{
    console.log("servidor escutando...");
});

app.get("/posts", (req, res)=>{
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res)=>{
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});