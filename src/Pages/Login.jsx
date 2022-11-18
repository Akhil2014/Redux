import React from "react";
import {Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  const {isLoading} = useSelector((s) => s.AuthReducer)
  const navigate = useNavigate()
  const [data , setData] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    const {name , value} = e  
    setData({
      ...data,
      [name]:value
    })
  }

  const handleSubmit = () => {
    const {email , password} = data
    if(email && password){
      const payload = {email,password}
      dispatch(login(payload)).then((r) => {
        if(r.type === "LOGIN_API_SUCCESS") {
          setData({
            email:"",
            password:""
          })
          navigate("/product")
        }
      })
    }
  }
  return (
    <>
      <Stack w="40%" m="auto" p={20}>
        <Input name="email" value={data.email} onChange={(e) => handleChange(e.target)} placeholder="Email" type="email" />
        <Input name='password' value={data.password} onChange={(e) => handleChange(e.target)} placeholder="Password" type="password" />
        <Button onClick={handleSubmit} bg='red' w="100%" size="lg">
          {isLoading === true ? "Loading..." : "Submit"}
        </Button>
      </Stack>
    </>
  );
};

export default Login;
