import { EqubApiService } from "@/features/equbs/services/EqubApiService";
import { EqubResponse } from "@/features/equbs/data/EqubResponse";
import ShowToast from "@/components/ShowToast";
import { useState, useEffect } from "react";
import useResponse from "@/services/useResponse";
import MyEqubDetailCard from "./MyEqubsDetailCard";
import { Link } from "react-router-dom";

const MyEqubsLoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-2 w-full gap-4">
      <div
        className={`bg-gray-300/90 p-6 w-full h-[155px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-6 w-full h-[155px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-6 w-full h-[155px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-6 w-full h-[155px] rounded-md animate-pulse`}
      ></div>
    </div>
  );
};

export default function DetailedMyEqubsSection() {
  const [equbs, setEqubs] = useState<EqubResponse[]>([]);
  const equbApiService = new EqubApiService();
  const equbsResponse = useResponse();

  const getMyEqubs = () => {
    equbsResponse.handler(() => equbApiService.getMyEqubs(), {
      success(data) {
        setEqubs(data);
      },
      error(errorMessage) {
        ShowToast({ type: "error", message: errorMessage });
      },
    });
  };

  useEffect(() => {
    getMyEqubs();
  }, []);

  return (
    <div className="w-full flex flex-col gap-2 items-start">
      <span className="w-full flex items-center justify-between">
        <p className="text-lg text-textPrimary font-bold">My Equbs</p>
        <Link
          className="text-textSecondary underline"
          to="/awud-telegram-mini-app/my-equbs"
        >
          See all
        </Link>
      </span>
      {equbsResponse.loading || !equbsResponse.response?.success ? (
        <MyEqubsLoadingSkeleton />
      ) : equbs.length == 0 ? (
        <div className="w-full flex p-10 items-center justify-center">
          <p className="text-md text-textSecondary">
            You haven't joined any equbs yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 w-full gap-4">
          {equbs.slice(0, 4).map((equb, index) => (
            <MyEqubDetailCard key={index} equb={equb} />
          ))}
        </div>
      )}
    </div>
  );
}
