import React from 'react'
import Form from './Form'

const cart = [1]

const Cart = () => {
  return (
    <div>Mi carrito

      {cart.length>0 ?
        <Form />
        :
        <button>Regresa a la pantalla principal</button>
      }


    </div>
  )
}

export default Cart 