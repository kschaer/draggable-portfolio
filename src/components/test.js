import React from "react";
import { css } from "glamor";

import draggable from "./DraggablePts";

const cream = "#fffaf7";
// const absoluteBlue = "#0000ff";
// const black = "#000000";

const rgba = (r, g, b) => a => `rgb(${r},${g},${b},${255 * a})`;

const absoluteBlue = rgba(0, 0, 255);
const black = rgba(0, 0, 0);
const white = rgba(255, 255, 255);
const highlighter = rgba(233, 249, 142);

const spacer = num => `${8 * num}px`;

for (var i = 1; i >= 0; i -= 0.01) {
  i = Math.round(i * 100) / 100;
  var alpha = Math.round(i * 255);
  var hex = (alpha + 0x10000)
    .toString(16)
    .substr(-2)
    .toUpperCase();
  var perc = Math.round(i * 100);
}

const opacity = (hex, alpha) => {
  const alphaBit = Math.round(alpha * 255);
  const alphaHex = (alphaBit + 0x10000).toString(16).substr(-2);

  console.log(`${hex}${alphaHex}`);
  return `${hex}${alphaHex}`;
};

const containerClassName = css({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center"
});
const className = css({
  display: "flex",
  alignItems: "left",
  background:
    "linear-gradient(to bottom, rgba(255,255,240,0.80) 0%,rgba(255,255,240,0.90) 100%)",
  width: "50%",
  height: "50%",
  border: `5px ${black(0.4)}`,
  padding: spacer(2),
  margin: "auto",
  boxShadow: `0 -1px 1px ${absoluteBlue(0.05)}, 0 -10px 0 -5px ${white(
    1
  )}, 0 -10px 1px -4px ${absoluteBlue(0.05)}, 0 -20px 0 -10px ${white(
    1
  )}, 0 -20px 1px -9px ${absoluteBlue(0.05)}, 0 -30px 0 -20px ${white(
    1
  )}, 0 -30px 1px -19px ${absoluteBlue(0.05)}`
});

const innerClassName = css({ background: highlighter(1), margin: 0 });

const Test = () => (
  <div className={containerClassName}>
    <div className={className}>
      <p className={innerClassName}>Hello World</p>
    </div>
  </div>
);

export default draggable(Test);
