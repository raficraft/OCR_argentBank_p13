import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Style from "./Nav.module.scss";

const Nav = ({ token }) => {
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
        {token ? (
          <>
            <Link to="./user" className={Style["main-nav-item"]}>
              <i className="fa fa-user-circle"></i>
              user
            </Link>
            <Link to="./login" className={Style["main-nav-item"]}>
              <i className="fas fa-sign-out-alt"></i>
              Log out
            </Link>
          </>
        ) : (
          <Link to="./login" className={Style["main-nav-item"]}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = ({ token }) => {
  return {
    token,
  };
};

export default connect(mapStateToProps)(Nav);
