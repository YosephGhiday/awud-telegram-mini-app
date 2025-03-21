import DiscoverEqubTabs from "./DiscoverEqubTabs";
import { EqubApiService } from "@/features/equbs/services/EqubApiService";
import { EqubResponse } from "@/features/equbs/data/EqubResponse";
import ShowToast from "@/components/ShowToast";
import { useState, useEffect } from "react";
import useResponse from "@/services/useResponse";
import DiscoverEqubsCard from "./DiscoverEqubsCard";

const DiscoverEqubsLoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-2 w-full gap-4">
      <div
        className={`bg-gray-300/90 p-4 w-full h-[135px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-4 w-full h-[135px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-4 w-full h-[135px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-4 w-full h-[135px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-4 w-full h-[135px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-4 w-full h-[135px] rounded-md animate-pulse`}
      ></div>
    </div>
  );
};

export default function DiscoverEqubsSection() {
  const [equbs, setEqubs] = useState<EqubResponse[]>([]);
  const equbsResponse = useResponse<EqubResponse[]>();
  const equbApiService = new EqubApiService();

  const getFilteredEqubs = async (filter?: string) => {
    switch (filter) {
      case "DAILY":
        equbsResponse.handler(() => equbApiService.getDailyProducts(), {
          success(data) {
            setEqubs(data);
          },
          error(errorMessage) {
            ShowToast({ type: "error", message: errorMessage });
          },
        });
        break;
      case "MONTHLY":
        equbsResponse.handler(() => equbApiService.getMonthlyProducts(), {
          success(data) {
            setEqubs(data);
          },
          error(errorMessage) {
            ShowToast({ type: "error", message: errorMessage });
          },
        });
        break;
      case "WEEKLY":
        equbsResponse.handler(() => equbApiService.getWeeklyProducts(), {
          success(data) {
            setEqubs(data);
          },
          error(errorMessage) {
            ShowToast({ type: "error", message: errorMessage });
          },
        });
        break;
      default:
        equbsResponse.handler(() => equbApiService.getFeaturedEqubs(), {
          success(data) {
            setEqubs(data);
          },
          error(errorMessage) {
            ShowToast({ type: "error", message: errorMessage });
          },
        });
        break;
    }
  };

  useEffect(() => {
    getFilteredEqubs();
  }, []);

  return (
    <div className="w-full flex flex-col gap-2 items-start">
      <p className="text-lg text-textPrimary font-bold">Discover Equbs</p>
      <DiscoverEqubTabs onSelect={getFilteredEqubs} />
      {equbsResponse.loading ? (
        <DiscoverEqubsLoadingSkeleton />
      ) : (
        <div className="grid grid-cols-2 w-full gap-4">
          {equbs.map((equb, index) => (
            <DiscoverEqubsCard key={index} equb={equb} />
          ))}
        </div>
      )}
    </div>
  );
}
