import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { RED, rgba, BLUE } from "../../constants/variables";

export const EventHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const EventWrapper = styled(motion.button)<{ color?: string }>`
  border: 1px solid ${RED};
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px 16px;
  background-image: linear-gradient(
    45deg,
    ${rgba(RED, 0.5)},
    ${rgba(RED, 0.6)}
  );
  color: white;
  svg path {
    fill: white;
  }

  border-radius: 8px;
  width: 100%;
  min-width: 100px;
  min-height: 40px;

  ${p => {
    switch (p.color) {
      case "blue":
        return css`
          border: 1px solid ${BLUE};
          background-image: linear-gradient(
            45deg,
            ${rgba(BLUE, 0.5)},
            ${rgba(BLUE, 0.6)}
          );
        `;
    }
  }}
`;
