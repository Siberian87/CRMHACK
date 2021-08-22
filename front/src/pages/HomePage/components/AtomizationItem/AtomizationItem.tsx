import React from "react";
import { ItemWrapper, ItemWrapperBody, ItemWrapperHeader } from "./styled";

const AtomizationItem: React.FC<{ title?: string }> = ({
  children,
  title = "цепочка",
}) => {
  const items = Array.isArray(children) ? Array(children) : [children];
  return (
    <ItemWrapper>
      <ItemWrapperHeader>{title}</ItemWrapperHeader>
      <ItemWrapperBody>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </ItemWrapperBody>
    </ItemWrapper>
  );
};

export default AtomizationItem;
