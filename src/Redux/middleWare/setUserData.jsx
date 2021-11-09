import { userEditPending, userEditSuccess, userEditError } from "../actions";

export const setUserData = (request) => {
  console.log(request);
  return async (dispatch) => {
    dispatch(userEditPending());

    return fetch(`http://localhost:3001/api/v1/user/${request.endPoints}`, {
      method: request.method,
      headers: {
        Authorization: `Bearer ${request.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request.body),
    })
      .then((response) => {
        if (!response.ok) {
          console.log("error 404");
          throw new Error("Error - 404 Not Found");
        }

        console.log("edit user response success", response);

        return response.json();
      })
      .then((user) => {
        console.log(user);

        dispatch(userEditSuccess(user));
      })
      .catch((userError) => {
        console.log("edit user error", userError);
        dispatch(userEditError(userError));
      });
  };
};
