import React from "react";

import Resizer from "./Resizer";
// draggable Component
class Draggable extends React.Component {
  onMouseDown(e) {
    console.log("Draggable.onMouseDown");

    var elm = document.elementFromPoint(e.clientX, e.clientY);
    if (elm.className !== "resizer") {
      this.props.updateStateDragging(this.props.id, true);
    }
  }
  onMouseUp(e) {
    console.log("Draggable.onMouseUp");
    this.props.updateStateDragging(this.props.id, false);
  }
  // Drag開始イベント
  onDragStart(e) {
    console.log("Draggable.onDragStart");

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
    console.log("Draggable.onDragEnd");

    this.props.updateStateDragging(this.props.id, false);
  }
  render() {
    const styles = {
      top: this.props.top,
      left: this.props.left,
      width: this.props.width,
      height: this.props.height
    };
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
        {"item_" + this.props.id}
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
}
// Draggable.propTypes = {
//   id: React.PropTypes.number.isRequired,
//   isDragging: React.PropTypes.bool.isRequired,
//   isResizing: React.PropTypes.bool.isRequired,
//   top: React.PropTypes.number.isRequired,
//   left: React.PropTypes.number.isRequired,
//   width: React.PropTypes.number.isRequired,
//   height: React.PropTypes.number.isRequired,
//   updateStateDragging: React.PropTypes.func.isRequired,
//   updateStateResizing: React.PropTypes.func.isRequired,
//   funcResizing: React.PropTypes.func.isRequired
// };

// Render Dom
// ReactDOM.render(<DropArea />, document.getElementById("app"));

export default Draggable;
