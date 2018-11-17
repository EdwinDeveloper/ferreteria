/*Importamos el modelo de orders y lo asignamos a la constante Order*/
const Order = require('../../models/order').model

/*Importamos el caso de uso de dishes*/
const dish = require('../dishes')

// function get () {
//   return Order.find({}).exec()
// }

/*Declaramos una funcion y le asignamos el resultado de la promesa*/
const get = () => Order.find({}).exec()

/*Declaramos la funcion asincrona y le pasamos los datos del resultado*/
const create = async (orderData) => {
  /*Imprimimos los datos que recibimos*/
  console.log("datos : ",orderData)

  /*Deconstruimos el arrau dishes de orderData y le asignamos un array 
  vacio en caso de no llegar nada*/
  const { dishes = [] } = orderData

  /*declaramos una variable donde le asignamos los Id recibidos*/
  const dishPromises = dishes.map((dishId) => {
    /*Retornamos los resultados*/
    return dish.getById(dishId)
  })

  /*Asignamos a una variable los resultados de los dishes*/
  const dishPromisesResult = await Promise.all(dishPromises)

  
  const invalidDishes = dishPromisesResult.reduce((reducer, current, index) => {
    if ( current == null ) return [  ...reducer, dishes[index] ]
    return reducer
  }, [])
  
  if(invalidDishes.length > 0 ) throw new Error(`Invalid Dishes: ${ invalidDishes.join(',') } `)

  const newOrder = new Order(orderData)
  return newOrder.save()
}

module.exports = {
  get,
  create
}