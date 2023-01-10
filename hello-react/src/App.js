// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
// import Counter from "./component/Counter";
// import { Component } from "react";
// import MyComponent from "./component/MyComponent";
// import Say from "./component/Say";
// import EventPractice from "./component/EventPractice";
// import ScrollBox from "./component/ScrollBox";
// import ValidationSample from "./component/ValidationSample";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./component/LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "black",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
