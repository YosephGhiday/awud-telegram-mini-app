import GetStartedImage from "../assets/images/GetStartedImage.png";
import { ArrowRight } from "lucide-react";

export default function GetStartedPage() {
  return (
    <div className="w-full h-screen max-w-[500px] flex flex-col px-10 py-20 justify-between items-start gap-2">
      <span className="flex flex-col justify-start items-center">
        <img
          alt="get Started image"
          src={GetStartedImage}
          className="h-[280px] max-w-[300px]"
        />
        <h1 className="font-bold text-[35px] text-start text-[#2E2E2E] mt-10">
          Join together and unlock your community's financial power!
        </h1>
        <p className="text-[#2E2E2E]">
          Awud is your digital safety net, offering instant community support
          for life’s unexpected challenges.{" "}
        </p>
      </span>

      <button className="bg-[#85BB65] text-lg text-white rounded-md p-3 flex gap-2 items-center">
        Get Started
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
