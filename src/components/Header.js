import React from "react";
import { css } from "glamor";

import draggable from "./draggableWrapper";

import { absoluteBlue, white, black, spacer } from "../util";

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
  boxShadow: `0 -1px .5px ${absoluteBlue(0.5)}, 0 -10px 0 -5px ${white(
    1
  )}, 0 -10px .5px -4px ${absoluteBlue(0.5)}, 0 -20px 0 -10px ${white(
    1
  )}, 0 -20px .5px -9px ${absoluteBlue(0.5)}, 0 -30px 0 -20px ${white(
    1
  )}, 0 -30px .5px -19px ${absoluteBlue(0.5)}`
});

const innerClassName = css({ margin: 0 });

const Header = () => (
  <div className={containerClassName}>
    <div className={className}>
      <h className={innerClassName}>Hello World</h>
    </div>
  </div>
);

export default draggable(Header);
