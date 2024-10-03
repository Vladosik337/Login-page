import { useState } from 'react'

const Button = () => {
    const [value, setValue] = useState("");
    return (
        <button type="submit" className={"login__button"}>{value}</button>
    );
};

export default Button;
