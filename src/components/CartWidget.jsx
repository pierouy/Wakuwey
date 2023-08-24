import { StarIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <div>
        <Flex>
            <Box>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            </Box>
            <Divider />
            <Box>
                <p>6</p> 
            </Box>
        </Flex>
    </div>
  )
}

export default CartWidget