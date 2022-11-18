import React from "react";
import {
  Button,
  ButtonGroup,
  CardFooter,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  Card,
  CardBody,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { decQty, deleteCart, incQty } from "../Redux/AppReducer/action";
import { useEffect } from "react";
import { useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s.AppReducer);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((sum, e) => {
      return sum + e.price * e.q;
    }, 0);
    setTotal(() => newTotal);
  }, [cart]);

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
  };
  const handleQty = (id, op) => {
    if (op === "i") {
      dispatch(incQty(id));
    } else {
      dispatch(decQty(id));
    }
  };
  return (
    <Box display='flex' >
      <Grid
        w="80%"
        border="4px solid black"
        templateColumns="repeat(3, 1fr)"
        gap={6}
      >
        {cart.length > 0 &&
          cart.map((e) => {
            return (
              <>
                <Card key={e.id} maxW="sm">
                  <CardBody>
                    <Image
                      src={e.images[0]}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{e.title}</Heading>
                      <Text>{e.description}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        ${e.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button
                        onClick={() => handleDelete(e.id)}
                        variant="solid"
                        colorScheme="blue"
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => handleQty(e.id, "i")}
                        variant="solid"
                        colorScheme="blue"
                      >
                        +
                      </Button>
                      <Heading>{e.q}</Heading>
                      <Button
                        onClick={() => handleQty(e.id, "d")}
                        variant="solid"
                        colorScheme="blue"
                      >
                        -
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </>
            );
          })}
      </Grid>
      <Box>
        <Heading>Total : {total}</Heading>
      </Box>
    </Box>
  );
};

export default Cart;
