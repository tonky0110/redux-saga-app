import React, { Component } from 'react';
import CounterPresenter from './CounterPresenter';

class CounterContainer extends Component {
    onIncrement = () => {
        const { onIncrement } = this.props;
        onIncrement();
    }
    onDecrement = () => {
        const { onDecrement } = this.props;
        onDecrement();
    }
    onIncrementIfOdd = () => {
        const { onIncrementIfOdd } = this.props;
        onIncrementIfOdd();
    }
    onIncrementAsync = (value) => {
        const { onIncrementAsync } = this.props;
        onIncrementAsync(value);
    }
    onCancelIncrementAsync = () => {
        const { onCancelIncrementAsync } = this.props;
        onCancelIncrementAsync();
    }

    render() {
        const {
            counter = 0,
            countdown = 0
        } = this.props;
        const {
            onIncrement = () => { console.log('onIncrement::::::')},
            onDecrement = () => { console.log('onDecrement::::::')},
            onIncrementIfOdd = () => { console.log('onIncrementIfOdd::::::')},
            onIncrementAsync = () => { console.log('onIncrementAsync::::::')},
            onCancelIncrementAsync = () => { console.log('onCancelIncrementAsync::::::')}
        } = this;
        return (
            <CounterPresenter
                counter={counter}
                countdown={countdown}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onIncrementIfOdd={onIncrementIfOdd}
                onIncrementAsync={onIncrementAsync}
                onCancelIncrementAsync={onCancelIncrementAsync}
            />
        )
    }
}

export default CounterContainer;
