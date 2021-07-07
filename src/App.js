import { Route, Switch } from "react-router-dom";

import Nav from "./ReactComponent/components/Nav/Nav.jsx";
import Footer from "./ReactComponent/components/Footer/Footer.jsx";
import Home from "./ReactComponent/pages/Home/Home.jsx";
import Login from "./ReactComponent/pages/Login/Login.jsx";
import User from "./ReactComponent/pages/User/User.jsx";

import "./App.css";
import { connect } from "react-redux";
import { fetchUser } from "./Redux/middleWare/fetchUser.jsx";
import { useEffect } from "react";

function App({ token, fetchUser }) {
  console.log(localStorage.getItem("token"));

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("on se connecte authomatiquement blibalabliu lol");
      const request = {
        method: "POST",
        endPoints: "profile",
        token: localStorage.getItem("token"),
      };


      //middleWare autoLog ?????

      fetchUser(request);
    }
  }, [token, fetchUser]);

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/user" render={(props) => <User {...props} />} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

const mapStateToProps = ({ token }) => {
  return {
    token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (...args) => dispatch(fetchUser(...args)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


