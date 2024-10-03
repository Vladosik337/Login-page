import { useState } from 'react'
import button from "../../button.tsx";
import classes from "./MyButton.module.css";

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.login__button}>
            {children}
        </button>
    );
};

export default MyButton;
