import { EqubResponse } from "../../data/EqubResponse";
import { Users } from "lucide-react";
import { format } from "date-fns";

interface DiscoverEqubsCardProps {
  equb: EqubResponse;
}

export default function DiscoverEqubsCard({ equb }: DiscoverEqubsCardProps) {
  const formatString = (string: string) => {
    const firstLetter = string[0];
    const restOfTheString = string.slice(1, string.length);
    const formattedString =
      firstLetter.toLocaleUpperCase() + restOfTheString.toLocaleLowerCase();
    return formattedString;
  };

  return (
    <div className="bg-white p-[16px] rounded-sm shadow-sm flex flex-col gap-1 items-start">
      <span className="flex justify-between w-full items-center">
        <span className="flex gap-1 flex-col items-start">
          <p className="text-textPrimary font-bold ">{equb.name}</p>
          <p className="text-sm text-textSecondary">{equb.round} ETB</p>
        </span>
        <span className="flex gap-1 flex-col items-end">
          <p className="text-textPrimary text-sm">
            {formatString(equb.equbProduct.equbType)}
          </p>
          <span className="flex gap-1 items-center text-sm text-textSecondary">
            <p>{equb.equbProduct.numberOfMembers}</p>
            <Users size={13} />
          </span>
        </span>
      </span>
      <span className="flex justify-between w-full items-center">
        <p className="text-textPrimary text-xs border border-textSecondary rounded-lg   font-bold p-1">
          {equb.prize.toLocaleString()} ETB
        </p>
        <span className="text-sm flex gap-0.5 items-center justify-end text-textPrimary">
          <p className="text-primary font-bold">•</p>
          <p>{format(equb.startDate, "LLL dd")}</p>
        </span>
      </span>
    </div>
  );
}
