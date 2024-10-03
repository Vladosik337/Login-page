import { useState } from 'react'

const Button = ({ children, customClass, ...props }) => {
    return (
        <button {...props} className={`${customClass}`}>
            {children}
        </button>
    );
};
export default Button;
