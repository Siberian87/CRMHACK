import React from "react";
import SignInCard from "../../components/SignInCard/SignInCard";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { SignInPageContainer, LogoWrapper } from "./styled";

const SignInPage: React.FC<{ key?: string }> = ({ key }) => {
  return (
    <SignInPageContainer key={key}>
      <LogoWrapper
        initial={{ opacity: 0, y: "-50%", x: "-50%" }}
        animate={{ opacity: 1, y: "-50%", x: "-50%" }}
        exit={{ opacity: 0, y: "-10%", x: "-50%" }}
        transition={{ ease: "easeInOut" }}
      >
        <Logo />
      </LogoWrapper>
      <SignInCard />
    </SignInPageContainer>
  );
};

export default SignInPage;
