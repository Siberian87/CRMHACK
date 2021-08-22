import React from "react";
import { InputFieldInput, InputFieldTitle, InputFieldWrapper } from "./styled";

const InputField: React.FC<{ title?: string; type?: "text" | "password" }> = ({
  title,
  type = "text",
}) => {
  return (
    <InputFieldWrapper>
      {title && <InputFieldTitle>{title}</InputFieldTitle>}
      <InputFieldInput type={type} />
    </InputFieldWrapper>
  );
};

export default InputField;
