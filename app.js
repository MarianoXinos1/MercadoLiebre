const express = require('express');

const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));


const PORT = 3020; 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});


// Para mi LocalHost
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/views/home.html")));

// Formulario html de Crea tu Cuenta
app.get("/register", (req,res) => res.sendFile(path.join(__dirname,"/views/register.html")));

// Formulario html de login
app.get("/login", (req,res) => res.sendFile(path.join(__dirname,"/views/login.html")));




