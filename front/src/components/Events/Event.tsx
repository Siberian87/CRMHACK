import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { EventWrapper, EventHeader } from "./styled";

export const EventNode = ({ data }) => {
  return (
    <EventWrapper>
      <Handle type="source" position={Position.Bottom} id={data.id} />
      <EventHeader>{data.label}</EventHeader>
    </EventWrapper>
  );
};
const Event: React.FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  return <EventWrapper onClick={onClick}>{children}</EventWrapper>;
};

export default Event;
