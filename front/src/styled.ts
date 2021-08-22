import styled from "styled-components";
import { fontSize, GRAY_LIGHT } from "./constants/variables";

export const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${GRAY_LIGHT};
  font-size: ${fontSize(16)};
`;
