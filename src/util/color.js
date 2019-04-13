export const rgba = (r, g, b) => a => `rgb(${r},${g},${b},${255 * a})`;

export const absoluteBlue = rgba(0, 0, 255);
export const black = rgba(0, 0, 0);
export const white = rgba(255, 255, 255);
export const highlighter = rgba(233, 249, 142);

export const colors = {
  absoluteBlue: absoluteBlue(1),
  black: black(1),
  white: white(1),
  highlighter: highlighter(1)
};
