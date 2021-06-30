import { Link } from "react-router-dom";
import Style from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={Style["main-nav"]}>
      <Link to="/" className={Style["main-nav-logo"]}>
        <img
          className={Style["main-nav-logo-image"]}
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        <Link to="./login" className={Style["main-nav-item"]}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
