interface InputProps {
    id: string,
    placeholder: string,
    imgSrc: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
}

// Function Component
const Input = ({id, placeholder, imgSrc, value, setValue, ...props }: InputProps) => {

    return (
        <div className="flex flex-col items-center justify-items-center max-w-[300px] w-full">
            <div>{value}</div>
            <label
                htmlFor={id}
                className="py-[13px] px-[13px] shadow-input hover:shadow-button focus-within:shadow-button transition duration-300 flex gap-[19px] rounded-[4px]"
            >
                <img src={imgSrc} alt="icon" />
                <input
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    placeholder={placeholder}
                    id={id}
                    className="bg-blue text-white placeholder:text-white placeholder:uppercase pt outline-none border-0 shadow appearance-none"
                    {...props}
                />
            </label>
        </div>
    );
};

export default Input;
