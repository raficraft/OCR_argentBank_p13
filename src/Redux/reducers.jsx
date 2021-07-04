import { initialeState } from "./initialState";
import {
  CLICK,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "./actions";

export const userAuth = (state = initialeState, action) => {
  console.log("action passé au reducer", action);

  switch (action.type) {
    case CLICK: {
      return {
        ...state,
        click: state.click + 1,
      };
    }

    case FETCH_USER: {
      return {
        ...state,
        loading: action.loading,
      };
    }

    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        loading: action.loading,
      };
    }
    case FETCH_USER_ERROR: {
      return {
        ...state,
        user: action.user,
        loading: action.loading,
      };
    }
    default:
      return state;
  }
};

export default userAuth;
