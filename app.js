const { log } = require('console');
const express = require('express');
const app = express();


const path = require("path");
const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));


let port = process.env.port || 3000;

app.listen(port,() => console.log("Servidor"))

console.log("Servidor corriendo")


app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})






