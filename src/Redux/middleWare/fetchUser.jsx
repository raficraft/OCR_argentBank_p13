import { fetchUserPending, fetchUserSuccess, fetchUserError } from "../actions";

export const fetchUser = (request) => {
  return async (dispatch) => {
    dispatch(fetchUserPending());

    return fetch(`http://localhost:3001/api/v1/user/${request.endPoints}`, {
      method: request.method,
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error - 404 Not Found");
        }

        return response.json();
      })
      .then((user) => {
        console.log(user);

        dispatch(fetchUserSuccess(user));
      })
      .catch((userError) => {
        console.log(userError);
        dispatch(fetchUserError(true));
      });
  };
};
