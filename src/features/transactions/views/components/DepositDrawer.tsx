import { useModal } from "@/context/ModalContext";
import { X, Landmark } from "lucide-react";
import TelebirrImage from "@/assets/images/banks/telebirr.png";
import MpessaImage from "@/assets/images/banks/mpesa.png";
import { useState } from "react";

export default function DepositDrawer() {
  const { closeModal } = useModal();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "TELEBIRR" | "BANK" | "MPESSA" | null
  >(null);

  return (
    <div className="w-full h-[50vh] bg-white rounded-t-xl p-5 absolute bottom-0 right-0">
      <div className="flex justify-end">
        <X
          onClick={closeModal}
          className="cursor-pointer w-5 h-5 text-textPrimary"
        />
      </div>
      <div className="h-full flex flex-col pb-10 justify-between">
        <div className="flex flex-col gap-2 w-full">
            
        </div>
        <button className="bg-primary p-2 w-full text-lg text-white rounded-md ">
          Continue
        </button>
      </div>
    </div>
  );
}
