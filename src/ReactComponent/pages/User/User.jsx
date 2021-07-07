//dependency
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { useEffect } from "react";
import { fetchUser } from "../../../Redux/middleWare/fetchUser";
//Component
import Account from "./Account";
import Loader from "./../../components/Loader/Loader";
import EditUser from "./../../components/EditUser/EditUser";
import Style from "./User.module.scss";
import { useRef } from "react";

const User = ({ match, token, user, userLoading, userError, fetchUser }) => {
  console.log(match);
  useEffect(() => {
    if (token) {
      const request = {
        method: "POST",
        endPoints: "profile",
        token: token,
      };

      fetchUser(request);
    }
  }, [token, fetchUser]);

  const nestedLink = useRef();

  const shazam = () => {
    console.log(nestedLink.current.classList);
    nestedLink.current.classList.add("hidden");
    console.log(nestedLink.current.classList);
  };

  if (userLoading) {
    return <Loader />;
  }

  //Protects the entry to the page if the user is not logged in
  if (!token || userError) {
    return <Redirect to="/home" />;
  }

  const accountData = [
    {
      account: "Argent Bank Checking (x8349)",
      balance: "2082.79",
      message: "Available Balance",
    },

    {
      account: "Argent Bank Savings (x6712)",
      balance: "10.928.42",
      message: "Available Balance",
    },

    {
      account: "Argent Bank Credit Card (x8349)",
      balance: "184.30",
      message: "View transactions",
    },
  ];

  return (
    <main className={`${Style.main_user} main bg-dark`}>
      <div className={Style["header"]}>
        <h1>Welcome back</h1>

        <div
          className={`${Style.edit_user} shazam_content`}
          ref={nestedLink}
        >
          <h1 className={Style.shazam_title}>
            {user.firstName} {user.lastName}
          </h1>
          {/*Nested Route*/}
          <Link
            to={`${match.url}/edit`}
            className={Style["edit-button"]}
            onClick={shazam}
          >
            Edit Name
          </Link>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>

      <Switch>
        <Route
          path={`${match.url}/edit`}
          render={(props) => (
            <EditUser
              {...props}
              firstName={user.firstName}
              lastName={user.lastName}
              callOrigin={nestedLink}
            />
          )}
        ></Route>
      </Switch>

      {accountData.map((val, key) => (
        <Account
          key={key}
          account={val.account}
          balance={val.balance}
          message={val.message}
        />
      ))}
    </main>
  );
};

const mapStateToProps = ({ token, user, userLoading, userError }) => {
  return {
    token,
    user,
    userLoading,
    userError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (...args) => dispatch(fetchUser(...args)),
  };
};







export default connect(mapStateToProps, mapDispatchToProps)(User);




