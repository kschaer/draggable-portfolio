import React from "react";
import { css } from "glamor";

const innerClassName = css({ margin: 0, textAlign: "left" });

const className = css({ margin: 0, textAlign: "left", userSelect: "contain" });

const Header = () => {
  console.log("HEADER");
  return (
    <div id="FOOOF" className={innerClassName}>
      <h2>@kschaer</h2>
      <p>
        Arcu risus quis varius quam quisque. Egestas sed tempus urna et
        pharetra. Semper auctor neque vitae tempus quam pellentesque nec nam.
      </p>
    </div>
  );
};

const Item = () => (
  <div>
    <p className={className}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis
      aliquam faucibus purus in massa tempor nec feugiat. Ut aliquam purus sit
      amet.
    </p>
  </div>
);

const Item2 = () => (
  <div>
    <p className={className}>
      Amet est placerat in egestas erat. Dignissim sodales ut eu sem integer
      vitae. In nulla posuere sollicitudin aliquam ultrices sagittis orci.
    </p>
  </div>
);

const Item3 = () => (
  <div>
    <p className={className}>
      Magna fringilla urna porttitor rhoncus. Ipsum dolor sit amet consectetur
      adipiscing elit.
    </p>
  </div>
);

const Item4 = () => (
  <div>
    <p className={className}>
      Enim sit amet venenatis urna cursus eget nunc. Id diam vel quam elementum
      pulvinar etiam non quam. Eget lorem dolor sed viverra ipsum nunc aliquet.
      Faucibus nisl tincidunt eget nullam non nisi est.
    </p>
  </div>
);

const getDim = (min = 80, max = 600) => min + Math.random() * max - min;

export const items = [
  {
    id: "Header",
    isDragging: false,
    isResizing: false,
    top: getDim(80, 100),
    left: getDim(80, 300),
    width: 800,
    height: 170,
    Component: Header
  },
  {
    id: "first",
    isDragging: false,
    isResizing: false,
    top: getDim(),
    left: getDim(),
    width: 500,
    height: 180,
    Component: Item
  },
  {
    id: "second",
    isDragging: false,
    isResizing: false,
    top: getDim(),
    left: getDim(),
    width: 300,
    height: 200,
    Component: Item2
  },
  {
    id: "third",
    isDragging: false,
    isResizing: false,
    top: getDim(),
    left: getDim(),
    width: 400,
    height: 250,
    Component: Item3
  },
  {
    id: "fourth",
    isDragging: false,
    isResizing: false,
    top: getDim(),
    left: getDim(),
    width: 300,
    height: 400,
    Component: Item4
  }
].reverse();
