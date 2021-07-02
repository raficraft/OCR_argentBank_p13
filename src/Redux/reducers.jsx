import * as actions from "./actions";

console.log(actions);

export const isAuth = (state = false, action) => {
  switch (action.type) {
    case actions.LOGIN_USER:
      console.log("yolo");
      return [...state.isAuth, action.isAuth];

    case actions.LOGOUT_USER:
      return [...state.isAuth, action.isAuth];

    default: {
      return state;
    }
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return [...state.user, action.user];

    default: {
      return state;
    }
  }
};
