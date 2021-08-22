import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import { HeaderBar, OrderBody, OrdersWrapper } from "./styled";

const Orders: React.FC = () => {
  return (
    <OrdersWrapper>
      <HeaderBar>
        <li>Заказы</li>
        <li>Клиенты</li>
        <li>Склад</li>
        <li>Менеджеры</li>
        <li>Финансы</li>
      </HeaderBar>
      <OrderBody>
        <table>
          {[1, 2, 3, 4, 5].map((item, i) => (
            <OrderItem key={i} id={i} />
          ))}
        </table>
      </OrderBody>
    </OrdersWrapper>
  );
};

export default Orders;
