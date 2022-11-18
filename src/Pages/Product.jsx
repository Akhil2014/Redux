import { Box } from '@chakra-ui/react'
import React from 'react'
import Data from '../Components/Data'
import Filter from '../Components/Filter'

const Product = () => {
  return (
    <Box display='flex'>
      <Filter />
      <Data />
    </Box>
  )
}

export default Product