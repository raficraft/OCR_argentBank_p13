import { useState } from "react";

const useValidityAuth = (initialValue) => {
  const [inputs, setInputs] = useState(initialValue);
  const [errors, setErrors] = useState(false);
  const [isAuth, setAuth] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    const request = {
      method: "POST",
      body: { email: inputs.email, password: inputs.password },
    };

    const fetchData = async (request) => {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: request.method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body),
      });
      const res = await response.json();

      if (res.status === 200) {
        console.log("yolo");
        setAuth(!isAuth);
      } else if (res.status !== 200) {
        console.log("erreurs");
        setErrors(true);
      }
    };

    fetchData(request);
  };

  const handleInputChange = (evt) => {
    evt.persist();
    const name = evt.target.name;
    const value = evt.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors,
    isAuth,
  };
};

export default useValidityAuth;
