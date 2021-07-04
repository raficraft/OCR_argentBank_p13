
export const FETCH_TOKEN_PENDING = "FETCH_USER_PENDING";
export const FETCH_TOKEN_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_TOKEN_ERROR = "FETCH_USER_ERROR";

export const fetchTokenPending = () => ({
  type: FETCH_TOKEN_PENDING,
  loading: true,
});
export const fetchTokenSuccess = (token) =>  {
  console.log(token);
   return {
    type: FETCH_TOKEN_SUCCESS,
    token,
    loading : false
  };
;
};
export const fetchTokenError = (error) => ({
  type: FETCH_TOKEN_ERROR,
  error,
  loading: false,
});
