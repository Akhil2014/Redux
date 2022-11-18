import axios from "axios"
import { ADD_TO_CART, DEC_CART_QTY, DELETE_TO_CART, GET_API_FAILURE, GET_API_REQUEST, GET_API_SUCCESS, INC_CART_QTY } from "./actionType"

export const apiRequest = () => {
    return {
        type:GET_API_REQUEST
    }
}

export const apiSuccess = (payload) => {
    return {
        type:GET_API_SUCCESS,
        payload
    }
}

export const apiFailure = () => {
    return {
        type:GET_API_FAILURE
    }
}

export const addCart = (payload) => {
    return {
        type:ADD_TO_CART,
        payload
    }
}

export const deleteCart = (payload) => {
    return{
        type:DELETE_TO_CART,
        payload
    }
}

export const incQty = (payload) => {
    return{
        type:INC_CART_QTY,
        payload
    }
}

export const decQty = (payload) => {
    return {
        type:DEC_CART_QTY,
        payload
    }
}


export const getData = (params) => (dispatch) => {
    dispatch(apiRequest())
    return axios.get('http://localhost:8080/products',params)
        .then((r) => dispatch(apiSuccess(r.data)))
        .catch((e) => dispatch(apiFailure()))
}