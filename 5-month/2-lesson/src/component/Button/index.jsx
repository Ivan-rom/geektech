import React, {useContext} from 'react';
import {ThemeContext} from "../../App";

const Button = () => {
    // const {changeTheme} = useContext(ThemeContext);
    console.log("render");
    return (
        <div className="flex justify-center">
            <button  className=" py-4 px-2 bg-gray-500 text-white rounded-2xl uppercase ml-2">change theme</button>
        </div>
    );
};

export default Button ;