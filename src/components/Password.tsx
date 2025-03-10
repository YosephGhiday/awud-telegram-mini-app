import React, { forwardRef, useState } from "react";
import InputLayout from "@/components/InputLayout";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const PasswordInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ label, errorMessage, ...rest }, ref) => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <InputLayout label={label} errorMessage={errorMessage}>
      <div className="relative flex items-center w-full rounded-md text-base  text-textPrimary font-normal bg-white px-3 py-2 h-10 text-textPrimary  outline-2 -outline-offset-1 outline-gray-300 placeholder:text-xs placeholder:font-normal focus-within:outline-primary sm:text-[13px]/6">
        {/* Input Field */}
        <input
          type={viewPassword ? "text" : "password"}
          className="w-full bg-transparent border-none outline-none focus:outline-none"
          ref={ref}
          {...rest}
        />
        <span
          onClick={() => setViewPassword(!viewPassword)}
          className="absolute right-3 flex items-center justify-center cursor-pointer"
        >
          {viewPassword ? (
            <EyeOff className="h-4 w-4 text-textSecondary" />
          ) : (
            <Eye className="h-4 w-4 text-textLightSecondary" />
          )}
        </span>
      </div>
    </InputLayout>
  );
};

const ForwardedInput = forwardRef(PasswordInput);

export { ForwardedInput as PasswordInput };
