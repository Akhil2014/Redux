import {
  ADD_TO_CART,
  DEC_CART_QTY,
  DELETE_TO_CART,
  GET_API_FAILURE,
  GET_API_REQUEST,
  GET_API_SUCCESS,
  INC_CART_QTY,
} from "./actionType";

const initailState = {
  data: [],
  cart: [],
  isLoading: false,
  isError: false,
};

export const AppReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case GET_API_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_API_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case GET_API_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }
    case DELETE_TO_CART: {
      const newData = state.cart.filter((e) => e.id !== payload);
      return {
        ...state,
        cart: newData,
      };
    }
    case INC_CART_QTY: {
        let newData = state.cart.map((e) => {
            if(e.id === payload) return {...e,q:e.q+=1}

            return e
        })
      return {
        ...state,
        cart: newData,
      };
    }
    case DEC_CART_QTY: {
        let newData = state.cart.map((e) => {
            if(e.id === payload && e.q > 1) return {...e,q:e.q-=1}
            
            return e
        })
      return {
        ...state,
        cart: newData,
      };
    }
    default:
      return state;
  }
};
