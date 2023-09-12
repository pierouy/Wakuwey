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

const ItemDetail = ({ product }) => {
  const { id } = useParams();
  const filteredProducts = product.filter((product) => product.id == id);

  let contador = 0;

  return (
    <div>
      {filteredProducts.map((p) => {
        return (
          <Card maxW="sm">
            <CardBody id={p.id}>
              <Image src={p.image} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.title}</Heading>
                <Text> {p.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${p.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Agregar al Carrito
                </Button>
                <ItemCount contador={contador} />
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemDetail;
