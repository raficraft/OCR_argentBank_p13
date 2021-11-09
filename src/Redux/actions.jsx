export const FETCH_TOKEN_PENDING = "FETCH_TOKEN_PENDING";
export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const FETCH_TOKEN_ERROR = "FETCH_TOKEN_ERROR";

export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const USER_LOGOUT = "USER_LOGOUT";

export const USER_EDIT_PENDING = "USER_EDIT_PENDING";
export const USER_EDIT_SUCESS = "USER_EDIT_SUCESS";
export const USER_EDIT_ERROR = "USER_EDIT_ERROR";

//GET TOKEN

export const fetchTokenPending = () => ({
  type: FETCH_TOKEN_PENDING,
});

export const fetchTokenSuccess = (token) => {
  console.log(token);
  return {
    type: FETCH_TOKEN_SUCCESS,
    token,
    remember: token.body.remember,
  };
};

export const fetchTokenError = (error) => ({
  type: FETCH_TOKEN_ERROR,
  error,
});

//GET USER
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
    token: user.token,
  };
};

export const fetchUserError = (userError) => ({
  type: FETCH_USER_ERROR,
  userError,
  userLoading: false,
  token: false,
});

//USER LOGOUT
export const userLogout = () => {
  console.log("yolo");

  return {
    type: USER_LOGOUT,
    user: {},
    token: false,
  };
};

//USER EDIT
export const userEditPending = () => {
  return {
    type: USER_EDIT_PENDING,
    userLoading: true,
  };
};
export const userEditSuccess = (user) => {
  return {
    type: USER_EDIT_SUCESS,
    user: user.body,
    userLoading: false,
  };
};
export const userEditError = (userError) => {
  console.log("???");
  return {
    type: USER_EDIT_ERROR,
    userError,
    userLoading: false,
  };
};
