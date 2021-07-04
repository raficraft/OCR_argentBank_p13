import { fetchUserSuccess } from "../actions";
import { fetchUserError } from "./../actions";
import { fetchUserRequest } from "./../actions";

const fetchUser = (req) => {
  console.log("request transmise", req);

  const request = {
    method: "POST",
    body: {
      email: "tony@stark.com",
      password: "password123",
    },
  };

  return (dispatch) => {
    dispatch(fetchUserRequest());

    return fetch("http://localhost:3001/api/v1/user/login", {
      method: request.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request.body),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Error - 404 Not Found");
        }

        return response.json();
      })
      .then((user) => {
        console.log(user);
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchUserError(error));
      });
  };
};

export default fetchUser();
