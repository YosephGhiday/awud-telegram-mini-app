import { Saving } from "../../data/interface";
import { Wallet } from "lucide-react";
import ProgressIndicator from "@/components/ProgressIndicator";
import { useNavigate } from "react-router-dom";

interface CurrentSavingCardProps {
  saving: Saving;
}

export default function CurrentSavingCard({ saving }: CurrentSavingCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/awud-telegram-mini-app/saving/${saving.id}`)}
      className="bg-white rounded-md shadow-md p-2 gap-1 flex flex-col"
    >
      <Wallet className="w-10 h-10 p-2.5 rounded-full  text-textPrimary bg-gray-100" />
      <p className="text-textPrimary font-bold mb-5">{saving.name}</p>
      <ProgressIndicator
        progress={
          ((saving.totalDeposit - saving.totalWithdraw) /
            saving.product.maximumBalance) *
          100
        }
      />
      <span className="w-full text-textSecondary text-sm my-1 flex justify-between items-center">
        <p>{`${(
          saving.totalDeposit - saving.totalWithdraw
        ).toLocaleString()} of ${saving.product.maximumBalance.toLocaleString()}`}</p>
        <p>ETB</p>
      </span>
    </div>
  );
}
