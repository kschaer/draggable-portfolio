import React from "react";

import Resizer from "./Resizer";

const draggableCanvas = WrappedComponent => {
  return class DraggableWrapper extends React.Component {
    onMouseDown(e) {
      var elm = document.elementFromPoint(e.clientX, e.clientY);
      if (elm.className !== "resizer") {
        this.props.updateStateDragging(this.props.id, true);
      }
    }
    onMouseUp(e) {
      this.props.updateStateDragging(this.props.id, false);
    }
    onDragStart(e) {
      const nodeStyle = this.refs.node.style;
      e.dataTransfer.setData(
        "application/json",
        JSON.stringify({
          id: this.props.id,
          // mouse position in a draggable element
          x: e.clientX - parseInt(nodeStyle.left),
          y: e.clientY - parseInt(nodeStyle.top)
        })
      );
    }
    onDragEnd(e) {
      this.props.updateStateDragging(this.props.id, false);
    }
    render() {
      const styles = this.props;
      console.log("WRAPPER PROPS", this.props.children, this.props.comp);
      return (
        <div
          ref={"node"}
          draggable={this.props.isDragging}
          id={"item_" + this.props.id}
          className="item unselectable"
          style={styles}
          onMouseDown={this.onMouseDown.bind(this)}
          onMouseUp={this.onMouseUp.bind(this)}
          onDragStart={this.onDragStart.bind(this)}
          onDragEnd={this.onDragEnd.bind(this)}
        >
          <WrappedComponent children={this.props.children} />
          <Resizer
            ref={"resizerNode"}
            id={this.props.id}
            isResizing={this.props.isResizing}
            resizerWidth={16}
            resizerHeight={16}
            updateStateResizing={this.props.updateStateResizing}
            funcResizing={this.props.funcResizing}
          />
        </div>
      );
    }
  };
};

export default draggableCanvas;
