/*Importamos server js para poder utilizar sus metodos*/
const server = require('./src/server')

/*Importamos nustra libreria de conexion */
const db = require('./src/lib/db')

/*Utilizamos la variable server para utilizar el metodo listen */
server.listen(8080, () => {
  /*Mostramos un mensaje al momento de correr el servicio*/
  console.log('FondAPI running in port 8080')
  /*Utilizamos la variable donde importamos la libreria db y utilizamos
  el metodo connect*/
  db.connect()
    .then(() => console.log('DB connected'))/*Retornamos la primer promesa*/
    .catch(() => console.error('DB error while connect'))/*Catch en caso error*/
})

///////////////////////////////////////////////////////////////////


