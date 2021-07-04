export const CLICK = "CLICK";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const fetchUserRequest = (user) => ({
  type: FETCH_USER,
  user,
  loading: true,
});
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  user,
  loading: false,
});
export const fetchUserError = (error) => ({
  type: FETCH_USER_ERROR,
  error,
  loading: true,
});
