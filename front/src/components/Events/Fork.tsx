import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { EventWrapper, EventHeader } from "./styled";

export const ForkNode = ({ data }) => {
  return (
    <EventWrapper color="blue">
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <EventHeader>{data.label}</EventHeader>
    </EventWrapper>
  );
};

const Fork: React.FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <EventWrapper onClick={onClick} color="blue">
      {children}
    </EventWrapper>
  );
};

export default Fork;
