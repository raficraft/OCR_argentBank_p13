import { initialStateAuth, initialStateUser } from "./initialState";
import {
  FETCH_TOKEN_PENDING,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_ERROR,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  USER_LOGOUT
} from "./actions";

const initialState = {...initialStateAuth,  ...initialStateUser};

export const userAuth = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN_PENDING: {
      return {
        ...state,
      };
    }

    case FETCH_TOKEN_SUCCESS: {
      console.log(action);
      return {
        ...state,
        token: action.token.body.token,
        remember: action.token.body.remember,
      };
    }
    case FETCH_TOKEN_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: action.loading,
      };
    }

    case FETCH_USER_PENDING: {
      return {
        ...state,
        userLoading: action.userLoading,
      };
    }

    case FETCH_USER_SUCCESS: {
      console.log("action for user sucess", action);
      return {
        ...state,
        user: action.user,
        userLoading: action.userLoading,
        token: action.token,
      };
    }
    case FETCH_USER_ERROR: {
      return {
        ...state,
        userError: action.userError,
        userLoading: action.userLoading,
        token: action.token,
      };
    }
    case USER_LOGOUT: {
      console.log("YOLO IN REDUCER", state);
      if (localStorage.getItem("token")) {
        console.log("bordel de merde");
        localStorage.removeItem("token");
      }
      return {
        ...state,
        user : {},
        token : false
      };
    }
    default:
      return state;
  }
};
