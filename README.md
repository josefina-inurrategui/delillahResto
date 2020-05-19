# delillahResto
RESTful API utilizando: 
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
    - post/clientes/login
    - get/clientes
    - put/clientes/
    - delete/clientes/:id

  A productos:
    - post/productos
    - get/productos
    - put/productos/:id
    - delete/productos/:id

  A Pedidos
    - post/pedidos
    - get/pedidos
    - get/pedidos/userOrder/:id
    - put/pedidos/:id
    - delete/pedidos/:id
    
--------------//--------------------------

RESTfull API using: 
  - express
  - nodejs
  - MySQL 
  - Javascript 
description: "API for the managment of online restaurant orders" 
version: "1.0.0"
title: "Delillah Resto" 
contact: Josefina Iñurrategui
email: josefina.inurrategui@gmail.com

# SERVER: 
  To initialize the server:
    - Install "express" dependency (npm i express);
    - On "api.js" you will see that the port used is 3001, if needed, change it.

# DEPENDENCIES:
  The dependencies to install in the API are:
      - body-parser
      - cors
      - sequelize
      - jsonwebtoken
      - MySQL2
  (You will find them all in the "package.json")
  
# DATABASE:
  Once the dependency MySQL2 is installed, you'll be able to create the database and tables using "delillah.sql".
  We recomend using PhpMyAdmin.


# POSTMAN:
 In the file "Api Delillah.postman_collection.json" are the tests and requests to the endpoints.
 
# RESPONSE:
  All endpoints return Json objects.
  
# ENDPOINTS:
  Clients: 
    - post/clientes
    - post/clientes/login
    - get/clientes
    - put/clientes
    - delete/clientes/:id

  Products:
    - post/productos
    - get/productos
    - put/productos/:id
    - delete/productos/:id

  Orders
    - post/pedidos
    - get/pedidos
    - get/pedidos/userOrder/:id
    - put/pedidos/:id
    - delete/pedidos/:id
