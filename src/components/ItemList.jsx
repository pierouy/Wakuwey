import React from 'react'
import Item from './Item'

const ItemList = ({ product }) => {

  return (
    <div>{
      product.map((p)=> {
        return (
          <Item product={p} />
        )
      })
    }
    </div>
  )
}

export default ItemList