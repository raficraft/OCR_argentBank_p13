import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./ReactComponent/components/Nav/Nav.jsx";
import Footer from "./ReactComponent/components/Footer/Footer.jsx"
;
import Home from "./ReactComponent/pages/Home/Home.jsx";
import Login from './ReactComponent/pages/Login/Login.jsx';
import User from "./ReactComponent/pages/User/User.jsx";


import "./App.css";



function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={User} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


/**
 * 
            
 */