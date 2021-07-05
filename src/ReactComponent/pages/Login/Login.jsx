import Style from "./Login.module.scss";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchToken } from "../../../Redux/middleWare/fetchToken";
import { Redirect } from "react-router";
import Loader from "../../components/Loader/Loader";

const Login = ({ token, fetchToken, error, loading, userError }) => {
  useEffect(() => {
    document.title = "login";
  }, []);

  const inputUserName = useRef(null);
  const inputPassword = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const request = {
      method: "POST",
      endPoints: "login",
      body: {
        email: inputUserName.current.value,
        password: inputPassword.current.value,
      },
    };

    fetchToken(request);
  };

  if (loading) {
    return <Loader />;
  }

  if (token) {
    return <Redirect to="/user" />;
  }

  return (
    <main className="main bg-dark">
      <section className={Style["sign-in-content"]}>
        <i className={Style["sign-in-icon"] + " fa fa-user-circle"}></i>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          {error ||
            (userError && (
              <div className="textAlert">Données saisies invalide</div>
            ))}
          <div className={Style["input-wrapper"]}>
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              name="email"
              ref={inputUserName}
              placeholder="Email"
            />
          </div>

          <div className={Style["input-wrapper"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={inputPassword}
              placeholder="Password"
            />
          </div>

          <div className={Style["input-remember"]}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className={Style["sign-in-button"]}>Sign In</button>
        </form>
      </section>
    </main>
  );
};

const mapStateToProps = ({ token, error, loading, userError }) => {
  return {
    token,
    error,
    loading,

    userError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchToken: (...args) => dispatch(fetchToken(...args)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
