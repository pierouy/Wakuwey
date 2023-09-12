import React from "react";
import ItemCount from "./ItemCount";
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
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ productos }) => {
  const { id } = useParams()

  const filteredProducts = productos.filter((producto) => producto.id == id);

  let contador = 0;

  return (
    <div>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
          <Card maxW="sm">
            <CardBody>
              {/*<Image src={p.image} borderRadius="lg" />*/}
              <Stack mt="6" spacing="3">
                <Heading size="md">{p.nombre}</Heading>
                <Text> {p.descripcion}</Text>
                <Text> {p.categoria}</Text>
                {/*<Text color="blue.600" fontSize="2xl">
                  ${p.precio}
        </Text>*/}
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Agregar al Carrito
                </Button>
              </ButtonGroup>
              <ItemCount contador={contador} />
            </CardFooter>
          </Card>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ItemDetail);
