import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./ReactComponent/components/nav.jsx";
import Home from "./ReactComponent/pages/home";
import Footer from "./ReactComponent/components/footer.jsx";
import Login from "./ReactComponent/pages/login.jsx";

import "./css/base/reset.scss";
import "./css/base/base.scss";
import "./css/base/typography.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />       
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
