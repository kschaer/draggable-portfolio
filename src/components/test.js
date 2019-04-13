import React from "react";
import { css } from "glamor";

import draggable from "./DraggablePts";

const className = css({ background: "#ffccaa" });

const Test = () => (
  <div className={className}>
    <p>Hello World</p>
  </div>
);

export default draggable(Test);
