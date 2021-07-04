import { initialeState } from "./initialState";
import {
  FETCH_TOKEN_PENDING,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_ERROR,
} from "./actions";

export const userAuth = (state = initialeState, action) => {
  switch (action.type) {
  

    case FETCH_TOKEN_PENDING: {
      return {
        ...state,
        loading: action.loading,
      };
    }

    case FETCH_TOKEN_SUCCESS: {
      return {
        ...state,
        token: action.token,
        loading: action.loading,
      };
    }
    case FETCH_TOKEN_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: action.loading,
      };
    }
    default:
      return state;
  }
};

export default userAuth;
