import styled from "styled-components";
import { BLACK_LIGHT, fontSize, TRANSITION } from "../../constants/variables";

export const InputFieldInput = styled.input`
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: rgba(255, 255, 255, 0.5);
  height: 30px;
  border-radius: 8px;
  width: 100%;
  padding-left: 8px;
  outline: none;
  box-shadow: inset 0 4px 8px -3px rgba(0, 0, 0, 0.07);
  transition: ${TRANSITION};
  &:focus {
    box-shadow: inset 0 4px 12px -3px rgba(0, 0, 0, 0.15);
  }
`;
export const InputFieldTitle = styled.span`
  display: block;
  font-weight: bold;
  font-size: ${fontSize(24)};
  color: ${BLACK_LIGHT};
  margin-bottom: 8px;
  padding-left: 8px;
`;
export const InputFieldWrapper = styled.label`
  width: auto;
`;
