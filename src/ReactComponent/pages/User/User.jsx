import { connect } from "react-redux";
import Account from "./Account";
import Style from "./User.module.scss";
import { Redirect } from "react-router";
import { useEffect } from "react";
import { fetchUser } from "../../../Redux/middleWare/fetchUser";
import Loader from "./../../components/Loader/Loader";

const User = ({ token, user, userLoading, userError, fetchUser }) => {
  useEffect(() => {
    if (token) {
      
      const request = {
        method: "POST",
        endPoints: "profile",
        token: token,
      };

      fetchUser(request);
    }
  }, [fetchUser]);

  console.log("After useEffect");
  console.log("Token : ", token);
  console.log("User : ", user);
  console.log("Loading : ", userLoading);

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
    <main className="main bg-dark">
      <div className={Style["header"]}>
        <h1>
          Welcome back
         
          <br />
          {user.firstName} {user.lastName}
        </h1>
        <button className={Style["edit-button"]}>Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>

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

const mapStateToProps = ({
  token,
  
  user,
  userLoading,
  userError,
}) => {
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
