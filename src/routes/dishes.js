/*Importamos exress*/
const express = require('express')

/*Importamos express.Router en una variable*/
const router = express.Router()

/*Importamos el caso de uso de dishes para tener nuestras funciones*/
const dish = require('../usecases/dishes')

/*Metodo del post*/
router.get('/'/*Statement route*/, /*Callback asincrona*/async (req, res) => {
  /*Declaramos la variable dishes y le asignamos el resultado de la 
  promesa de dish.get()*/
  const dishes = await dish.get()
  /*Mandamos la respuesta desde un objeto JSON*/
  res.json({
    success: true,
    message: 'Done!',
    payload: {
      dishes
    }
  })
})

/*Utilizamos router en post y le pasamos un callback asyncrono*/
router.post('/', async (req, res) => {
  /*Utilizamos try and catch para controlar los errores*/
  try {
    /*a dishData agisnamos lo que mandemos en req.body(desde el front, postman o navegadores)*/
    const dishData = req.body

    /*Mandamos un mensaje de dishData en consola*/
    console.warn(' dishData: ', dishData)

    /*creamos la constante newDish y le asignamos el resultado de la
    prolema de dish.create*/
    const newDish = await dish.create(dishData)
    /*Mandamos una respuesta del resultado obtenido desde un objeto*/
    res.json({
      success: true,
      message: 'New dish created',
      payload: { dish: newDish }
    })
  } catch (error) /*cachamos los errores posibles para no romper el codigo*/{
    res.status(400)
    res.json({
      success: false,
      message: 'Dish could not be created',
      error: [
        error
      ]
    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const dishDeleted = await dish.del(id)

    res.json({
      success: true,
      message: 'Dish deleted',
      payload: { dish: dishDeleted }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Dish could not be deleted',
      error: [
        error
      ]
    })
  }
})

module.exports = router