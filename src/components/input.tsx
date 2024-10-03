import { useState } from 'react'

const Input = ({children, ...props}) => {
    const [value, setValue] = useState(""); // диструкторизація
    return (
        <div className="flex flex-col items-center justify-items-center max-w-[300px] w-full">
            <div>{value}</div>
            <label htmlFor={props.input.id} className={`py-[13px] px-[13px] shadow-input hover:shadow-button focus-within:shadow-button transition duration-300 flex gap-[19px] rounded-[4px]`}>
                <img src={props.input.imgSrc} alt="user icon"/>
                <input
                    type="text"
                    value={value}
                    onChange={event => {setValue(event.target.value)}}
                    placeholder={props.input.placeholder}
                    id={props.input.id}
                    className={`bg-blue text-white placeholder:text-white placeholder:uppercase pt outline-none border-0 shadow appearance-none`}
                    {...props}
                />
            </label>
        </div>
    );
};

export default Input;

