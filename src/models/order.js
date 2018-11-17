/*Importamos mongoose*/
const mongoose = require('mongoose')

/*Deconstruimos el Schema de mongoose*/
const { Schema } = mongoose

/*Creamos una instancia de la Schema inportada de mongoose y creamos
nuestro esquema para nuestro objeto*/ 
const schema = new Schema({
  /*Variables de nuestro esquema*/
  dishes: {
    type: [String],
    required: true,
    minlength: 1
  },
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 20,
    minlength: 2
  },
  status: {
    type: String,
    required: true,
    enum: [
      'active',
      'sent',
      'approved',
      'preparing',
      'ready',
      'dispatched',
      'payed',
      'cancelled'
    ]
  }
})

/*Exportamos nuestro schema y modelo*/
module.exports = { 
  schema,
  model: mongoose.model('Order', schema) 
}