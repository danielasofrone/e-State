import { css } from "styled-components";

export const sizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const colors = {
  background: "#e5e5e5",
  backgroundMail: "#ffff",
  primaryText: "#4A4A4A",
};
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : "";
};

export const px2rem = (pxl) => `${pxl / 16}rem`;

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const theme = {
  sizes,
  colors,
  px2rem,
  hexToRgb,
};
