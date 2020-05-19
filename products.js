const sequelize = require('sequelize');
const DataBase = new sequelize ('mysql://root:@localhost:3306/delillah');

module.exports ={
    createProduct: (req, res) =>{
        DataBase.query(
            'INSERT INTO productos (producto, descripcion, precio, disponibilidad, id_imagen) VALUES (:producto, :descripcion, :precio, :disponibilidad, :id_imagen)',{
                replacements: req.body
            }).then(result => console.log(result) || res.status(200).json('Producto Agregado'))
              .catch(error => console.log(error) || res.status(400).send('Invalid data'))
    },
    
    getAllProducts: (req,res) => {
        DataBase.query('SELECT * FROM productos', { type: sequelize.QueryTypes.SELECT })
        .then(result =>res.status(200).json(result))
        .catch(error => console.log(error) || res.status(400).json('Invalid data'))
    },

    updateProduct: (req,res) => {
        const id = req.params.id
        const newPrice = req.body.precio
        const disponibilidad = req.body.disponibilidad
            if(req.body.precio){
                if(req.body.disponibilidad == 0||1){
                    DataBase.query(`UPDATE productos SET precio = ${newPrice}, disponibilidad = ${disponibilidad} WHERE id = ${id}`,{type: sequelize.QueryTypes.SET})
                    .then(result => console.log(result) || res.status(200).json("Producto Actualizado"))
                    .catch(error => console.log(error) || res.status(400).send('Invalid data'))
                } else {
                   DataBase.query(`UPDATE productos SET precio = ${newPrice} WHERE id = ${id}`,{type: sequelize.QueryTypes.SET})
                   .then(result => console.log(result) || res.status(200).json("Producto Actualizado"))
                   .catch(error => console.log(error) || res.status(400).send('Invalid data'))
                }
            } else {
                if(req.body.disponibilidad == 0||1 ){
                  DataBase.query(`UPDATE productos SET disponibilidad = ${disponibilidad} WHERE id = ${id}`,{type: sequelize.QueryTypes.SET})
                  .then(result => (console.log(result)) || res.status(200).json("Producto Actualizado"))
                  .catch(error => console.log(error) || res.status(400).send('Invalid data'))                
                }
            }
    },

    deleteProduct: (req, res) => {
        const id = req.params.id   
            DataBase.query(`DELETE FROM productos WHERE id = ${id}`,{type: sequelize.QueryTypes.DELETE})
            .then(result => (console.log(result)) || res.status(200).json("Producto Eliminado"))
            .catch(error => console.log(error) || res.status(400).send('Invalid data'))               
    }
}
