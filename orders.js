const sequelize = require('sequelize');
const DataBase = new sequelize ('mysql://root:@localhost:3306/Delillah');

module.exports ={

    postOrder: async (req, res) =>{
        const id_cliente = req.user.user.id
        const idPago = req.body.idPago
        const order = await DataBase.query(`INSERT INTO pedidos (id_pago, id_cliente) VALUES (${idPago},${id_cliente})`)
        const orderOK = await DataBase.query(`SELECT MAX(id) FROM pedidos WHERE id_cliente = ${id_cliente}`, { type: sequelize.QueryTypes.SELECT })
        const orderId = Object.values(orderOK[0].valueOf('MAX(id)'))
        req.body.items.forEach(item => {
             DataBase.query(`INSERT INTO producto_pedido (cantidad, id_producto, id_pedido) VALUES (${item.cantidad},${item.idProducto},${orderId})`)
        })
        if(!orderOk){
            return res.status(400).json('Datos ingresados incorrectos');
        }else { 
         res.status(200).json('Pedido Realizado')
        }
    },
    getAllOrders: async (req,res) =>{
        const allOrders = await DataBase.query(`SELECT pe.id, pe.estado, pe.fecha_hora, pr.producto, pp.cantidad, pr.precio, cl.usuario, cl.telefono, cl.direccion, cl.email, cl.nombre, cl.apellido, forma_pago.icon_pago
         FROM pedidos pe JOIN producto_pedido pp ON pe.id = pp.id_pedido
         JOIN clientes cl ON pe.id_cliente = cl.id 
         JOIN productos pr ON pp.id_producto = pr.id 
         JOIN forma_pago ON pe.id_pago = forma_pago.id
         JOIN imagenes ON pr.id_imagen = imagenes.id `, { type: sequelize.QueryTypes.SELECT })
         if(allOrders == ""){
                return res.status(400).json('No hay nada que mostrar.');
            }else { 
             res.status(200).json(allOrders)
            }
    },   
    getOrder: async (req,res) => {
        const id = req.params.id
        const idUser = req.user.user.id
        const db = await DataBase.query(`SELECT * FROM pedidos WHERE id = ${id} AND id_cliente = ${idUser}`, { type: sequelize.QueryTypes.SELECT })
        if(db == ""){
            return res.status(400).json('No hay pedidos que mostrar.');
        }else { 
         res.status(200).json(db)
        }
   
    },
    updateOrder: (req,res) => {
        const id = req.params.id
        const status = req.body
        DataBase.query(`UPDATE pedidos SET estado = '${status}' WHERE id = ${id} `,{type: sequelize.QueryTypes.SET}).then(result => (console.log(result)) || res.status(200).json("Estado Actualizado"))
    },
    deleteOrder: async (req,res) => {
        const id = req.params.id  
        const db = await DataBase.query(`SELECT * FROM pedidos WHERE id = ${id}`, { type: sequelize.QueryTypes.SELECT })
        if(db[0].estado == "Nuevo"){
            DataBase.query(`DELETE FROM pedidos WHERE id = ${id}`,{type: sequelize.QueryTypes.DELETE})
            DataBase.query(`DELETE FROM producto_pedido WHERE id_pedido = ${id}`,{type: sequelize.QueryTypes.DELETE})
            .then(result => (console.log(result)) || res.status(200).json("Pedido Eliminado"))
            .catch(error => console.log(error) || res.status(400).send('Invalid data'))
        }else {
            return res.status(400).json('No se puede eliminar un pedido ya en proceso, cambiar el estado a Cancelado');
        }
    }


}   