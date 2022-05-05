import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/action-creators";
import PropTypes from "prop-types";

class App extends React.Component {
  
  state = {
    num: 1,
  };

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({
      num: +e.target.value,
    });
  };

  add = () => {
    this.props.increment(this.state.num);
  };

  sub = () => {
    this.props.decrement(this.state.num);
  };

  addOdd = () => {
    const { count } = this.props;
    if (count % 2 === 0) return;
    this.add();
  };

  addAsync = () => {
    setTimeout(this.add, 1000);
  };

  render() {
    let { count } = this.props;
    if (count < 0) {
      count = 0;
    }
   return (
      <div>
        <h2>Click {count} times</h2>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.addOdd}>increment if odd</button>
        <button onClick={this.addAsync}>increment async</button>
      </div>
    );
  }
}

export default connect((state) => ({ count: state }), {
  increment,
  decrement,
})(App);
