const express= require('express');
const logger= require('morgan');
const bodyParser= require('body-parser');

const http= require('http');

const app= express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=> res.status(200).send({
    message:'Luis Hernandez',
}));

const port=parseInt(process.env.PORT,10) || 8000;
app.set('port', port);

const server= http.createServer(app);
server.listen(port);

module.exports=app;

/*
Usuarios
    nombre
    contraseña
    direccion
    fecha_registro
    email
    id
    telefono

Categorias
    id
    nombre

Productos
    id
    nombre
    descripcion
    precio
    stock
    id_categoria

Carritos
    id
    id_usuario
    fecha_creacion

Carrito_detalle
    id
    id_carrito
    id_producto
    cantidad
    precio_detalle
*/

