import Style from "./Login.module.scss";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import fetchUser from "../../../Redux/middleWare/fetchUser";

const Login = ({ click, user, fetchUser }) => {
  const inputUserName = useRef(null);
  const inputPassword = useRef(null);

  useEffect(() => {
    document.title = "login";
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("sub");

    console.log(inputUserName.current.value);
    console.log(inputPassword.current.value);
    const request = {
      method: "POST",
      endPoints: "login",
      body: {
        email: inputUserName.current.value,
        password: inputPassword.current.value,
      },
    };

    console.log(request);
    fetchUser(request);
  };

  return (
    <main className="main bg-dark">
      {`il mange des bambou : ${click}`}
      <section className={Style["sign-in-content"]}>
        <i className={Style["sign-in-icon"] + " fa fa-user-circle"}></i>
        <h1>Sign In</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={Style["input-wrapper"]}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="email" ref={inputUserName} />
          </div>

          <div className={Style["input-wrapper"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={inputPassword}
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

const mapStateToProps = ({ click, fetchUser }) => {
  return {
    click,
    fetchUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (request) => {
      dispatch(fetchUser(request));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
