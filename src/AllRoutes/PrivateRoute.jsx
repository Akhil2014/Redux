import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Login from '../Pages/Login'

const PrivateRoute = ({children}) => {
    const {isAuth} = useSelector((s) => s.AuthReducer)

    if(!isAuth) return <Navigate to='/login' />

    return children
}

export default PrivateRoute