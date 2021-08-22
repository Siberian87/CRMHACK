import React from "react";
import { ReactComponent as Users } from "../../../../images/icons/users.svg";
import { AUserWrapper } from "./styled";

const AUser: React.FC<{ action?: "string" }> = ({ action = "позвонил" }) => {
  return (
    <AUserWrapper>
      <Users />
      <span>{action}</span>
    </AUserWrapper>
  );
};

export default AUser;
