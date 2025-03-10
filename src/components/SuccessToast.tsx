import { CircleCheckBig } from "lucide-react";

interface Props {
  message: string;
}

export default function SuccessToast({ message }: Props) {
  return (
    <div className="w-full h-full px-5 gap-3 py-5 bg-primary rounded-l-md border-r-8 border-TextPrimary flex items-center justify-center">
      <span className="bg-[#F6FBF9] rounded-full p-3 text-primary">
        <CircleCheckBig size={30} />
      </span>
      <span className="w-3/4 text-white flex flex-col justify-start">
        <p className="text-md">{message}</p>
      </span>
    </div>
  );
}
