import React from "react";
import { css } from "glamor";

import draggable from "./DraggablePts";

const className = css({
  background:
    "linear-gradient(to bottom, rgba(63,76,107,0.63) 0%,rgba(63,76,107,0.35) 100%)",
  display: "flex",
  width: "100%",
  height: "100%"
});

const Test = () => (
  <div className={className}>
    <p>Hello World</p>
  </div>
);

export default draggable(Test);
