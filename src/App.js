import { Component } from "react";
import "./App.css";
import Number from "./components/Number";
import Output from "./components/Output";
class App extends Component {
  state = {
    result: "",
  };
  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "C") {
      this.reset();
    } else if (buttonName === "CE") {
      this.backspace();
    } else
      this.setState({
        result: this.state.result + buttonName,
      });
  };

  reset = () => {
    this.setState({
      result: " ",
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  render() {
    return (
      <div className="">
        <Output result={this.state.result} />
        <Number buttonPressed={this.buttonPressed} />
      </div>
    );
  }
}
export default App;
