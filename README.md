# delillahResto
RESTfull API utilizando: 
  - express
  - nodejs
  - MySQL 
  - Javascript 
descripcion: "API para manejo de información de pedidos en un restaurante." 
version: "1.0.0"
titulo: "Delillah Resto" 
contacto: Josefina Iñurrategui
email: josefina.inurrategui@gmail.com
 

# SERVIDOR: 
  Para iniciar el servidor:
    -Instalar la dependencia "express" (npm install express);
    -Dentro del archivo "api.js" se puede ver que el puerto que se esta utilizando es 3001, si desea puede cambiarlo.
    
# DEPENDENCIAS:
  En esta API se utilizan las siguientes dependencias que deberá instalar:
    - body-parser
    - cors
    - sequelize
    - jsonwebtoken
    - MySQL2
(Encontrarán todas las dependencias en el archivo "package.json")

# BASE DE DATOS:
  Una vez instalada la dependencia, en el archivo "deliallah.sql" encontrará todo lo necesario para crear la base de datos.
  Se recomienda usar PhpMyAdmin.

# POSTMAN:
  En el archivo "Api Delillah.postman_collection.json" se encuentran las pruebas a los endopoints con los request necesarios.  

# RESPONSE:
  Toda las respuestas serán un objeto json.

# ENDPOINTS:
  A clientes: 
    - post/clientes
    - postclientes/login
    - get/clientes
    - put/clientes/update
    - delete/clientes/cliente/:id

  A productos:
    - post/productos
    - get/productos
    - put/productos/producto/:id
    - delete/productos/producto/:id

  A Pedidos
    - post/pedidos
    - get/pedidos
    - get/pedidos/userOrder/:id
    - put/pedidos/pedido/:id
    - delete/pedidos/pedido/:id
------------------------------------//------------------------------------------
RESTfull API using: 
  - express
  - nodejs
  - MySQL 
  - Javascript 
description: "API for the managment of restaurant online orders" 
version: "1.0.0"
title: "Delillah Resto" 
contact: Josefina Iñurrategui
email: josefina.inurrategui@gmail.com

# SERVER: 
  To initialice the server:
    - Install "express" dependency (npm i express);
    - On "api.js" you will see that the port used is 3001, if need it change it

# DEPENDENCIES:
  The dependencies to install in the API are:
      - body-parser
      - cors
      - sequelize
      - jsonwebtoken
      - MySQL2
  (You will find all of them in the "package.json")
  
# DATA BASE:
  Once the dependency MySQL2 is install, you'll be able to create de data base with "delillah.sql" file
  We recomend using PhpMyAdmin.


# POSTMAN:
 In the file "Api Delillah.postman_collection.json" are the test and requests to the enpoints.
 
# RESPONSE:
  All endpoints return Json object.
  
# ENDPOINTS:
  To clients: 
    - post/clientes
    - postclientes/login
    - get/clientes
    - put/clientes/update
    - delete/clientes/cliente/:id

  To products:
    - post/productos
    - get/productos
    - put/productos/producto/:id
    - delete/productos/producto/:id

  To Orders
    - post/pedidos
    - get/pedidos
    - get/pedidos/userOrder/:id
    - put/pedidos/pedido/:id
    - delete/pedidos/pedido/:id
