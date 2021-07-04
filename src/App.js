import { Route, Switch } from "react-router-dom";

import Nav from "./ReactComponent/components/Nav/Nav.jsx";
import Footer from "./ReactComponent/components/Footer/Footer.jsx";
import Home from "./ReactComponent/pages/Home/Home.jsx";
import Login from "./ReactComponent/pages/Login/Login.jsx";
import User from "./ReactComponent/pages/User/User.jsx";
import { connect } from "react-redux";
import { CLICK } from "./Redux/actions.jsx";

import "./App.css";

function App({ click }) {
  return (
    <>
      <Nav />
      <button onClick={() => click()}>click</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    click: () => dispatch({ type: CLICK }),
  };
};

export default connect(null, mapDispatchToProps)(App);

/**
 * 
            
 */
