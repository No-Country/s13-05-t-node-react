const Input =  ({
    /* eslint-disable */
    labelText,
    type,
    placeholder,
    name,
    change,
    register,
    error,
    /* eslint-disable */
}) => 
{
    return (
        <div>
            <div className="w-full -mb-5">
                <label
                    htmlFor={name}
                    className="flex mb-1 text-white "
                >
                    {labelText}
                </label>
                <input
                    type={type || "text"}
                    {...(register && { ...register(name) })}
                    name={name}
                    className="w-full px-2 py-2 bg-gradient-to-b from-[#A9B5B4] to-[#9AC9C4] rounded-lg placeholder:text-gray-500 text-black outline-none appearance-none border-none"
                    placeholder={placeholder}
                    onChange={change && change}
                />
            </div>
            <span className="text-red-600">{error ? error : "\u00A0"}</span>
        </div>
        
         
        
    );
}

export default Input