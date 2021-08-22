import styled from "styled-components";
import { TRANSITION, WHITE } from "../../../../constants/variables";

export const SideBarItem = styled.button`
  border: unset;
  cursor: pointer;
  transition: ${TRANSITION};
  width: 40px;
  height: 40px;
  //border: 1px solid ${WHITE};
  background-image: linear-gradient(135deg, #0002, #00000030, #0002);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${WHITE};
  font-weight: 300;
  border-radius: 8px;
  position: relative;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    & > svg {
    }
  }
  span svg {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    path {
      fill: white;
    }
  }
  & > svg {
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    z-index: -1;
    width: 42px;
    height: 42px;
  }
`;
