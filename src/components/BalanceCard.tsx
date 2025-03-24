import { ClientResponse } from "@/features/auth/data/ClientResponse";
import { Eye, EyeClosed, Asterisk } from "lucide-react";
import { useState } from "react";

interface BalanceCardProps {
  user: ClientResponse;
}

function AsteriskRow() {
  return (
    <span className="flex items-center justify-center text-textPrimary">
      <Asterisk size={15} />
      <Asterisk size={15} />
      <Asterisk size={15} />
      <Asterisk size={15} />
    </span>
  );
}

export default function BalanceCard({ user }: BalanceCardProps) {
  const [isShowingTotalBalance, setIsShowingTotalBalance] =
    useState<boolean>(false);
  const [isShowingPayableBalance, setIsShowingPayableBalance] =
    useState<boolean>(false);

  return (
    <div className="w-full py-[16px] px-[16px] border rounded-md shadow-md bg-white border-[#D9EACF] overflow-hidden relative">
      <span className="absolute w-70 h-70 bg-white border bottom-[-40px] right-[-70px] border-primary rounded-full flex items-center justify-center">
        <span className="w-60 h-60 bg-[#F6FBF9]  rounded-full"></span>
      </span>
      <span className="flex w-full z-10 justify-between gap-5 items-center">
        <span className="flex flex-col z-10  items-start  w-1/2">
          <p className="text-textSecondary text-sm">Total Balance</p>
          <span className="font-extrabold text-lg flex items-center justify-between w-full text-textPrimary">
            <p className="flex gap-2">
              ETB{" "}
              {isShowingTotalBalance ? (
                user.client.totalBalance.toLocaleString()
              ) : (
                <AsteriskRow />
              )}
            </p>
            <button
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
        <span className="flex flex-col z-10 items-start  w-1/2">
          <p className="text-textSecondary text-sm">Payable Balance</p>
          <span className="font-extrabold text-lg flex items-center justify-between w-full gap-6 text-textPrimary">
            <p className="flex gap-2">
              ETB{" "}
              {isShowingPayableBalance ? (
                user.client.payableBalance.toLocaleString()
              ) : (
                <AsteriskRow />
              )}
            </p>
            <button
              onClick={() =>
                setIsShowingPayableBalance(!isShowingPayableBalance)
              }
            >
              {isShowingPayableBalance ? (
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
