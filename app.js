//IMPORTANDO MODULOS

const express = require("express");

const app = express();
app.use(express.static('public'));//COM ESSA EXTENSÃO BASTA COLOCAR O NOME DA IMAGEM


//ROTAS

//app.get("/", (req, res)=>res.send("Olá, estamos na página home"))

/*app.get("/", (req, res)=> { res.send("seja bem vindo")
})*/

//MOSTRANDO ERROS 
/*app.get("/manutencao",(req, res) =>{ res.send( "Site em manutenção")
})*/

//colocando imagens - encntrar um caminho absoluto

app.get("/home",(req, res)=>{res.sendFile(__dirname + "/views/home.html")}); /*usamos em todas as paginas 
para buscar as pastas e aparecer no servido*/

//app.get("/manutencao",(req, res)=>{res.sendFile(__dirname + "/views/manutencao.html")});


app.listen(3000, ()=> console.log("o servidor foi instalado"));

