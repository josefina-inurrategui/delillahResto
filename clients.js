const sequelize = require('sequelize');
const DataBase = new sequelize ('mysql://root:@localhost:3306/Delillah');
const jwt = require('jsonwebtoken')
const firma = 'delilahResto'

module.exports ={

    signUp: (req, res) =>{
        DataBase.query(
            'INSERT INTO clientes (usuario, pass, nombre, apellido, email, telefono, direccion) VALUES (:usuario, :pass, :nombre, :apellido, :email, :telefono, :direccion)',{
                replacements: req.body
            }).then(result => console.log(result) || res.status(200).json('Usuario crado correctamente!'))
              .catch(error => console.log(error) || res.status(400).send('Invalid data'))
    },

    logIn: async (req,res) =>{
        const reqUser = req.body.usuario
        const reqPass = req.body.pass
        const password = await DataBase.query(`SELECT id, pass FROM clientes WHERE usuario = "${reqUser}"`, { type: sequelize.QueryTypes.SELECT })
        const isAdmin = await DataBase.query(`SELECT id, is_admin FROM clientes WHERE usuario = "${reqUser}"`, { type: sequelize.QueryTypes.SELECT })
        const passOk = password[0].pass
        const adminOk = isAdmin.find(item => item.is_admin === 1)
       
        if(passOk == reqPass){
            if(adminOk == undefined){
                const user = password[0]
                const token = jwt.sign({
                    user
                }, firma)
                res.json({token})
            }else { 
                const user = isAdmin[0]
                const token = jwt.sign({
                    user,
                    isAdmin
                }, firma)
                res.json({token})
            }

        }else { 
            res.json('Usuario o contraseña incorrectos!')
        }
    
    },

    updateClient: (req, res) => { 
        const id = req.user.user.id
        const newTelefono = req.body.telefono
        const newDireccion = req.body.direccion
        const newEmail = req.body.email
        DataBase.query(`UPDATE clientes SET telefono = ${newTelefono}, direccion = "${newDireccion}", email = "${newEmail}" WHERE id = ${id}`,{type: sequelize.QueryTypes.SET})
        .then(result => (console.log(result)) || res.status(200).json("Usuario Actualizado"))
        .catch(error => console.log(error) || res.status(400).send('Invalid data')) 
    },

    getClients: (req,res)=>{
        DataBase.query('SELECT * FROM clientes', { type: sequelize.QueryTypes.SELECT }).then(result =>res.status(200).json(result))

    },
    
    deleteClient: (req, res) => { 
        const id = req.params.id   
            DataBase.query(`DELETE FROM clientes WHERE id = ${id}`,{type: sequelize.QueryTypes.DELETE})
            .then(result => (console.log(result)) || res.status(200).json("Cliente Eliminado"))
            .catch(error => console.log(error) || res.status(400).send('Invalid data'))  
    }
} 
