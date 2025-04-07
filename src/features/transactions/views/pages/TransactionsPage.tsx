import DefaultLayout from "@/components/layout/DefaultLayout";
import BalanceCard from "@/components/BalanceCard";
import { useAuth } from "@/context/AuthContext";
import { Plus } from "lucide-react";
import {
  TransactionsResponse,
  TransactionResponse,
} from "../../data/TransactionResponse";
import { useState } from "react";
import NoTransactionsImage from "@/assets/images/no_transaction.svg";
import useResponse from "@/services/useResponse";
import { useEffect } from "react";
import TransactionsApiService from "../../services/TransactionsApiService";
import ShowToast from "@/components/ShowToast";
import TransactionTile from "../components/TransactionTile";
import DepositDrawer from "../components/DepositDrawer";
import { useModal } from "@/context/ModalContext";

const TransactionsLoadingSkeleton = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div
        className={`bg-gray-300/90 p-6 w-full h-[120px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-6 w-full h-[120px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-6 w-full h-[120px] rounded-md animate-pulse`}
      ></div>
      <div
        className={`bg-gray-300/90 p-6 w-full h-[120px] rounded-md animate-pulse`}
      ></div>
    </div>
  );
};

export default function TransactionsPage() {
  const { userDetail } = useAuth();
  const [transactions, setTransactions] = useState<TransactionResponse[]>([]);
  const transactionsResponse = useResponse<TransactionsResponse>();
  const transactionApiService = new TransactionsApiService();
  const { showModal } = useModal();

  const getTransactions = () => {
    transactionsResponse.handler(
      () => transactionApiService.getAllTransactions(),
      {
        success(data) {
          setTransactions(data.content);
        },
        error(errorMessage) {
          ShowToast({ type: "error", message: errorMessage });
        },
      }
    );
  };

  const showDepositDrawer = () => {
    showModal({ isCustom: true, modal: <DepositDrawer /> });
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <DefaultLayout>
      <div className="w-full flex flex-col gap-5 px-5">
        <BalanceCard user={userDetail!} />
        <div className="flex justify-between items-center w-full">
          <p className="text-lg text-textPrimary font-bold">Transactions</p>
          <button
            onClick={showDepositDrawer}
            className="text-primary border border-primary flex gap-1 items-center rounded-full px-3  "
          >
            <Plus size={14} />
            Deposit
          </button>
        </div>
        {transactions.length == 0 && !transactionsResponse.loading && (
          <div className="w-full h-screen flex flex-col gap-3 justify-start pt-20 items-center">
            <img className="h-[200px] w-[200px]" src={NoTransactionsImage} />
            <p className="text-lg font-bold text-textSecondary">
              No data found.
            </p>
          </div>
        )}
        {transactionsResponse.response?.success && transactions.length != 0 && (
          <div className="flex w-full flex-col gap-3">
            {transactions.map((transaction, index) => {
              return <TransactionTile transaction={transaction} key={index} />;
            })}
          </div>
        )}
        {transactionsResponse.loading && <TransactionsLoadingSkeleton />}
      </div>
    </DefaultLayout>
  );
}
