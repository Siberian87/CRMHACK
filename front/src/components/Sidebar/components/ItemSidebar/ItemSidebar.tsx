import React from "react";
import { ReactComponent as Rect } from "../../../../images/Rect.svg";
import { SideBarItem } from "./styled";

const ItemSidebar: React.FC<{ onClick?: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <SideBarItem onClick={onClick}>
      <Rect />
      <span>{children}</span>
    </SideBarItem>
  );
};

export default ItemSidebar;
