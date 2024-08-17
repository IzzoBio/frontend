import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import * as userApi from "../../api/users";
import { useNavigate } from "react-router-dom";

export default function Verify() {
    const [otp, setOtp] = useState(Array(6).fill("")); // Array with 6 empty strings
    const inputRefs = useRef([]); // Array of refs for each input field
    const [code , setCode] = useState(0);
    const nav = useNavigate();

    const handleKeyDown = (e) => {
        if (
            !/^[0-9]{1}$/.test(e.key) &&
            e.key !== "Backspace" &&
            e.key !== "Delete" &&
            e.key !== "Tab" &&
            !e.metaKey
        ) {
            e.preventDefault();
        }

        if (e.key === "Delete" || e.key === "Backspace") {
            const index = inputRefs.current.indexOf(e.target);
            if (index > 0) {
                setOtp((prevOtp) => [
                    ...prevOtp.slice(0, index - 1),
                    "",
                    ...prevOtp.slice(index),
                ]);
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleInput = (e) => {
        const { target } = e;
        const index = inputRefs.current.indexOf(target);
        if (target.value) {
            setOtp((prevOtp) => [
                ...prevOtp.slice(0, index),
                target.value,
                ...prevOtp.slice(index + 1),
            // eslint-disable-next-line no-undef
            ], () => handleCheck());
            if (index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text");
        if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
            return;
        }
        const digits = text.split("");
        setOtp(digits);
    };

    useEffect(() => {
        if(otp.every(digit => digit !== "" )){
            setCode(otp.join(""));
        }
        if (code != 0) {
            userApi.verifyEmail(code);
            nav("/login")
        }
    }, [otp])
    
    
    return (
        <div className="min-h-full h-screen grid grid-cols-2 gap-3 w-[90%] justify-center items-center">
            <Header />
            <div className="space-y-8 rounded-[5px] w-full flex flex-col items-center sm:justify-center flex-1 shadow-lg bg-[white]">
                <div className="mb-10">
                    <div className="flex justify-center">
                        <img
                            alt=""
                            className="h-[100px] w-[100px] rounded-full"
                            src="./light.png" />
                    </div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-10">
                        Vérification du code!
                    </h2>
                    <section className="bg-[white] py-10">
                        <div className="container">
                            <form id="otp-form" className="flex gap-2">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={handleInput}
                                        onKeyDown={handleKeyDown}
                                        onFocus={handleFocus}
                                        onPaste={handlePaste}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        className="shadow-xs flex w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
                                    />
                                ))}
                            </form>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    );
}
