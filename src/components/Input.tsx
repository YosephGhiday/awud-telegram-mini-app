import React, { forwardRef } from "react";
import InputLayout from "./InputLayout";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, errorMessage, prefixComponent, suffixComponent, ...rest },
  ref
) => {
  return (
    <InputLayout
      label={label}
      errorMessage={errorMessage}
      prefixComponent={prefixComponent}
      suffixComponent={suffixComponent}
    >
      <input
        {...rest}
        ref={ref}
        className="block w-full rounded-md text-base font-normal bg-white px-4 py-3 text-[#374653] outline -outline-offset-1 outline-gray-300 placeholder:text-xs placeholder:font-normal focus:outline-2  focus:-outline-offset-2 focus:outline-[#85BB65] sm:text-[13px]/6"
      />
    </InputLayout>
  );
};

const ForwardedInput = forwardRef(Input);

export { ForwardedInput as Input };
