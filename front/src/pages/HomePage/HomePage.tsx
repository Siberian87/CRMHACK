import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ReactFlowProvider } from "react-flow-renderer";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  HomePageMain,
  HomePageModulWrapper,
  SignInPageContainer,
} from "./styled";
import Orders from "./components/Orders/Orders";
import Connection from "./components/Connection/Connection";
import AtomizationLine from "./components/AtomizationLine/AtomizationLine";
import AtomizationLineView from "./components/AtomizationLineView/AtomizationLineView";

const HomePage: React.FC<{ key?: string }> = ({ key }) => {
  return (
    <SignInPageContainer key={key}>
      <ReactFlowProvider>
        <Sidebar />
        <HomePageMain>
          <HomePageModulWrapper
            initial={{ opacity: 0, y: "-50px" }}
            animate={{ opacity: 1, y: "0px" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Route path="/home/orders">
              <Orders />
            </Route>
            <Route path="/home/connection">
              <Connection />
            </Route>
            <Route path="/home/atomization">
              <AtomizationLine />
            </Route>
            <Route path="/home/atomization-edit">
              <AtomizationLineView />
            </Route>
          </HomePageModulWrapper>
        </HomePageMain>
      </ReactFlowProvider>
    </SignInPageContainer>
  );
};

export default HomePage;
