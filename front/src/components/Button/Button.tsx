import React from "react";
import { Btn } from "./styled";

const Button: React.FC<{ className?: string; onClick?: () => void }> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <Btn onClick={onClick} className={className}>
      {children}
    </Btn>
  );
};

export default Button;
