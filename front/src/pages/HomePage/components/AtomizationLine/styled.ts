import styled from "styled-components";
import { motion } from "framer-motion";
import {
  BLACK_LIGHT,
  ORANGE,
  rgba,
  WHITE,
} from "../../../../constants/variables";

export const OrderBody = styled(motion.div)`
  padding: 32px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  box-shadow: inset 0 16px 16px -16px rgba(0, 0, 0, 0.15);
`;
export const HeaderBar = styled.ul`
  border-bottom: 1px solid ${WHITE};
  height: 60px;
  padding: 32px 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  background-color: ${rgba(WHITE, 0.3)};
  li {
    list-style: none;
    color: ${BLACK_LIGHT};
    font-weight: bold;
  }
`;
export const AtomizationLineWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
