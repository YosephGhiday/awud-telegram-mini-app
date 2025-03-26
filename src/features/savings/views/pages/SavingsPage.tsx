import DefaultLayout from "@/components/layout/DefaultLayout";
import SavingsBalanceCard from "../components/SavingsBalanceCard";
import { useEffect, useState } from "react";
import { Saving } from "../../data/interface";
import { SavingsResponse } from "../../data/SavingsResponse";
import useResponse from "@/services/useResponse";
import SavingsApi from "../../services/SavingsApiService";
import ShowToast from "@/components/ShowToast";
import CurrentSavingsSection from "../components/CurrentSavingsSection";
import NewSavingsSection from "../components/NewSavingsSection";

export default function SavingsPage() {
  const [mySavings, setMySavings] = useState<Saving[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const savingsResponse = useResponse<SavingsResponse>();
  const savingsApi = new SavingsApi();
  const [selectedTab, setSelectedTab] = useState<string>("CURRENT");

  const getMySavings = async () => {
    savingsResponse.handler(() => savingsApi.getMySavings(), {
      success(data) {
        setBalance(Number(data.balance));
        setMySavings(data.savings);
      },
      error(errorMessage) {
        ShowToast({ type: "error", message: errorMessage });
      },
    });
  };

  useEffect(() => {
    getMySavings();
  }, []);

  return (
    <DefaultLayout>
      <div className="w-full flex flex-col gap-5 px-5">
        <SavingsBalanceCard
          loading={
            savingsResponse.loading && savingsResponse.response?.success!
          }
          balance={balance}
        />
        <div className="flex mt-5 w-full justify-around">
          <span
            onClick={() => {
              setSelectedTab("CURRENT");
            }}
            className={`px-6 py-2  ${
              selectedTab == "CURRENT"
                ? "bg-primary text-white"
                : " text-textSecondary"
            }`}
          >
            Current Savings
          </span>

          <span
            onClick={() => {
              setSelectedTab("NEW");
            }}
            className={`px-6 py-2  ${
              selectedTab == "NEW"
                ? "bg-primary text-white"
                : " text-textSecondary"
            }`}
          >
            New Savings
          </span>
        </div>
        {selectedTab == "CURRENT" ? (
          <CurrentSavingsSection
            loading={savingsResponse.loading}
            savings={mySavings}
          />
        ) : (
          <NewSavingsSection />
        )}
      </div>
    </DefaultLayout>
  );
}
