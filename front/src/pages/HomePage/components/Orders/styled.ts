import styled from "styled-components";
import { motion } from "framer-motion";
import { BLACK_LIGHT, WHITE } from "../../../../constants/variables";

export const OrderBody = styled(motion.div)`
  padding: 32px;
  display: flex;
  flex-direction: column;
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
export const OrdersWrapper = styled.div`
  height: 100%;
`;
