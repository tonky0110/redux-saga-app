import React from 'react';

const CounterPresenter = (props) => {
    const {
        counter,
        countdown,
        onIncrement,
        onDecrement,
        onIncrementIfOdd,
        onIncrementAsync,
        onCancelIncrementAsync
    } = props;
    return (
        <div>
            Clicked: { counter } times <button onClick={onIncrement}>+</button>{" "}
            <button onClick={onDecrement}>-</button>{" "}
            <button onClick={onIncrementIfOdd}>Increment if odd</button>{" "}
            <button
                onClick={
                    countdown === 0
                    ? () => {
                        onIncrementAsync(5);
                        }
                    : onCancelIncrementAsync
                }
                style={{ color: countdown ? "red" : "black" }}
            >
                {countdown > 0 ? `Cancel increment (${countdown})` : "increment after 5s"}
            </button>
        </div>
    );
}

export default CounterPresenter;
