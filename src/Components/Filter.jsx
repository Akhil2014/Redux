import { Box, Checkbox, Heading, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {useSearchParams } from 'react-router-dom';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initSearchParams = searchParams.getAll("category");
  const initSortParams = searchParams.get("sortBy");
  const [sortBy , setSortBy] = useState(initSortParams || "") 
  const [category,setCategory] = useState(initSearchParams || [])

  const handleCategory = (e) => {
    const option = e.target.value 
    let newCategory = [...category]
    if(category.includes(option)){
      newCategory.splice(newCategory.indexOf(option) , 1)
    }else{
      newCategory.push(option)
    }
    setCategory(newCategory)
  }

  useEffect(() => {
    if(category || sortBy) {
      const params = {} 
      category && (params.category = category)
      sortBy && (params.sortBy = sortBy)
      setSearchParams(params)
    }
  },[category , setSearchParams , sortBy])

  console.log(category)

  return (
    <Box w="20%" border='4px solid gray'>
      <Stack>
        <Heading>Filter</Heading>
        <Checkbox defaultChecked={category.includes("smartphones")} onChange={(e) => handleCategory(e)} value="smartphones">smartphones</Checkbox>
        <Checkbox defaultChecked={category.includes("laptops")} onChange={(e) => handleCategory(e)} value="laptops">laptops</Checkbox>
        <Checkbox defaultChecked={category.includes("fragrances")} onChange={(e) => handleCategory(e)} value="fragrances">fragrances</Checkbox>
        <Checkbox defaultChecked={category.includes("skincare")} onChange={(e) => handleCategory(e)} value="skincare">skincare</Checkbox>
        <Checkbox defaultChecked={category.includes("groceries")} onChange={(e) => handleCategory(e)} value="groceries">groceries</Checkbox>
        <Checkbox defaultChecked={category.includes("home-decoration")} onChange={(e) => handleCategory(e)} value="home-decoration">home-decoration</Checkbox>
      </Stack>
      <Heading>SORT</Heading>
      <RadioGroup onChange={setSortBy} value={sortBy}>
        <Stack>
          <Radio name="sortBy" value="" defaultChecked={sortBy === ""}>
            None
          </Radio>
          <Radio name="sortBy" value="asc" defaultChecked={sortBy === "asc"}>
            Ascending
          </Radio>
          <Radio name="sortBy" value="desc" defaultChecked={sortBy === "desc"}>
            Descending
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  )
}

export default Filter