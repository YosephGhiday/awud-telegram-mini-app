import { CircleAlert } from "lucide-react";

interface Props {
  message: string;
}

export default function WarningToast({ message }: Props) {
  return (
    <div className="w-full h-full px-5 gap-3 py-5 bg-warning rounded-l-md border-r-8 border-warningDark flex items-center justify-center">
      <span className="bg-[#FFF1E4] rounded-full p-3 text-warning">
        <CircleAlert size={30} />
      </span>
      <span className="w-3/4 text-white flex flex-col justify-start">
        <p className="text-md">{message}</p>
      </span>
    </div>
  );
}
