import React from "react";

interface Item {
  id: string;
  isDragging: boolean;
  isResizing: boolean;
  top: number;
  left: number;
  width: number;
  height: number;
}

export const items: Array<Item> = [
  {
    id: "title",
    isDragging: false,
    isResizing: false,
    top: 60,
    left: 250,
    width: 800,
    height: 150
  },
  {
    id: "first",
    isDragging: false,
    isResizing: false,
    top: 180,
    left: 140,
    width: 500,
    height: 180
  },
  {
    id: "second",
    isDragging: false,
    isResizing: false,
    top: 220,
    left: 350,
    width: 300,
    height: 200
  },
  {
    id: "third",
    isDragging: false,
    isResizing: false,
    top: 450,
    left: 600,
    width: 400,
    height: 250
  },
  {
    id: "fourth",
    isDragging: false,
    isResizing: false,
    top: 180,
    left: 850,
    width: 300,
    height: 400
  }
].reverse();
