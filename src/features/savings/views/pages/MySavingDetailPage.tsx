import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SavingsApi from "../../services/SavingsApiService";
import useResponse from "@/services/useResponse";
import { Saving } from "../../data/interface";
import { useState } from "react";
import ShowToast from "@/components/ShowToast";
import { useEffect } from "react";
import { setSpinner } from "@/context/SpinnerContext";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Wallet } from "lucide-react";
import { SavingTransaction } from "../../data/interface";
import SavingTransactionTIle from "../components/SavingTransactionTile";

export default function MySavingDetailPage() {
  const { id } = useParams();
  const navigator = useNavigate();
  const [saving, setSaving] = useState<Saving | null>(null);
  const savingApiService = new SavingsApi();
  const savingResponse = useResponse<Saving>();
  const savingTransactionResponse = useResponse<SavingTransaction[]>();
  const [transactions, setTransactions] = useState<SavingTransaction[]>([]);

  const getSaving = () => {
    setSpinner(true);
    savingResponse.handler(() => savingApiService.getOneSaving(id!), {
      success(data) {
        setSpinner(false);
        setSaving(data);
      },
      error(errorMessage) {
        setSpinner(false);
        ShowToast({ type: "error", message: errorMessage });
      },
    });
  };

  const getSavingTransactions = () => {
    savingTransactionResponse.handler(
      () => savingApiService.getSavingTransactions(id!),
      {
        success(data) {
          setTransactions(data);
        },
        error(errorMessage) {
          ShowToast({ type: "error", message: errorMessage });
        },
      }
    );
  };

  const getOrdinal = (num: number): string => {
    switch (num % 10) {
      case 1:
        return `${num}st`;
      case 2:
        return `${num}nd`;
      case 3:
        return `${num}rd`;
      default:
        return `${num}th`;
    }
  };

  const countSavingsPaidTimes = (saving: Saving): string => {
    const totalPaidTimes = Number(
      (saving.totalDeposit / saving.product.minimumBalance).toFixed(0)
    );
    return getOrdinal(totalPaidTimes);
  };

  const convertToMonthlyPeriod = (savingPeriod: string): string => {
    let period: string = "";
    switch (savingPeriod) {
      case "MONTHLY":
        period = "1 month";
        break;
      case "QUARTERLY":
        period = "3 months";
        break;
      case "HALF_YEARLY":
        period = "6 months";
        break;
      case "YEARLY":
        period = "12 months";
        break;
      case "FIVE_YEARS":
        period = "60 months";
        break;
      case "TEN_YEARS":
        period = "120 months";
        break;
      default:
        break;
    }
    return period;
  };

  const totalSavingTime = (saving: Saving): string => {
    const monthlyPeriod = convertToMonthlyPeriod(saving.savingPeriod);
    const parts = monthlyPeriod.split(" ");
    const numValue = Number(parts[0]);

    if (saving.product.repayedEvery == "DAILY") {
      return `${numValue * 30} Days`;
    }

    if (saving.product.repayedEvery == "WEEKLY") {
      return `${numValue * 4} Weeks`;
    }

    if (saving.product.repayedEvery == "MONTHLY") {
      return `${numValue} Months`;
    }

    return "";
  };

  useEffect(() => {
    getSaving();
    getSavingTransactions();
  }, []);

  return (
    <div className="w-full hide-scrollbar h-screen overflow-y-scroll bg-[#F9F9F9] max-w-[500px] flex flex-col pt-25 gap-5 justify-start items-center">
      <span className="w-full bg-white px-10 py-5 fixed top-0 right-0  flex text-textPrimary items-center justify-start gap-4">
        <ArrowLeft size={25} onClick={() => navigator(-1)} />
        <p className="text-lg font-bold">Saving Details</p>
      </span>
      {!savingResponse.loading && saving != null && (
        <div className="px-5 w-full ">
          <div className="p-5 w-full flex flex-col gap-4 bg-white rounded-lg">
            <div className="flex w-full items-center justify-between">
              <span className="flex items-center gap-3">
                <div className="rounded-full p-2 text-gray-500 bg-gray-100">
                  <Wallet size={25} />
                </div>
                <p className="text-textPrimary text-md font-bold">
                  {saving.name}
                </p>
              </span>
              <button className="text-error border border-error text-sm rounded-full px-3 py-2 ">
                Withdraw
              </button>
            </div>
            <div className="w-full flex items-center gap-2 rounded-md bg-gray-100 p-4">
              <div className="w-30 h-30">
                <CircularProgressbarWithChildren
                  value={
                    ((saving.totalDeposit - saving.totalWithdraw) /
                      saving.product.maximumBalance) *
                    100
                  }
                  className=""
                  styles={{
                    path: {
                      stroke: "#85bb65",
                      strokeLinecap: "round",
                    },
                    trail: {
                      stroke: "#D9EACF",
                    },
                  }}
                >
                  <div className="flex flex-col items-center justify-center text-primary">
                    <p className="text-md font-bold">
                      {(
                        saving.totalDeposit - saving.totalWithdraw
                      ).toLocaleString()}
                    </p>
                    <hr className="w-full" />
                    <p className="text-xs">
                      {countSavingsPaidTimes(saving!)} /{" "}
                      {totalSavingTime(saving)}
                    </p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="flex w-2/3 flex-col gap-1">
                <span className="text-sm text-textPrimary  w-full flex items-center justify-between">
                  <p>• Saved</p>
                  <p className="font-bold">
                    ETB{" "}
                    {(
                      saving.totalDeposit - saving.totalWithdraw
                    ).toLocaleString()}
                  </p>
                </span>
                <span className="text-sm text-textPrimary  w-full flex items-center justify-between">
                  <p>• Saving Goal</p>
                  <p className="font-bold">
                    ETB {saving.product.maximumBalance.toLocaleString()}
                  </p>
                </span>
              </div>
            </div>
            <p className="text-lg text-textSecondary font-bold">Saving</p>
            {transactions.length == 0 && !savingTransactionResponse.loading && (
              <div className="w-full h-screen flex flex-col gap-3 justify-start pt-20 items-center">
                <p className="text-lg font-bold text-textSecondary">
                  No data found.
                </p>
              </div>
            )}
            {savingTransactionResponse.response?.success &&
              transactions.length != 0 && (
                <div className="flex w-full flex-col gap-3">
                  {transactions.map((transaction, index) => {
                    return (
                      <SavingTransactionTIle
                        transaction={transaction}
                        key={index}
                      />
                    );
                  })}
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
}
