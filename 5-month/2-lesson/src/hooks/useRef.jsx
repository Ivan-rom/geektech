import React, {useRef} from 'react';

const App = () => {
    const inputRef = useRef(null)

    console.log(inputRef);

    const inputClick = () =>{
        inputRef.current.click();
    }

    console.log(inputRef);

    return (
        <div>
            <input ref={inputRef} className="hidden" type="file"/>
            <button onClick={inputClick} className="py-2 px-4 bg-gray-500 text-white">choose file</button>
        </div>
    );
};

export default App;