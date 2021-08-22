import styled from "styled-components";
import { BLACK, fontSize, TRANSITION, WHITE } from "../../constants/variables";

export const Btn = styled.button`
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: ${WHITE};
  height: 30px;
  border-radius: 8px;
  width: 100%;
  padding-left: 8px;
  font-size: ${fontSize(16)};
  font-weight: bold;
  color: ${BLACK};
  outline: none;
  box-shadow: inset 0 -4px 8px -4px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.07);
  transition: ${TRANSITION};
  &:focus {
    box-shadow: inset 0 1px 16px -2px rgba(0, 0, 0, 0.15),
      0 0px 2px rgba(0, 0, 0, 0.07);
  }
`;
