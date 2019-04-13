import React, { Children } from "react";
import { css } from "glamor";

import { absoluteBlue, white, black, spacer } from "../util";

import draggable from "./draggableWrapper";

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
    0.2
  )}, 0 -10px .5px -4px ${absoluteBlue(0.05)}, 0 -20px 0 -10px ${white(
    0.2
  )}, 0 -20px .5px -9px ${absoluteBlue(0.05)}, 0 -30px 0 -20px ${white(
    0.2
  )}, 0 -30px .5px -19px ${absoluteBlue(0.05)}`
});

const Working = props => {
  console.log("(****", props);
  return (
    <div className={containerClassName}>
      <div className={className}>{props.children()}</div>
    </div>
  );
};

export default draggable(Working);
