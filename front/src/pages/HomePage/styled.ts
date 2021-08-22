import styled from "styled-components";
import { motion } from "framer-motion";
import Back from "../../images/Back.jpg";
import { GLASS_MIXIN } from "../../constants/variables";

export const HomePageModulWrapper = styled(motion.div)`
  ${GLASS_MIXIN};
  width: 80%;
  height: calc(100vh - 120px);
  border-radius: 32px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;
export const HomePageMain = styled.div`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;
export const SignInPageContainer = styled(motion.div)`
  position: relative;
  height: 100vh;
  display: flex;
  background-image: url(${Back});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
