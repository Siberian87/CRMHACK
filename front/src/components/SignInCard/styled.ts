import styled from "styled-components";
import { motion } from "framer-motion";
import { Btn } from "../Button/styled";
import { GLASS_MIXIN } from "../../constants/variables";

export const SignInCardContainer = styled(motion.div)`
  ${GLASS_MIXIN};
  position: absolute;
  top: 50%;
  left: 50%;
  gap: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  width: 350px;
  height: 400px;
  padding: 24px;
  display: flex;
  flex-direction: column;

  ${Btn} {
    margin-top: auto;
  }
`;
