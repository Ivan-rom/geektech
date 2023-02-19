import React, {createContext, useState} from 'react';
import ButtonUI from "./component/buttons";
import ContentBlock from "./component/ContentBlock";
import Button from "./component/Button";

export const CounterContext = createContext(null);
export const ThemeContext = createContext(null);

const UseContextFile = () => {
    const [counter, setCounter] = useState(1);
    const [theme, setTheme] = useState(true);

    const incrementCounter = () =>{
        setCounter(prevState => prevState + 1);
    };

    const decrementCounter = () => {
        setCounter(prevState => prevState - 1);
    };

    const changeTheme = () => {
        setTheme(prevState => !prevState)
    }

    return (
        <div>
            <CounterContext.Provider value={{counter, incrementCounter, decrementCounter}}>
                <div className="text-center text-red-600">
                    <p>{counter}</p>
                    <ButtonUI/>
                </div>
            </CounterContext.Provider>
            <ThemeContext.Provider value={{theme, changeTheme}}>
                <ContentBlock/>
                <Button/>
            </ThemeContext.Provider>
        </div>
    );
};

export default UseContextFile;