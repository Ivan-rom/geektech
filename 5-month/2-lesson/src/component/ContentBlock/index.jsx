import React, {useContext} from 'react';
import {ThemeContext} from "../../App";

const ContentBlock = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="flex justify-center my-2">
            <div className={`border-gray-600 border h-[350px] w-[250px] ${theme ? 'bg-red-600' : 'bg-teal-500'}`}>

            </div>
        </div>
    );
};

export default ContentBlock;