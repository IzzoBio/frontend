function Input({label,type,placeholder,action,errors}) {
    return (
        <div className="-space-y-px">
            <div className="my-5 flex justify-center items-center">
                <label htmlFor={label} className="sr-only">
                    {label}
                </label>
                <input
                    //onChange={handleChange}
                    //value={value}
                    type={type}
                    //required={isRequired}
                    className="border border-[#D9DAD9] rounded-md appearance-none h-[50px] relative block w-[500px] max-w-[500px] px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-terracota-500 focus:border-terracota-500 focus:z-10 sm:text-sm"
                    placeholder={placeholder}
                    {...action}
                />
                {errors}
            </div>
        </div>
    )
}

export default Input;