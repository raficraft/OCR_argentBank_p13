//Types of action

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER";

//Dispatch call function
//Action creator
//payload = (charge utile)

export const loginUser = (isAuth) => {
  return {
    type: LOGIN_USER,
    isAuth: true,
  };
};

export const logoutUser = (isAuth) => {
  return {
    type: LOGOUT_USER,
    isAuth,
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};
