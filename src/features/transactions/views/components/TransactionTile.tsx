import { TransactionResponse } from "../../data/TransactionResponse";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { formatDate } from "date-fns";

interface TransactionTileProps {
  transaction: TransactionResponse;
}

export default function TransactionTIle({ transaction }: TransactionTileProps) {
  return (
    <div className="p-4 mb-3 bg-white rounded-lg shadow-sm flex justify-between items-center">
      <div className="flex gap-3 items-center">
        {transaction.transactionType == "DEPOSIT" ? (
          <CircleArrowDown className="text-primary" />
        ) : (
          <CircleArrowUp className="text-error" />
        )}

        <div>
          <div className="text-sm text-textPrimary font-normal">
            {transaction.transactionType}
          </div>

          <div className="text-xs text-textSecondary font-normal mt-1">
            {formatDate(transaction.date, "dd/MM/yyyy")}
          </div>
        </div>
      </div>
      <div>ETB {transaction.amount.toLocaleString()}</div>
    </div>
  );
}
