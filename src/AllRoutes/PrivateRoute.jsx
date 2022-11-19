import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import Login from '../Pages/Login'

const PrivateRoute = ({children}) => {
    const locations = useLocation();
    const {isAuth} = useSelector((s) => s.AuthReducer)

    if(!isAuth) return <Navigate state={{from:locations}} to='/login' />

    return children
}

export default PrivateRoute