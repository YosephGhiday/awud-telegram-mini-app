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
      <Asterisk size={15} />
    </span>
  );
}

export default function BalanceCard({ user }: BalanceCardProps) {
  const [isShowingTotalBalance, setIsShowingTotalBalance] =
    useState<boolean>(false);
  const [isShowingPayableBalance, setIsShowingPayableBalance] =
    useState<boolean>(false);
  const [isShowingSavingsBalance, setIsShowingSavingsBalance] =
    useState<boolean>(false);

  console.log(user);

  return (
    <div className="w-full py-[12px] px-[16px] border rounded-md shadow-md border-[#D9EACF] overflow-hidden relative">
      <span className="p-30 z-10 bg-[#F6FBF9] absolute bottom-[-20px] right-[-50px] rounded-full"></span>
      <span className="z-20 flex gap-3 flex-col">
        <span className="flex w-full justify-between gap-5 items-center">
          <span className="flex flex-col z-20 items-start  w-1/2">
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
          <span className="flex flex-col z-20 items-start  w-1/2">
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
        <hr className="z-20 text-[#D9EACF]" />
        <span className="flex w-full justify-between gap-2 z-20 items-center">
          <p className="text-textSecondary w-1/2 text-sm">Savings Balance</p>
          <span className="font-extrabold w-1/2 text-lg flex items-center justify-between text-textPrimary">
            <p className="flex gap-2">
              ETB{" "}
              {isShowingSavingsBalance ? (
                user.client.payableBalance.toLocaleString()
              ) : (
                <AsteriskRow />
              )}
            </p>
            <button
              onClick={() =>
                setIsShowingSavingsBalance(!isShowingSavingsBalance)
              }
            >
              {isShowingSavingsBalance ? (
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
