import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SettingsTileProps {
  icon: React.ReactNode;
  text: string;
  page: string;
}

export default function SettingsTile({ icon, text, page }: SettingsTileProps) {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator(page);
  };

  return (
    <span
      onClick={handleClick}
      className="flex justify-between items-center shadow-sm bg-white rounded-md py-[20px] px-[14px] w-full"
    >
      <span className="flex items-center gap-4">
        <span className="p-[5px] bg-gray-100 rounded-sm">{icon}</span>
        <p className="text-textPrimary">{text}</p>
      </span>
      <ChevronRight className="text-textSecondary" size={25} />
    </span>
  );
}
