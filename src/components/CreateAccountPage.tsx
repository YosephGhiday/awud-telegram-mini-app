import LoginImage from "@/assets/images/LoginImage.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CreateAccountPage() {
  return (
    <div className="w-full h-screen bg-white max-w-[500px] flex flex-col  gap-2">
      <div className="w-full h-1/2 bg-[#2E2E2E] flex flex-col items-start justify-end">
        <img className="mx-auto" src={LoginImage} />
        <span className="px-10 py-5 flex flex-col">
          <p className="text-white text-[30px] font-bold">Create Account</p>
          <p className="text-gray-300 text-sm">
            Register & get started with Awud.
          </p>
        </span>
      </div>
      <div className="p-10 flex flex-col justify-between h-1/2 items-end">
        <p className="text-[#2E2E2E] w-full">
          Awud is your digital safety net, offering instant community support
          for life’s unexpected challenges. Awud is your digital safety net,
          offering instant community support for life’s unexpected challenges.{" "}
        </p>
        <Link
          to="/awud-telegram-mini-app/sign-up"
          className="bg-primary text-lg text-white rounded-md p-3 flex gap-2 items-center"
        >
          Continue
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
