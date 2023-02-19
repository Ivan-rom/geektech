import React, {useReducer} from 'react';

const initialState = {
    words: []
}

const reducer = (state, action) =>{
    console.log(action.type);
    switch (action.type) {
        case 'add':
            return {words: [...state.words, action.payload]}
        case 'remove':
            return {words: state.words.filter((word, i) => i !== action.payload)}
        case 'clear':
            return {words: []}
        default:
            console.log(action.type)
    }
}

const UseReducerFile = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state.words);

    return (
        <div className="text-center w-[80%] mx-auto my-2">
            <input type="text"
                   className="border border-gray-500 outline-0 w-full my-2"
                   id="word"
                   onChange={e => dispatch({type: 'add', payload: e.target.value})}
            />
            {
                state.words.map((word, i) => {
                    return(
                        <div>
                            <p>{word}</p>
                            <button
                                className="py-4 px-2 bg-gray-500 text-white ml-2"
                                onClick={() => dispatch({type: 'remove', payload: i})}>remove</button>
                        </div>
                    )
                })
            }
            <button
                className="py-4 px-2 bg-gray-500 text-white ml-2"
                onClick={() => dispatch({type: 'clear'})}>clear</button>
        </div>
    );
};

export default UseReducerFile;