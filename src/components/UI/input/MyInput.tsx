import { useState } from 'react'
import input from "../../input.tsx";
import classes from "./MyInput.module.css";

const MyInput = ({children, ...props}) => {
    const [value, setValue] = useState(""); // диструкторизація
    return (
    <div className="input__item">
        <div>{value}</div>
        <label htmlFor={props.input.id} className={classes.input__label}>
            <img src={props.input.imgSrc} alt="user icon" className={classes.input__img}/>
            <input
                type="text"
                value={value}
                onChange={event => {setValue(event.target.value)}}
                placeholder={props.input.placeholder}
                id={props.input.id}
                className={classes.input}
                {...props}
            />
        </label>
    </div>
    );
};

export default MyInput;

