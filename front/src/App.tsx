import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { AppWrapper } from "./styled";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {
  const location = useLocation();
  return (
    <AppWrapper>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname.split("/")[1]}>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <SignInPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </AppWrapper>
  );
};

export default App;
