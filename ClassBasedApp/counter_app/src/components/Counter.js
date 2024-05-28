import { Component } from "react";
import { decrement, increment } from "../features/counterFeatures";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button onClick={this.props.decrease}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.props.increase}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increment()),
    decrease: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
