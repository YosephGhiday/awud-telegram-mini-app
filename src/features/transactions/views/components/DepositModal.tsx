import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import PaymentsApiServce from "@/features/payments/services/PaymentsApiService";
import useResponse from "@/services/useResponse";
import ShowToast from "@/components/ShowToast";

const schema = yup.object().shape({
  amount: yup
    .number()
    .required("Amount is required!")
    .typeError("Amount is required!"),
});

interface DepositModalProps {
  paymentMethodCode: string;
  account: string;
}

export default function DepositModal({
  paymentMethodCode,
  account,
}: DepositModalProps) {
  const { closeModal } = useModal();
  const depositResponse = useResponse();
  const paymentApiService = new PaymentsApiServce();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((values) => {
    depositResponse.handler(
      () =>
        paymentApiService.depostMoneyInitiate({
          ...values,
          paymentMethodCode: paymentMethodCode,
          account: account,
        }),
      {
        success() {
          closeModal();
        },
        error(errorMessage) {
          ShowToast({ type: "error", message: errorMessage });
        },
      }
    );
  });

  console.log(paymentMethodCode, account);
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="flex justify-between mb-5 items-center">
        <p className="font-bold text-lg text-textPrimary">Deposit</p>
        <X
          onClick={closeModal}
          className="cursor-pointer w-5 h-5 text-textPrimary"
        />
      </div>
      <form
        className="flex flex-col gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <Input
          {...register("amount")}
          errorMessage={errors.amount?.message}
          label="Amount"
          type="number"
          min={0}
          placeholder="0.00"
        />
        <button className="bg-primary p-2 w-full text-lg text-white rounded-md ">
          Continue
        </button>
      </form>
    </div>
  );
}
