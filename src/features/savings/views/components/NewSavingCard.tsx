import { SavingsPlan } from "../../data/enums";
import { Wallet } from "lucide-react";

interface NewSavingCardProps {
  plan: SavingsPlan;
}

export default function NewSavingCard({ plan }: NewSavingCardProps) {
  return (
    <div className="bg-white mx-w-[200px] rounded-md shadow-md p-2 gap-1 flex flex-col">
      <Wallet className="w-10 h-10 p-2.5 rounded-full  text-textPrimary bg-gray-100" />
      <p className="text-textPrimary font-bold">{plan.category}</p>
      <p className="text-sm text-textSecondary">{plan.description}</p>
    </div>
  );
}
