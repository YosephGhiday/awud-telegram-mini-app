import { Check } from "lucide-react";

interface SavingPlanCardProps {
  repaidEvery: string;
  periodicPayment: number;
  totalAmount: number;
  onSelect: () => void;
  isSelected: boolean;
}

export default function SavingPlanCard({
  repaidEvery,
  periodicPayment,
  totalAmount,
  isSelected,
  onSelect,
}: SavingPlanCardProps) {
  return (
    <div
      onClick={onSelect}
      className="bg-white mx-w-[200px] rounded-md shadow-md p-2 gap-1 flex flex-col"
    >
      <span className="justify-between flex item-center">
        <p className="text-sm text-textPrimary font-bold">{`${repaidEvery} of ${periodicPayment.toLocaleString()}`}</p>
        <Check
          className={`w-6 h-6 p-1 rounded-full ${
            isSelected ? "bg-primary" : " bg-gray-200"
          } text-white `}
        />
      </span>
      <p className="text-textPrimary">ETB {totalAmount.toLocaleString()}</p>
    </div>
  );
}
