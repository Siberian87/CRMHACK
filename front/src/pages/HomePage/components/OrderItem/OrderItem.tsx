import React from "react";
import { OrderItemCell, OrderItemWrapper } from "./styled";

const OrderItem: React.FC<{ id?: number }> = ({ id }) => {
  return (
    <OrderItemWrapper>
      <OrderItemCell>{id}</OrderItemCell>
      <OrderItemCell>12.08.2021 13:14</OrderItemCell>
      <OrderItemCell>Клиент</OrderItemCell>
      <OrderItemCell>Кузнецов Александр</OrderItemCell>
      <OrderItemCell>Физическое лицо</OrderItemCell>
      <OrderItemCell>Доставляется</OrderItemCell>
      <OrderItemCell>11 490 ₽</OrderItemCell>
    </OrderItemWrapper>
  );
};

export default OrderItem;
