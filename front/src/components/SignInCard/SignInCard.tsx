import React from "react";
import { useHistory } from "react-router-dom";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { SignInCardContainer } from "./styled";

const SignInCard: React.FC = () => {
  const history = useHistory();
  return (
    <SignInCardContainer
      initial={{ opacity: 0, y: "-60%", x: "-50%" }}
      animate={{ opacity: 1, y: "-50%", x: "-50%" }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut" }}
    >
      <InputField title="логин" />
      <InputField title="пароль" type="password" />
      <Button
        onClick={() => {
          history.push("/home/orders");
        }}
      >
        Войти
      </Button>
    </SignInCardContainer>
  );
};

export default SignInCard;
