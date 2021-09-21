import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyles";
import ThemeProvider from "./styles/ThemeProvider";

import Home from "./pages/Home";
import Login from "./pages/Login";

const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

      </ThemeProvider>
    </Router>
  );
};

export default Routes;
