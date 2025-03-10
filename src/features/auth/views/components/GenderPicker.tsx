import { useState } from "react";

interface Props {
  onSelect: (gender: string) => void;
  label: string;
  errorMessage?: string;
}

export default function GenderPicker({ label, errorMessage, onSelect }: Props) {
  const [selectedGender, setSelectedGender] = useState<string>();

  const handleClick = (gender: string) => {
    setSelectedGender(gender);
    onSelect(gender);
  };

  return (
    <div>
      <div className="flex items-center">
        <div className="w-full grid grid-cols-1">
          {label !== undefined && (
            <label className="text-textPrimary font-semibold mb-1.5 text-">
              {label}
            </label>
          )}
          <div className="w-full flex rounded-md text-base font-normal bg-white  text-textPrimary outline -outline-offset-1 outline-gray-300">
            <span
              className={`w-1/2 h-full  border-r  border-gray-300 px-4 py-3  text-center rounded-l-md ${
                selectedGender == "MALE" && "text-white bg-[#2E2E2E]"
              }`}
              onClick={() => handleClick("MALE")}
            >
              Male
            </span>
            <span
              className={`w-1/2 h-full border-l  border-gray-300 px-4 py-3  text-center rounded-r-md ${
                selectedGender == "FEMALE" && "text-white bg-[#2E2E2E]"
              }`}
              onClick={() => handleClick("FEMALE")}
            >
              Female
            </span>
          </div>
        </div>
      </div>
      <p className="text-red-500 text-xs">{errorMessage}</p>
    </div>
  );
}
