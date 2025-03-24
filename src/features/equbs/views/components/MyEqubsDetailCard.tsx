import { EqubResponse } from "../../data/EqubResponse";
import Countdown from "react-countdown";
import { format } from "date-fns";
import { TrendingUp } from "lucide-react";

interface MyEqubCardDetailProps {
  equb: EqubResponse;
}

export default function MyEqubDetailCard({ equb }: MyEqubCardDetailProps) {
  const formatString = (string: string) => {
    const firstLetter = string[0];
    const restOfTheString = string.slice(1, string.length);
    const formattedString =
      firstLetter.toLocaleUpperCase() + restOfTheString.toLocaleLowerCase();
    return formattedString;
  };

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return;
    } else {
      if (days > 0) {
        return `${days} Days`;
      }
      if (hours > 0) {
        return `${hours} : ${minutes}`;
      }
      if (minutes > 0) {
        return `${minutes} : ${seconds}`;
      }
      if (seconds > 0) {
        return `${seconds} seconds`;
      }
    }
  };

  return (
    <div className="bg-primary text-white p-[12px] rounded-sm shadow-sm flex flex-col gap-1 items-start">
      <span className="flex gap-1 items-center w-full justify-between">
        <p>{equb.name}</p>

        <p className=" text-xs font-bold">
          ETB {Math.ceil(Number(equb.prize)).toLocaleString()}
        </p>
      </span>
      <p className="text-xs text-gray-100">
        {equb.equbProduct.amount.toLocaleString()} ETB /{" "}
        {formatString(equb.equbProduct.equbType)}
      </p>
      <hr className="w-full text-gray-100" />
      <span className="w-full flex items-center justify-between">
        <span className="flex flex-col gap-1">
          <p className="text-xs">Next Draw</p>
          <p className="text-xs font-bold">
            <Countdown
              renderer={renderer}
              date={
                equb.equbPaymentSchedule[equb.equbPaymentSchedule.length - 1]
                  .penaltyStartDate
              }
            />
          </p>
        </span>
        <span className="flex flex-col gap-1">
          <p className="text-xs">Finishes</p>
          <p className="text-xs font-bold">{format(equb.endDate, "LLL dd")}</p>
        </span>
      </span>
      <hr className="w-full text-gray-100" />
      <button className="w-full text-textPrimary text-xs p-1 mt-2 flex items-center justify-center gap-2 rounded-full bg-[#F6FBF9]">
        <TrendingUp />
        <p>Payments</p>
      </button>
    </div>
  );
}
