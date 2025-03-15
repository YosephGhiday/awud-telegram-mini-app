import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SuccessfullyChangedPasswordPage() {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-white max-w-[500px] flex flex-col items-center justify-between">
      <div className="h-2/3 gap-4 flex flex-col justify-center items-center">
        <div className="p-16 rounded-full bg-[#D2E9C4]">
          <div className="rounded-full p-5 bg-[#384F2A]">
            <Check className="text-[#D2E9C4]" size={70} />
          </div>
        </div>
        <p className="text-[#384F2A] text-2xl font-bold w-2/3 text-center mx-auto">
          Your Pin Is Changed Successfully!
        </p>
      </div>
      <div className="w-full flex justify-end py-10">
        <Link
          to="/awud-telegram-mini-app/login"
          className="bg-primary text-lg text-white rounded-md p-3 mx-10 flex gap-2 items-center"
        >
          Continue
          <ArrowRight size={25} />
        </Link>
      </div>
    </div>
  );
}
