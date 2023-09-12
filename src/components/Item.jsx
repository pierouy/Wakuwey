import React from "react";
import {
  Card,
  Image,
  Stack,
  Text,
  CardBody,
  Divider,
  Button,
  ButtonGroup,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

  console.log(producto)

  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image src={producto.image} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{producto.nombre}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              <Link to={`/item/${producto.id}`}>Detalle</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
