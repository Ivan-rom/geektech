import React, {useContext} from 'react';
import {CounterContext} from "../../App";

const ButtonUI = () => {
    const {incrementCounter, decrementCounter} = useContext(CounterContext);


    return (
        <div>
            <button onClick={incrementCounter} className="py-4 px-2 bg-gray-600 text-white rounded-2xl mr-2">increment</button>
            <button onClick={decrementCounter}  className="py-4 px-2 bg-gray-600 text-white rounded-2xl">decrement</button>
        </div>
    );
};

export default ButtonUI;