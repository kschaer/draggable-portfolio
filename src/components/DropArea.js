import React from "react";
import ReactDOM from "react-dom";

import Draggable from "./Draggable";

// drop area Component
class DropArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          isDragging: false,
          isResizing: false,
          top: 100,
          left: 50,
          width: 100,
          height: 150
        },
        {
          id: 2,
          isDragging: false,
          isResizing: false,
          top: 50,
          left: 200,
          width: 200,
          height: 100
        }
      ]
    };
  }
  onDragOver(e) {
    console.log("DropArea.onDragOver");

    e.preventDefault();
    return false;
  }
  // drop
  onDrop(e) {
    console.log("DropArea.onDrop");

    var obj = JSON.parse(e.dataTransfer.getData("application/json"));

    let list = this.state.list;
    let index = this.state.list.findIndex(item => item.id === obj.id);
    list[index].isDragging = false;
    list[index].top = e.clientY - obj.y;
    list[index].left = e.clientX - obj.x;

    let newState = Object.assign(this.state, {
      list: list
    });

    this.setState(newState);

    e.preventDefault();
  }
  updateStateDragging(id, isDragging) {
    let list = this.state.list;
    let index = this.state.list.findIndex(item => item.id == id);
    list[index].isDragging = isDragging;

    let newState = Object.assign(this.state, {
      list: list
    });
    this.setState(newState);
  }
  updateStateResizing(id, isResizing) {
    let list = this.state.list;
    let index = this.state.list.findIndex(item => item.id == id);
    list[index].isResizing = isResizing;

    let newState = Object.assign(this.state, {
      list: list
    });
    this.setState(newState);
  }
  funcResizing(id, clientX, clientY) {
    let node = ReactDOM.findDOMNode(this.refs["node_" + id]);

    let list = this.state.list;
    let index = this.state.list.findIndex(item => item.id == id);
    list[index].width = clientX - node.offsetLeft + 16 / 2;
    list[index].height = clientY - node.offsetTop + 16 / 2;

    let newState = Object.assign(this.state, {
      list: list
    });
    this.setState(newState);
  }
  render() {
    let items = [];
    for (let item of this.state.list) {
      items.push(
        <Draggable
          ref={"node_" + item.id}
          key={item.id}
          id={item.id}
          top={item.top}
          left={item.left}
          width={item.width}
          height={item.height}
          isDragging={item.isDragging}
          isResizing={item.isResizing}
          updateStateDragging={this.updateStateDragging.bind(this)}
          updateStateResizing={this.updateStateResizing.bind(this)}
          funcResizing={this.funcResizing.bind(this)}
        />
      );
    }
    return (
      <div
        className="drop-area"
        onDragOver={this.onDragOver.bind(this)}
        onDrop={this.onDrop.bind(this)}
      >
        {items}
      </div>
    );
  }
}

export default DropArea;
