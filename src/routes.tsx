import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyles";
import ThemeProvider from "./styles/ThemeProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStateProvider } from "./context/GlobalContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Perfil from "./pages/Perfil";
import Seguidores from "./pages/Seguidores";

const Routes = () => {
  return (
    <GlobalStateProvider>
      <Router>
        <GlobalStyle />
        <ThemeProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Switch>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <ProtectedRoute exact path="/perfil">
              <Perfil />
            </ProtectedRoute>
            <ProtectedRoute exact path="/perfil/seguidores">
              <Seguidores />
            </ProtectedRoute>
            <ProtectedRoute path="/perfil/:username">
              <Perfil />
            </ProtectedRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </GlobalStateProvider>
  );
};

export default Routes;
