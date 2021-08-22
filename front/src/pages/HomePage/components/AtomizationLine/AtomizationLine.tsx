import React from "react";
import { ReactComponent as Add } from "../../../../images/icons/add.svg";
import IconButton from "../../../../components/IconButton/IconButton";
import AtomizationItem from "../AtomizationItem/AtomizationItem";
import AUser from "../AtomizationItem/AUser";
import { HeaderBar, OrderBody, AtomizationLineWrapper } from "./styled";

const AtomizationLine: React.FC = () => {
  return (
    <AtomizationLineWrapper>
      <HeaderBar>
        <h2>Цепочки автоматизации</h2>
        <IconButton>
          <Add />
        </IconButton>
      </HeaderBar>
      <OrderBody>
        <AtomizationItem title="Обработка звонка">
          <AUser />
        </AtomizationItem>
        <AtomizationItem title="Поступила жалоба" />
        <AtomizationItem title="Передать пользователя на обработку в Главный офис" />
        <AtomizationItem title="Брошенная корзина" />
      </OrderBody>
    </AtomizationLineWrapper>
  );
};

export default AtomizationLine;
