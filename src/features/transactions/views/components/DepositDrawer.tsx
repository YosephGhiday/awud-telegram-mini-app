import { useModal } from "@/context/ModalContext";
import { X, Landmark, Check } from "lucide-react";
import TelebirrImage from "@/assets/images/banks/telebirr.png";
import MpessaImage from "@/assets/images/banks/mpesa.png";
import { useEffect, useState } from "react";
import DepositModal from "./DepositModal";
import { useAuth } from "@/context/AuthContext";

export default function DepositDrawer() {
  const { closeModal, showModal } = useModal();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "TELEBIRR" | "BANK" | "MPESSA" | null
  >(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useAuth();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleSubmit = () => {
    if (selectedPaymentMethod != null) {
      showModal({
        isCustom: true,
        modal: (
          <DepositModal
            paymentMethodCode={selectedPaymentMethod}
            account={user?.phoneNumber!}
          />
        ),
      });
    }
  };

  return (
    <div
      className={`w-full h-[full]  bg-white rounded-t-xl p-5 absolute bottom-0 right-0 transform ${
        !isOpen && "translate-y-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end">
        <X
          onClick={() => {
            setIsOpen(false);
            setTimeout(closeModal, 200);
          }}
          className="cursor-pointer w-5 h-5 text-textPrimary"
        />
      </div>
      <div className="h-full flex flex-col pb-10 justify-between">
        <div className="flex flex-col py-5 gap-2 w-full overflow-y-scroll">
          <div
            onClick={() => {
              setSelectedPaymentMethod("TELEBIRR");
            }}
            className="bg-white mx-w-[200px] border border-gray-300 rounded-lg p-5 gap-1 flex justify-between items-center"
          >
            <span className="gap-4 flex item-center">
              <img src={TelebirrImage} className="w-10 h-10" />
              <span className="flex flex-col items-start justify-start">
                <p className="text-sm text-textPrimary font-bold">Telebirr</p>
                <p className="text-sm text-textSecondary">
                  Pay using telebirr via ArifPay
                </p>
              </span>
            </span>
            <Check
              className={`w-6 h-6 p-1 rounded-full ${
                selectedPaymentMethod == "TELEBIRR"
                  ? "bg-primary"
                  : " bg-gray-200"
              } text-white `}
            />
          </div>
          <div
            onClick={() => {
              setSelectedPaymentMethod("MPESSA");
            }}
            className="bg-white mx-w-[200px] border border-gray-300 rounded-lg p-5 gap-1 flex justify-between items-center"
          >
            <span className="gap-4 flex item-center">
              <img src={MpessaImage} className="w-10 h-10" />
              <span className="flex flex-col items-start justify-start">
                <p className="text-sm text-textPrimary font-bold">Mpessa</p>
                <p className="text-sm text-textSecondary">Pay using Mpessa</p>
              </span>
            </span>
            <Check
              className={`w-6 h-6 p-1 rounded-full ${
                selectedPaymentMethod == "MPESSA"
                  ? "bg-primary"
                  : " bg-gray-200"
              } text-white `}
            />
          </div>
          <div
            onClick={() => {
              setSelectedPaymentMethod("BANK");
            }}
            className="bg-white mx-w-[200px] border border-gray-300 rounded-lg p-5 gap-1 flex justify-between items-center"
          >
            <span className="gap-4 flex items-center">
              <Landmark className="w-7 h-7 mx-2 text-textPrimary" />
              <span className="flex flex-col items-start justify-start">
                <p className="text-sm text-textPrimary font-bold">
                  Pay using bank
                </p>
                <p className="text-sm text-textSecondary">
                  You can pay using bank
                </p>
              </span>
            </span>
            <Check
              className={`w-6 h-6 p-1 rounded-full ${
                selectedPaymentMethod == "BANK" ? "bg-primary" : " bg-gray-200"
              } text-white `}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={selectedPaymentMethod == null}
          className="bg-primary p-2 w-full text-lg text-white rounded-md "
        >
          Continue
        </button>
      </div>
    </div>
  );
}
