import { useState } from 'react'


const Input = (props) => {
    const [value, setValue] = useState(""); // диструкторизація

    return (
        <div className="input__item">
            <p>{value}</p>
            <label htmlFor={props.input.id}>
                <img src={props.input.imgSrc} alt="user icon"/>
                <input
                    type="text"
                    value={value}
                    onChange={event => {setValue(event.target.value)}}
                    placeholder={props.input.placeholder}
                    id={props.input.id}
                />
            </label>
        </div>
    );
};

export default Input;
