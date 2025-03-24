import { Eye, EyeClosed, Asterisk } from "lucide-react";
import { useState } from "react";

interface SavingsBalanceCardProps {
  balance: number;
  loading: boolean;
}

function AsteriskRow() {
  return (
    <span className="flex items-center justify-center text-textPrimary">
      <Asterisk size={15} />
      <Asterisk size={15} />
      <Asterisk size={15} />
      <Asterisk size={15} />
      <Asterisk size={15} />
    </span>
  );
}

export default function SavingsBalanceCard({
  balance,
  loading,
}: SavingsBalanceCardProps) {
  const [isShowingTotalBalance, setIsShowingTotalBalance] =
    useState<boolean>(false);

  return (
    <div className="w-full p-[20px] border rounded-md shadow-md bg-white border-[#D9EACF] overflow-hidden relative">
      <span className="absolute w-70 h-70 bg-[#F6FBF9]  bottom-[-40px] right-[-70px] rounded-full"></span>
      <span className="flex w-full z-10 justify-between gap-5 items-center">
        <span className="flex flex-col z-10  items-start  w-1/2">
          <p className="text-textSecondary text-sm">All Savings</p>
          <span className="font-extrabold text-lg flex items-center justify-between w-full text-textPrimary">
            <p className="flex gap-2">
              ETB{" "}
              {isShowingTotalBalance ? (
                balance.toLocaleString()
              ) : (
                <AsteriskRow />
              )}
            </p>
            <button
              disabled={loading}
              onClick={() => setIsShowingTotalBalance(!isShowingTotalBalance)}
            >
              {isShowingTotalBalance ? (
                <EyeClosed size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </span>
        </span>
      </span>
    </div>
  );
}
