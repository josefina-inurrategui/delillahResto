const sequelize = require('sequelize');
const DataBase = new sequelize ('mysql://root:@localhost:3306/delillah');
const jwt = require('jsonwebtoken')
const firma = 'delilahResto' 
module.exports = {

    validarIdProducto: async (req, res, next) => {
            const db = await DataBase.query(`SELECT * FROM productos WHERE id = ${req.params.id}`, {type: sequelize.QueryTypes.SELECT})
            const dbFind = db.find(item => item.id == req.params.id)
            if(!dbFind){
                return res.status(400).json('Id incorrecto');
            } 
            next() 
    },

    validarUsuario: async (req, res, next) => {
        const db = await DataBase.query(`SELECT * FROM clientes WHERE usuario = "${req.body.usuario}"`, {type: sequelize.QueryTypes.SELECT})
        const dbFind = db.find(item => item.usuario == req.body.usuario)
        if(!dbFind){
            return res.status(400).json('Usuario o contraseña incorrectos!');
        } 
        next() 
    },

    onlyAdmin: (req, res, next) => {
        try{
            const token = req.headers.authorization.split(' ')[1]
            const verifyToken = jwt.verify(token, firma)
            if(verifyToken){
                req.user = verifyToken;
                if(req.user.user.is_admin == 1){
                    return next()
                } else{ 
                    res.json({error: 'Solo administradores'})
                }

            }
        } catch (err){
            res.json({error: 'error al validar usuario'})
        }

    },

    userOK: (req, res, next) => {
        try{
            const token = req.headers.authorization.split(' ')[1]
            const verifyToken = jwt.verify(token, firma)
            if(verifyToken){
                req.user = verifyToken;
                return next()
            }
        } catch (err){
            res.json({error: 'error al validar usuario'})
        }
    },
    validarIdPedido: async (req, res, next) => {
        const db = await DataBase.query(`SELECT * FROM pedidos WHERE id = ${req.params.id}`, {type: sequelize.QueryTypes.SELECT})
        const dbFind = db.find(item => item.id == req.params.id)
        if(!dbFind){
            return res.status(400).json('Id incorrecto');
        } 
        next() 
},
}
       
