import styled from "styled-components";
import { motion } from "framer-motion";
import { BLACK_LIGHT, WHITE } from "../../../../constants/variables";

export const LeftSide = styled(motion.div)``;
export const RightSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 16px;
`;
export const ConnectionBody = styled(motion.div)`
  padding: 32px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const HeaderBar = styled.ul`
  border-bottom: 1px solid ${WHITE};
  height: 60px;
  padding: 32px 32px;
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  li {
    list-style: none;
    color: ${BLACK_LIGHT};
    font-weight: bold;
  }
`;
export const ConnectionWrapper = styled.div`
  height: 100%;
`;
