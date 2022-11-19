import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../Redux/AppReducer/action";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((s) => s.AppReducer);
  const [single, setSingle] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    dispatch(getData())
      .then((r) => {
        const newData = r.payload.find((e) => e.id === Number(id));
        newData && setSingle(newData);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <Box w="30%" m="auto" border="4px solid yellow">
      {loading === true ? (
        "Loading"
      ) : (
        <>
          <Image src={single.thumbnail} />
          <Heading>{single.title}</Heading>
          <Text>{single.price}</Text>
          <Text>{single.description}</Text>
          <Button onClick={() => navigate("/product")}>GO BACK</Button>
        </>
      )}
    </Box>
  );
};

export default SingleProduct;
