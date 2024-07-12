const express = require('express');
const app = express();
const path = require("path");


// express.static es un middleware que sirve para configurar la ruta de los archivos estáticos.
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

//Config para capturar la info del formulario con POST en req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//PUT/Delete
//const methodOverride = require('method-override'); 
//app.use(methodOverride('_method')); 


const PORT = 3020; 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});




// Formulario html de Crea tu Cuenta
app.get("/register", (req,res) => res.sendFile(path.join(__dirname,"/views/register.html")));

// Formulario html de login
app.get("/login", (req,res) => res.sendFile(path.join(__dirname,"/views/login.html")));



//Confir de rutas
const homeRoutes= require('./src/routes/home.routes.js');


app.use('/', homeRoutes);


