import { SavingsPlan } from "../../data/enums";
import { Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NewSavingCardProps {
  plan: SavingsPlan;
}

export default function NewSavingCard({ plan }: NewSavingCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/awud-telegram-mini-app/join-savings/${plan.category}`)
      }
      className="bg-white mx-w-[200px] rounded-md shadow-md p-2 gap-1 flex flex-col"
    >
      <Wallet className="w-10 h-10 p-2.5 rounded-full  text-textPrimary bg-gray-100" />
      <p className="text-textPrimary font-bold">{plan.category}</p>
      <p className="text-sm text-textSecondary">{plan.description}</p>
    </div>
  );
}
