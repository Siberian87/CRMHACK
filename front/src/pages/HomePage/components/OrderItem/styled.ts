import styled from "styled-components";
import { motion } from "framer-motion";
import { BLACK_LIGHT, WHITE } from "../../../../constants/variables";

export const OrderItemCell = styled.td`
  padding: 8px;
`;
export const OrderItemWrapper = styled.tr`
  width: 100%;
  height: 40px;
  align-items: center;
  border-bottom: 1px solid ${WHITE};
  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
