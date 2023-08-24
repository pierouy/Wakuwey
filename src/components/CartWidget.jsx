import { StarIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import '../main.css';

const CartWidget = () => {
  return (
    <div>
        <Flex>
            <Box>
            <span className="material-symbols-outlined carrito">
                shopping_cart
            </span>
            </Box>
            <Divider />
            <Box className="cantidad-carrito">
                <p>6</p> 
            </Box>
        </Flex>
    </div>
  )
}

export default CartWidget