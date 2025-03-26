import React, { forwardRef } from "react";
import InputLayout from "./InputLayout";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorMessage?: string;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
  options: { value: string; label: string }[];
  isLoading?: boolean;
}

const InputSelect: React.ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectProps
> = (
  { label, errorMessage, suffixComponent, isLoading, options, ...rest },
  ref
) => {
  return (
    <InputLayout
      errorMessage={errorMessage}
      label={label}
      prefixComponent={suffixComponent}
      suffixComponent={suffixComponent}
    >
      <div className="relative">
        {isLoading && (
          <div className="absolute bg-gray-100/50 w-full h-full z-1 t-0 r-0 flex items-center justify-center">
            <div
              className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-textPrimary rounded-full"
              aria-label="loading"
            ></div>
          </div>
        )}

        <select
          disabled={isLoading}
          {...rest}
          ref={ref}
          className="block w-full appearance-none rounded-md text-base font-normal bg-white px-3 py-2 text-textPrimary outline outline-2 -outline-offset-1 outline-gray-300 placeholder:text-xs placeholder:font-normal focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-[13px]/6"
        >
          <option value="" className="text-textSecondary font-semibold">
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDown className="w-4 h-4 text-textSecondary" />
        </div>
      </div>
    </InputLayout>
  );
};

const ForwardedSelect = forwardRef(InputSelect);

export { ForwardedSelect as InputSelect };
