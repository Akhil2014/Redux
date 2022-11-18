import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AllRoutes from "./AllRoutes/AllRoutes";


function App() {
  return (
    <>
      <Box display='flex' justifyContent='space-around' w="100%" h="50px" bg="teal.400">
      <Link to='/'><Heading>Home</Heading></Link>  
      <Link to='/product'><Heading>Product</Heading></Link>  
      <Link to='/cart'><Heading>Cart</Heading></Link>  
      <Link to='/login'><Heading>Login</Heading></Link>  
      </Box>
      <AllRoutes />
    </>
  );
}

export default App;
