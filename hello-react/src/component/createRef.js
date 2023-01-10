import React, { Component } from "react";

//createRef 사용예시
class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;
