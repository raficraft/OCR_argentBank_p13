import { initialStateAuth, initialStateUser } from "./initialState";
import {
  FETCH_TOKEN_PENDING,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_ERROR,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  USER_LOGOUT,
  USER_EDIT_PENDING,
  USER_EDIT_SUCESS,
  USER_EDIT_ERROR,
} from "./actions";

const initialState = {...initialStateAuth,  ...initialStateUser};

export const userAuth = (state = initialState, action) => {
  switch (action.type) {


    //GET TOKEN
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


    //GET USER
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


    //LOGOUT

    case USER_LOGOUT: {
      console.log("YOLO IN REDUCER", state);
      if (localStorage.getItem("token")) {
        console.log("bordel de merde");
        localStorage.removeItem("token");
      }
      return {
        ...state,
        user: {},
        token: false,
      };
    }


    //USER EDIT

    case USER_EDIT_PENDING: {
      console.log("YOLO IN REDUCER USER EDIT PENDING", state);

      return {
        ...state,
        userLoading: action.userLoading,
      };
    }
  
    case USER_EDIT_SUCESS: {
      console.log("YOLO IN REDUCER USER EDIT SUCCESS", state);

      return {
        ...state,
        user: action.user,
        userLoading: action.userLoading,
      };
    }

    case USER_EDIT_ERROR: {
      console.log("YOLO IN REDUCER USER EDIT ERROR", state);

      return {
        ...state,
        userError: action.userError,
        userLoading: action.userLoading,
      };
    }
    default:
      return state;
  }
};
