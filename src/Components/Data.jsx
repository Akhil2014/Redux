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
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { addCart, getData } from "../Redux/AppReducer/action";

const Data = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams()
  const { data, cart } = useSelector((s) => s.AppReducer);


  useEffect(() => {
    if (location || data.length === 0) {
      const sortBy = searchParams.get("sortBy")
      const querySearch = {
        params:{
          category:searchParams.getAll("category"),
          _sort:sortBy && "price",
          _order:sortBy
        }
      }
      dispatch(getData(querySearch));
    }
  }, [location.search]);


  const handleCart = (data) => {
    const payload = {
      ...data,
      q: 1,
    };
    dispatch(addCart(payload));
  };
  return (
    <Grid
      w="80%"
      border="4px solid black"
      templateColumns="repeat(3, 1fr)"
      gap={6}
    >
      {data.length > 0 &&
        data.map((e) => {
          return (
            <>
              <Card key={e.id} maxW="sm">
                <Link to={`/product/${e.id}`}>
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
                </Link>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    {cart.find((s) => s.id === e.id) ? (
                      <Button variant="ghost" colorScheme="blue">
                        Added
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleCart(e)}
                        variant="ghost"
                        colorScheme="blue"
                      >
                        Add To Cart
                      </Button>
                    )}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </>
          );
        })}
    </Grid>
  );
};

export default Data;
