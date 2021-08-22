import React from "react";
import { IconBtn } from "./styled";

const IconButton: React.FC<{ className?: string; onClick?: () => void }> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <IconBtn onClick={onClick} className={className}>
      {children}
    </IconBtn>
  );
};

export default IconButton;
