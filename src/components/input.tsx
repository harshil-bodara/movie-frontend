"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import Buttons from "./button";
import { LuEye, LuEyeOff } from "react-icons/lu";

type InputProps = {
    type?: "email" | "password" | "checkbox" | "text" | "file" | "number";
    placeholder?: string;
    className?: string;
};

const InputBox = ({
    type,
    placeholder,
    className,
    ...props
}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="relative">
            <Input
                type={type === "password" ? (showPassword ? "text" : "password") : type}
                placeholder={placeholder}
                className={className}
                {...props}
            />
            {type === "password" &&
                <Buttons
                    className="!absolute !right-0 !top-0 !h-full !p-0 bg-transparent min-w-[45px]"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? (
                        <LuEyeOff className="h-5 w-5" />
                    ) : (
                        <LuEye className="h-5 w-5" />
                    )}
                </Buttons>
            }
        </div>
    );
};

export default InputBox;
