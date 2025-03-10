import React from "react";

interface InputProps {
  label?: string;
  errorMessage?: string;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
  children?: React.ReactNode;
}

const InputLayout = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, suffixComponent, children }, ref) => {
    return (
      <div>
        <div className="flex items-center">
          <div className="w-full grid grid-cols-1">
            {label !== undefined && (
              <label className="text-textPrimary font-semibold mb-1.5 text-">
                {label}
              </label>
            )}
            <div className="relative">
              <div ref={ref}>{children}</div>

              {suffixComponent != undefined && (
                <div className="absolute right-0 bg-gray-200 h-full rounded-r-lg w-10 flex items-center justify-center">
                  <div className="w-4 h-4">{suffixComponent}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="text-red-500 text-xs">{errorMessage}</p>
      </div>
    );
  }
);

export default InputLayout;
