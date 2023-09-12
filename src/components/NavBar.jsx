import React from 'react';
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react';
import CartWidget from './CartWidget';
import '../main.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex className="navbar" align="center">
      <Box p="4">
          <h3>Wakuwey</h3>
      </Box>
      <Spacer />
      <Box p="4">
        <Menu>
          <MenuButton className="menu-button">Menú</MenuButton>
          <MenuList>
            <MenuItem className="menu-item">Inicio</MenuItem>
            <MenuItem className="menu-item">Productos</MenuItem>
            <MenuItem className="menu-item">Quienes somos</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box p="4">
        <Link to={"/cart"}>
          <CartWidget className="carrito" />
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;