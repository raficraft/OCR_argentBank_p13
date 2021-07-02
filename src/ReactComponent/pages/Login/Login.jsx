import Style from "./Login.module.scss";
import useValidityAuth from "../../../Hooks/useSubForm";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { useEffect } from "react";
import { LOGIN_USER } from "../../../Redux/actions";

const Login = (state) => {
  useEffect(() => {
    document.title = "login";
  }, []);

  const { inputs, isAuth, errors, handleInputChange, handleSubmit } =
    useValidityAuth({
      email: "",
      password: "",
    });
  console.log("errors", errors);
  console.log("isAuth", isAuth);

  if (isAuth) {
    console.log("isAuth avant redirection", isAuth);
    return (
      <Redirect
        to={{
          pathname: "/user",
          isAuth: isAuth,
        }}
      />
    );
  }

  return (
    <main className="main bg-dark">
      <section className={Style["sign-in-content"]}>
        <i className={Style["sign-in-icon"] + " fa fa-user-circle"}></i>
        <h1>Sign In</h1>

        <form onSubmit={(evt) => handleSubmit(evt)}>
          {errors === true && (
            <div className="textAlert">Données saisies invalide</div>
          )}

          <div className={Style["input-wrapper"]}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="email"
              onChange={(evt) => {
                handleInputChange(evt);
              }}
            />
          </div>

          <div className={Style["input-wrapper"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(evt) => {
                handleInputChange(evt);
              }}
            />
          </div>

          <div className={Style["input-remember"]}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className={Style["sign-in-button"]}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log("in login container", state);
  return {
    isAuth: state.isAuth,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    loginUser: () => dispatch({ type: LOGIN_USER }),
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);
