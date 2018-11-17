/*Importamos mongoose*/
const mongoose = require('mongoose')

/*Deconstruimos el Schema desde mongoose*/
const { Schema } = mongoose

/*Desde el objeto Schema construimos nuestro esquema del elemento dish*/
const schema = new Schema({
  /*Elementos del esquema*/
  name: {
    required: true,
    type: String,
    trim: true,
    maxlength: 20,
    minlength: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true,
    maxlength: 140
  }
})

// const model = mongoose.model(schema)

/*Exportamos los elementos model y schema*/
module.exports = {
  /*dentro del modelo le pasamos el modelo construido*/
  model: mongoose.model('Dish', schema),
  schema 
}