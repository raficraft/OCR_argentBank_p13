import Style from "./Login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="main bg-dark">
      <section className={Style["sign-in-content"]}>
        <i className={Style["sign-in-icon"] + " fa fa-user-circle"}></i>
        <h1>Sign In</h1>

        <form>
          <div className={Style["input-wrapper"]}>
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={Style["input-wrapper"]}>
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={Style["input-remember"]}>
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>

          <Link path="/user" className={Style["sign-in-button"]}>
            Sign In
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Login;
