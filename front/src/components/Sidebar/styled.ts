import styled from "styled-components";
import { motion } from "framer-motion";
import { GLASS_MIXIN, ORANGE } from "../../constants/variables";

export const LogoWrapper = styled.div`
  background-color: ${ORANGE};
  padding: 8px;
  margin: -16px -16px 0 -16px;
  width: 70px;
  height: 70px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const SidebarWrapper = styled(motion.div)`
  ${GLASS_MIXIN};
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
  width: 72px;
  gap: 8px;
`;
