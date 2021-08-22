import styled from "styled-components";
import { motion } from "framer-motion";
import { ORANGE } from "../../constants/variables";
import Back from "../../images/Back.jpg";

export const LogoWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 450px;
  width: 800px;
  svg {
    height: 100%;
    width: 100%;
    path {
      fill: ${ORANGE};
    }
  }
`;
export const SignInPageContainer = styled(motion.div)`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Back});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
