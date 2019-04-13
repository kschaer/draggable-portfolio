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
    top: 80,
    left: 140,
    width: 500,
    height: 150
  },
  {
    id: "second",
    isDragging: false,
    isResizing: false,
    top: 150,
    left: 350,
    width: 300,
    height: 200
  },
  {
    id: "third",
    isDragging: false,
    isResizing: false,
    top: 50,
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
