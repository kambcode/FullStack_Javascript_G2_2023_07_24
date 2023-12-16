# Excersice

- create an app with
- should have the follow methods
  - get (obtener info server -> client)
  - post (enviar info cliente -> server)
  - put (actualizar enviar info cliente -> server)
  - delete (eliminar enviar info cliente -> server)
- should bring data from api colombia and api pokemon (handling pagination)
- should have diferent route files for both of them
- should have middlewares
- should have controllers
- should have services

'/create/item'
service -> create id, save the data obj, return -> controller

- we need to create a new object with:
  `   {
       id: uuid,
       department: string,
       pokemon: string,
   }`

project-root/
|-- src/
| |-- controllers/
| | |-- UserController.js
| |
| |-- models/
| | |-- UserModel.js
| |
| |-- routes/
| | |-- index.js
| | |-- users.js
| |
| |-- app.js
|
|-- .env
|-- package.json

paso 1
edison -> servicio colombia get all departments
wilmer -> controladores colombia get all departments
roberto -> routes colombia get all departmens

paso 2
todos -> controlador para pokeColombia Post -> pokemon name, department name,
todos -> routes para pokeColombia Post -> pokemon post
todos -> servicio para pokeColombia -> data[].push({name, department}) singleton (ver pokemon service line 22)

paso 3
todos -> route para get pokeColombia
todos -> servicio para get data pokeColombia
todos -> controlador para get pokeColombia
