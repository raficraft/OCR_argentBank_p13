
export const FETCH_TOKEN_PENDING = "FETCH_TOKEN_PENDING";
export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const FETCH_TOKEN_ERROR = "FETCH_TOKEN_ERROR";

export const fetchTokenPending = () => ({
  type: FETCH_TOKEN_PENDING,
});
export const fetchTokenSuccess = (token) =>  {
  console.log(token);
   return {
     type: FETCH_TOKEN_SUCCESS,
     token,
   };
;
};
export const fetchTokenError = (error) => ({
  type: FETCH_TOKEN_ERROR,
  error,
});

export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";

export const fetchUserPending = () => ({
  type: FETCH_USER_PENDING,
  userLoading: true,
});

export const fetchUserSuccess = (user) => {
  console.log(user);
  return {
    type: FETCH_USER_SUCCESS,
    user: user.body,
    userLoading: false,
  };
};
export const fetchUserError = (userError) => ({
  type: FETCH_USER_ERROR,
  userError,
  userLoading: false,
});

export const userLogout = (userError) => ({
  type: FETCH_USER_ERROR,
  user: {},
  token: false,
});
