import styled from "styled-components";
import { fontSize, GLASS_DARK_MIXIN } from "../../../../constants/variables";

export const AUserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ItemWrapperHeader = styled.div`
  margin-bottom: 10px;
  font-size: ${fontSize(16)};
`;
export const ItemWrapperBody = styled.div`
  display: flex;
  align-items: center;
`;
export const ItemWrapper = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 80px;
  padding: 8px;
  border-radius: 16px;
  ${GLASS_DARK_MIXIN};
  box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.3);
`;
