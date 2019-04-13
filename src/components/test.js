import React from "react";
import { css } from "glamor";

import { absoluteBlue, white, black } from "../util";

import draggable from "./DraggablePts";

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

  width: "100%",
  height: "100%",
  border: `5px ${black(0.4)}`,
  padding: spacer(2),
  boxShadow: `0 -1px .5px ${absoluteBlue(0.05)}, 0 -10px 0 -5px ${white(
    1
  )}, 0 -10px .5px -4px ${absoluteBlue(0.05)}, 0 -20px 0 -10px ${white(
    1
  )}, 0 -20px .5px -9px ${absoluteBlue(0.05)}, 0 -30px 0 -20px ${white(
    1
  )}, 0 -30px .5px -19px ${absoluteBlue(0.05)}`
});

const innerClassName = css({ margin: 0 });

const Test = () => (
  <div className={containerClassName}>
    <div className={className}>
      <p className={innerClassName}>Hello World</p>
    </div>
  </div>
);

export default draggable(Test);
