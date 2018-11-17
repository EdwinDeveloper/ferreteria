/*Importamos los modulos de express previamente instalados*/
const express = require('express')

/*Declaramos una variable y utilizamos el metodo express */
const app = express()

/*Importamos las rutas del los elementos dishes y orders*/
const dishesRoutes = require('./routes/dishes');
const ordersRoutes = require('./routes/orders');

/*Utilizamos el metodo use de express (middleware)*/
app.use(express.json())

/*Habilitamos el uso de las rutas de dishes y orders habilitadas en las
constantes dishesRoutes y ordersRoutes*/
app.use('/dishes', dishesRoutes)
app.use('/orders', ordersRoutes)

/**/
// app.get('/', (req, res) => {
//   orders.get()
//   res.json({
//     success: true,
//     message: 'FondAPI running'
//   })
// })

/*Exportamos el app*/
module.exports = app