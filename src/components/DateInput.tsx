import React, { forwardRef } from "react";
import InputLayout from "@/components/InputLayout";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
}

const DateInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (
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
        type="date"
        ref={ref}
        className="block w-full rounded-md text-base font-normal bg-white px-4 py-3 text-textPrimary outline -outline-offset-1 outline-gray-300 placeholder:text-xs placeholder:font-normal focus:outline-2  focus:-outline-offset-2 focus:outline-primary sm:text-[13px]/6"
      />
    </InputLayout>
  );
};

const ForwardedInput = forwardRef(DateInput);

export { ForwardedInput as DateInput };
