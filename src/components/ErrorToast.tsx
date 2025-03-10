import { CircleX } from "lucide-react";

interface Props {
  message: string;
}

export default function ErrorToast({ message }: Props) {
  return (
    <div className="w-full h-full px-5 gap-3 py-5 bg-error rounded-l-md border-r-8 border-errorDark flex items-center justify-center">
      <span className="bg-[#FFF6F6] rounded-full p-3 text-error">
        <CircleX size={30} />
      </span>
      <span className="w-3/4 text-white flex flex-col justify-start">
        <p className="text-md">{message}</p>
      </span>
    </div>
  );
}
