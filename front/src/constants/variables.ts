import { css } from "styled-components";

export const ORANGE = "#FEDA03";
export const RED = "#D90404";
export const BLUE = "#033E8C";
export const ORANGE_DARK = "#A68524";
export const GRAY_LIGHT = "#F2F2F2";
export const WHITE = "#FFFFFF";
export const GRAY = "#8C8C8C";
export const BLACK = "#404040";
export const BLACK_LIGHT = "#666";

export const TRANSITION = "0.2s ease-out";

export const fontSize = (size: 72 | 48 | 32 | 24 | 16 | 12) => {
  switch (size) {
    case 72:
      return "72px";
    case 48:
      return "48px";
    case 32:
      return "32px";
    case 24:
      return "24px";
    case 16:
      return "16px";
    case 12:
      return "12px";
  }
};

export const GLASS_DARK_MIXIN = css`
  background: linear-gradient(45deg, #3337 0%, #3339 100%);
  border: 1px solid #ffffffdd;
  color: ${WHITE};
  svg path {
    fill: ${WHITE};
  }
`;
export const GLASS_MIXIN = css`
  background: linear-gradient(45deg, #ffffffdd 0%, #ffffff11 100%);
  backdrop-filter: blur(8px);
  border: 1px solid #ffffff88;
  color: ${BLACK};
`;

export const hexToRgb = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgba = (hex, alpha) => {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};
