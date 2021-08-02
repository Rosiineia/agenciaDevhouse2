const express= require("express");

const routes= express.Router();

module.express= routes;

routes.use(express.static('public'))//COM ESSA EXTENSÃO BASTA COLOCAR O NOME DA IMAGEM

routes.get("/", (req, res) => {
    res.sendFile(__dirname +"/views/home.html")
})




routes.get("/", (req, res)=>{
    res.redirect("/");
})
//ROTAS

//routes.get("/", (req, res)=>res.send("Olá, estamos na página home"))

/*routes.get("/", (req, res)=> { res.send("seja bem vindo")
})*/

//MOSTRANDO ERROS 
/*routes.get("/manutencao",(req, res) =>{ res.send( "Site em manutenção")
})*/

//colocando imagens - encntrar um caminho absoluto

routes.get("/home",(req, res)=>{res.sendFile(__dirname + "/views/home.html")}); /*usamos em todas as paginas 
para buscar as pastas e aparecer no servidor*/
routes.get("/blog",(req, res)=>{res.sendFile(__dirname + "/views/blog.html")});
routes.get("/blog",(req, res)=>{res.sendFile(__dirname + "../public/img/destaque.webp")});

routes.get("contato",(req, res)=>{res.sendFile(__dirname + "/views/contato.html")});


//routes.get("/manutencao",(req, res)=>{res.sendFile(__dirname + "/views/manutencao.html")});
