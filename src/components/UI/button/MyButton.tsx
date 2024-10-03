import { useState } from 'react'
import button from "../../button.tsx";
import classes from "./MyButton.module.css";

const MyButton = ({ children, customClass, ...props }) => {
    return (
        <button {...props} className={`${customClass}`}>
            {children}
        </button>
    );
};
export default MyButton;
