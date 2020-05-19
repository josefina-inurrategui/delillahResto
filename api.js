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
server.put('/clientes/update', userOK, updateClient)
server.delete('/clientes/cliente/:id', onlyAdmin, deleteClient) 

//- Products: - 
server.post('/productos', onlyAdmin, createProduct)
server.get('/productos', getAllProducts) 
server.put('/productos/producto/:id',validarIdProducto, onlyAdmin, updateProduct)
server.delete('/productos/producto/:id', validarIdProducto, onlyAdmin, deleteProduct)

// - Orders: - 
server.post('/pedidos', userOK, postOrder)
server.get('/pedidos', onlyAdmin, getAllOrders)
server.get('/pedidos/userOrder/:id', userOK, getOrder)
server.put('/pedidos/pedido/:id', onlyAdmin, updateOrder)
server.delete('/pedidos/pedido/:id', validarIdPedido, onlyAdmin, deleteOrder) 
