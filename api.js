const server = require('express')();
const bodyParserJson = require('body-parser').json();
const cors = require('cors');
const {validarIdProducto, validarUsuario, onlyAdmin, userOK, validarIdPedido } = require('./middlewares')
const { signUp,  logIn, getClients, updateClient, deleteClient } = require('./clients')
const { createProduct, deleteProduct, updateProduct, getAllProducts } = require('./products')
const { postOrder, getAllOrders, getOrder, updateOrder, deleteOrder } = require('./orders')


server.listen(3001,()=> console.log('servidor iniciado...'))
server.use(bodyParserJson)
server.use(cors());
server.use(function(err, req, res, next) {
    if(!err) return next();
    console.log('Error, algo salio mal', err);
    res.status(500).send('Error');
});
//- Clients: -
server.post('/clientes', signUp)
server.post('/clientes/login', validarUsuario, logIn)
server.get('/clientes', onlyAdmin, getClients)
server.put('/clientes', userOK, updateClient)
server.delete('/clientes/:id', onlyAdmin, deleteClient) 

//- Products: - 
server.post('/productos', onlyAdmin, createProduct)
server.get('/productos', getAllProducts) 
server.put('/productos/:id',validarIdProducto, onlyAdmin, updateProduct)
server.delete('/productos/:id', validarIdProducto, onlyAdmin, deleteProduct)

// - Orders: - 
server.post('/pedidos', userOK, postOrder)
server.get('/pedidos', onlyAdmin, getAllOrders)
server.get('/pedidos/:id', userOK, getOrder)
server.put('/pedidos/:id', onlyAdmin, updateOrder)
server.delete('/pedidos/:id', validarIdPedido, onlyAdmin, deleteOrder) 
