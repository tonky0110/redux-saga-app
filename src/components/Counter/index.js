import { connect } from "react-redux";
import { counterActions } from "../../store/ducks/counter";
import CounterContainer from './CounterContainer';

const mapStateToProps = state => {
    console.log("state.counterReducers: ", state.counterReducers);
    return {
      ...state.counterReducers
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onIncrement: () => {
        dispatch(counterActions.increment());
      },
      onDecrement: () => {
        dispatch(counterActions.decrement());
      },
      onIncrementIfOdd: () => {
        dispatch(counterActions.incrementIfOdd());
      },
      onIncrementAsync: value => {
        dispatch(counterActions.incrementAsync(value));
      },
      onCancelIncrementAsync: () => {
        dispatch(counterActions.cancelIncrementAsync());
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
