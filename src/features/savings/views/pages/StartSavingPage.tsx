import { X, WalletCards } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useSavingContext } from "@/context/SavingContext";
import SavingsApi from "../../services/SavingsApiService";
import useResponse from "@/services/useResponse";
import ShowToast from "@/components/ShowToast";
import { setSpinner } from "@/context/SpinnerContext";

const savingsApi = new SavingsApi();

export default function StartSavingPage() {
  const navigator = useNavigate();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { newSaving } = useSavingContext();
  const addSavingResponse = useResponse();

  const addSaving = () => {
    setSpinner(true);
    addSavingResponse.handler(() => savingsApi.addSaving(newSaving), {
      success() {
        setSpinner(false);
        ShowToast({ type: "success", message: "Succesfully started saving" });
        navigator("/awud-telegram-mini-app/savings");
      },
      error(errorMessage) {
        setSpinner(false);
        ShowToast({ type: "error", message: errorMessage });
      },
    });
  };

  return (
    <div className="w-full hide-scrollbar h-screen overflow-y-scroll bg-[#F9F9F9] max-w-[500px] flex flex-col pt-25 gap-5 justify-start items-center">
      <span className="w-full bg-white px-10 py-5 fixed top-0 right-0  flex text-textPrimary">
        <X size={25} onClick={() => navigator(-1)} />
      </span>
      <div className="w-full pb-10 flex flex-col h-full justify-between items-center px-4">
        <div className="bg-white shadow-md w-full flex flex-col p-4 gap-2 rounded-md">
          <span className="flex justify-between items-center">
            <span className="flex gap-4 items-center">
              <WalletCards
                className={`w-14 h-14 p-3 rounded-full bg-primary text-white `}
              />
              <span>
                <p className="text-textPrimary font-bold">
                  {newSaving?.repayedEvery}
                </p>
                <p className="text-textSecondary">
                  {newSaving?.minimumBalance.toLocaleString()} ETB
                </p>
              </span>
            </span>
            <span className="flex flex-col">
              <p className="text-textSecondary">Planned</p>
              <p className="text-textSecondary">
                ETB {newSaving?.maximumBalance.toLocaleString()}
              </p>
            </span>
          </span>
          <hr className="w-full text-gray-200" />
          <span className="w-full flex flex-col gap-1">
            <span className="flex justify-between items-center">
              <p className="text-textPrimary font-bold">Service fee</p>
              <p className="text-textSecondary">ETB 0</p>
            </span>
            <span className="flex justify-between items-center">
              <p className="text-textPrimary font-bold">Total Amount</p>
              <p className="text-textSecondary">
                ETB {newSaving?.maximumBalance.toLocaleString()}
              </p>
            </span>
            <span className="flex justify-between items-center">
              <p className="text-textPrimary font-bold">Finished in</p>
              <p className="text-textSecondary">{newSaving?.savingPeriod}</p>
            </span>
            <span className="flex justify-between items-center">
              <p className="text-textPrimary font-bold">Total you wil get</p>
              <p className="text-textSecondary">
                ETB {newSaving?.maximumBalance.toLocaleString()}
              </p>
            </span>
          </span>
        </div>
        <span className="w-full gap-2 text-textPrimary flex flex-col">
          <span className="flex items-center justify-center gap-2">
            <input
              onChange={() => {
                setIsChecked(!isChecked);
              }}
              type="checkbox"
              className="h-4 w-4"
            />
            Accept the{" "}
            <Link
              to="/awud-telegram-mini-app/savings-rules-and-regulations"
              className="text-primary"
            >
              Rules and Regulations
            </Link>
          </span>
          <button
            disabled={!isChecked}
            onClick={addSaving}
            className="bg-primary text-lg text-white rounded-md p-3 w-full"
          >
            Start Saving
          </button>
        </span>
      </div>
    </div>
  );
}
