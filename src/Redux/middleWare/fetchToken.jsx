import {
  fetchTokenPending,
  fetchTokenSuccess,
  fetchTokenError,
} from "../actions";

export const fetchToken = (request) => {
  console.log(request);
  return async (dispatch) => {
    dispatch(fetchTokenPending());

    return fetch(`http://localhost:3001/api/v1/user/${request.endPoints}`, {
      method: request.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request.body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error - 404 Not Found");
        }

        return response.json();
      })
      .then((user) => {
        console.log(user);
        user.body.remember = request.remember;
        dispatch(fetchTokenSuccess(user));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchTokenError(true));
      });
  };
};
