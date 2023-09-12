import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react';
import CartWidget from './CartWidget';
import '../main.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex className="navbar" align="center">
      <Box p="4">
        <Link to={"/"}>
          <h3>Wakuwey</h3>
        </Link>
      </Box>
      <Spacer />
      <Box p="4">
        <Menu>
          <MenuButton className="menu-button">Categorías</MenuButton>
          <MenuList>
            <Link to={`/categoria/${"Congelados"}`}>
              <MenuItem className="menu-item">Congelados</MenuItem>
            </Link>
            <Link to={`/categoria/${"Postres"}`}>
              <MenuItem className="menu-item">Postres</MenuItem>
            </Link>
            <Link to={`/categoria/${"Calientes"}`}>
              <MenuItem className="menu-item">Calientes</MenuItem>
            </Link>
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