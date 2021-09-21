import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";

const Routes = () => {
  return (
    <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
};

export default Routes;
