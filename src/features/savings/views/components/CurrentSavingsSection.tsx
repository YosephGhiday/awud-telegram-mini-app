import { Saving } from "../../data/interface";
import CurrentSavingCard from "./CurrentSavingCard";

const CurrentSavingsLoadingSkeleton = () => {
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

interface CurrentSavingsSectionProps {
  savings: Saving[];
  loading: boolean;
}

export default function CurrentSavingsSection({
  savings,
  loading,
}: CurrentSavingsSectionProps) {
  return (
    <div className="w-full">
      {loading ? (
        <CurrentSavingsLoadingSkeleton />
      ) : savings.length == 0 ? (
        <div className="w-full text-md p-4 text-center text-textSecondary">
          You have no current savings.
        </div>
      ) : (
        <div className="w-full gap-2 grid grid-cols-2">
          {savings.map((saving, index) => (
            <CurrentSavingCard key={index} saving={saving} />
          ))}
        </div>
      )}
    </div>
  );
}
