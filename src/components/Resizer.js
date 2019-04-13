import React from "react";

// Resizer Component
class Resizer extends React.Component {
  componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove.bind(this), false);
    window.addEventListener("mouseup", this.onMouseUp.bind(this), false);
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove.bind(this), false);
    window.removeEventListener("mouseup", this.onMouseUp.bind(this), false);
  }
  onMouseDown(e) {
    console.log("Resizer.onMouseDown");

    this.props.updateStateResizing(this.props.id, true);
  }
  onMouseMove(e) {
    console.log("Resizer.onMouseMove");
    if (this.props.isResizing) {
      this.props.funcResizing(this.props.id, e.clientX, e.clientY);
    }
  }
  onMouseUp(e) {
    console.log("Resizer.onMouseUp");
    if (this.props.isResizing) {
      this.props.updateStateResizing(this.props.id, false);
    }
  }
  render() {
    const style = {
      width: this.props.resizerWidth,
      height: this.props.resizerHeight
    };
    return (
      <div
        className="resizer"
        style={style}
        onMouseDown={this.onMouseDown.bind(this)}
      />
    );
  }
}

export default Resizer;
// Resizer.propTypes = {
//   id: React.PropTypes.number.isRequired,
//   isResizing: React.PropTypes.bool.isRequired,
//   funcResizing: React.PropTypes.func.isRequired,
//   updateStateResizing: React.PropTypes.func.isRequired,
//   resizerWidth: React.PropTypes.number.isRequired,
//   resizerHeight: React.PropTypes.number.isRequired
// };
