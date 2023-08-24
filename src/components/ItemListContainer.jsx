import React from 'react'
import '../main.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <h1 className="saludo">{greeting}</h1>
  )
}

export default ItemListContainer