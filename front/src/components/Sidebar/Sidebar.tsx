import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Cart } from "../../images/icons/shopping-cart.svg";
import { ReactComponent as Switch } from "../../images/icons/switch.svg";
import { ReactComponent as Flag } from "../../images/icons/flag.svg";
import { ReactComponent as Logo } from "../../images/LogoText.svg";
import { SidebarWrapper, LogoWrapper } from "./styled";
import ItemSidebar from "./components/ItemSidebar/ItemSidebar";

const Sidebar: React.FC = ({ children }) => {
  const history = useHistory();
  return (
    <SidebarWrapper
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ ease: "easeInOut" }}
    >
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ItemSidebar
        onClick={() => {
          history.push("/home/orders");
        }}
      >
        <Cart />
      </ItemSidebar>
      <ItemSidebar
        onClick={() => {
          history.push("/home/connection");
        }}
      >
        <Switch />
      </ItemSidebar>
      <ItemSidebar
        onClick={() => {
          history.push("/home/atomization");
        }}
      >
        {" "}
        <Flag />
      </ItemSidebar>
      <ItemSidebar
        onClick={() => {
          history.push("/home/atomization-edit");
        }}
      >
        {" "}
        <Flag />
      </ItemSidebar>
      {children}
    </SidebarWrapper>
  );
};

export default Sidebar;
