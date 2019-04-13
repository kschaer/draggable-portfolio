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
    id: "first",
    isDragging: false,
    isResizing: false,
    top: 100,
    left: 50,
    width: 300,
    height: 200
  },
  {
    id: "second",
    isDragging: false,
    isResizing: false,
    top: 50,
    left: 200,
    width: 400,
    height: 250
  }
];
