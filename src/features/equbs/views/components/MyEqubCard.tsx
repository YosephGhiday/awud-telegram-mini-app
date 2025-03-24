import { EqubResponse } from "../../data/EqubResponse";
import Countdown from "react-countdown";

interface MyEqubCardProps {
  equb: EqubResponse;
}

export default function MyEqubCard({ equb }: MyEqubCardProps) {
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
      <span className="flex flex-col w-full">
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
        <span className="w-full p-2 mt-2 flex items-center justify-center gap-2 rounded-md bg-[#F6FBF9]">
          <p className="text-textPrimary font-bold text-[10px]">Next Draw</p>
          <span className="p-[1px] h-full bg-textPrimary"></span>
          <p className="text-textPrimary font-bold text-[10px]">
            <Countdown
              renderer={renderer}
              date={
                equb.equbPaymentSchedule[equb.equbPaymentSchedule.length - 1]
                  .penaltyStartDate
              }
            />
          </p>
        </span>
      </span>
    </div>
  );
}
