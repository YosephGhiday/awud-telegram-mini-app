import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/Input";
import { InputSelect } from "@/components/InputSelect";
import {
  longTermSavingsPlans,
  recurringSavingsPlans,
  SavingsPlan,
  shortTermSavingsPlans,
} from "../../data/enums";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import SavingPlanCard from "../components/SavingPlanCard";
import { useSavingContext } from "@/context/SavingContext";
import { useAuth } from "@/context/AuthContext";

interface Period {
  label: string;
  value: string;
  days: number;
  months: number;
  weeks: number;
}

const schema = yup.object().shape({
  maximumBalance: yup
    .number()
    .required("This field is required")
    .typeError("This field must be a number"),
  savingPeriod: yup.string().required("This field is required"),
  repayedEvery: yup.string().required("Saving plan must be selected"),
});

export default function JoinSavingsPage() {
  const { setNewSaving } = useSavingContext();
  const { saving } = useParams();
  const { userDetail } = useAuth();
  const navigator = useNavigate();
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [selectedPaymentFrequency, setSelectedPaymentFrequency] =
    useState<string>("");
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const values = watch();

  const [savingPlan, setSavingPlan] = useState<SavingsPlan>();

  const findSelectedPlan = () => {
    const longTermSaving = longTermSavingsPlans.find(
      (plan) => plan.category == saving
    );
    const shortTermSaving = shortTermSavingsPlans.find(
      (plan) => plan.category == saving
    );
    const recurringSaving = recurringSavingsPlans.find(
      (plan) => plan.category == saving
    );
    if (longTermSaving) {
      setSavingPlan(longTermSaving);
    }
    if (shortTermSaving) {
      setSavingPlan(shortTermSaving);
    }
    if (recurringSaving) {
      setSavingPlan(recurringSaving);
    }
  };

  useEffect(() => {
    checkFormValidity();
  }, [values]);
  useEffect(() => {
    findSelectedPlan();
  }, []);

  const checkFormValidity = () => {
    if (values.maximumBalance == 0 || values.maximumBalance == undefined) {
      setIsFormFilled(false);
      return;
    }

    if (values.savingPeriod == "" || values.savingPeriod == undefined) {
      setIsFormFilled(false);
      return;
    }

    setIsFormFilled(true);
    return;
  };

  const onSubmit = handleSubmit((values) => {
    setNewSaving({
      ...values,
      minimumBalance: calculate(selectedPaymentFrequency),
      clientId: userDetail?.id!,
      name: saving!,
      maximumBalance: calculatedAmount,
    });
    navigator("/awud-telegram-mini-app/start-saving");
  });

  const periods: Period[] = [
    {
      label: "1 Month",
      value: "MONTHLY",
      days: 30,
      months: 1,
      weeks: 4,
    },
    {
      label: "3 Months",
      value: "QUARTERLY",
      days: 90,
      months: 3,
      weeks: 12,
    },
    {
      label: "6 Months",
      value: "HALF_YEARLY",
      days: 180,
      months: 6,
      weeks: 26,
    },
    {
      label: "1 Year",
      value: "YEARLY",
      days: 365,
      weeks: 52,
      months: 12,
    },

    {
      label: "5 Years",
      value: "FIVE_YEARS",
      days: 1825,
      months: 60,
      weeks: 260,
    },
    {
      label: "10 Years",
      value: "TEN_YEARS",
      months: 120,
      weeks: 520,
      days: 3650,
    },
  ];

  const onSelect = (repaidEvery: string) => {
    setSelectedPaymentFrequency(repaidEvery);
    setValue("repayedEvery", repaidEvery);
  };

  function calculate(repayedEvery: string) {
    const numerator = values.maximumBalance;
    let denominator: number;

    const period = periods.find(
      (period) => values.savingPeriod == period.value
    );

    if (repayedEvery == "DAILY") {
      denominator = period?.days!;
    } else if (repayedEvery == "WEEKLY") {
      denominator = period?.weeks!;
    } else {
      denominator = period?.months!;
    }

    return Math.ceil(numerator / denominator);
  }

  return (
    <div className="w-full hide-scrollbar h-screen overflow-y-scroll bg-[#F9F9F9] max-w-[500px] flex flex-col pt-25 gap-5 justify-start items-center">
      <span className="w-full bg-white px-10 py-5 fixed top-0 right-0  flex text-textPrimary items-center justify-start gap-4">
        <ArrowLeft size={25} onClick={() => navigator(-1)} />
        <p className="text-lg font-bold">Join Savings</p>
      </span>
      <form
        onSubmit={onSubmit}
        className="w-full px-5 flex flex-col h-full pb-10 gap-5 justify-between"
      >
        <div>
          <span className="w-full flex flex-col gap-1 items-start">
            <p className="text-textPrimary font-bold text-2xl">
              {savingPlan?.category}
            </p>
            <p className="text-textSecondary text-md">
              {savingPlan?.description}
            </p>
          </span>
          <Input
            {...register("maximumBalance")}
            errorMessage={errors.maximumBalance?.message}
            type="number"
            className="flex-1"
            label="Amount you want to save(ETB)"
            placeholder="Amount"
          />
          <InputSelect
            {...register("savingPeriod")}
            errorMessage={errors.savingPeriod?.message}
            options={periods.map((period) => {
              return { label: period.label, value: period.value };
            })}
            label="Saving Period"
          />
          <span className="py-5 flex w-full flex-col">
            <p className="text-textPrimary text-lg font-bold">SAVING PLANS</p>
            {errors.repayedEvery?.message && (
              <p className="w-full text-error text-center">
                {errors.repayedEvery?.message}
              </p>
            )}{" "}
            {isFormFilled && (
              <div className="w-full grid grid-cols-2 mt-3 gap-2">
                <SavingPlanCard
                  repaidEvery="Daily"
                  isSelected={selectedPaymentFrequency == "DAILY"}
                  onSelect={() => {
                    onSelect("DAILY");
                    setCalculatedAmount(
                      calculate("DAILY") *
                        periods.find(
                          (period) => values.savingPeriod == period.value
                        )?.days!
                    );
                  }}
                  periodicPayment={calculate("DAILY")}
                  totalAmount={
                    calculate("DAILY") *
                    periods.find(
                      (period) => values.savingPeriod == period.value
                    )?.days!
                  }
                />
                <SavingPlanCard
                  repaidEvery="Weekly"
                  isSelected={selectedPaymentFrequency == "WEEKLY"}
                  onSelect={() => {
                    onSelect("WEEKLY");
                    setCalculatedAmount(
                      calculate("WEEKLY") *
                        periods.find(
                          (period) => values.savingPeriod == period.value
                        )?.weeks!
                    );
                  }}
                  periodicPayment={calculate("WEEKLY")}
                  totalAmount={
                    calculate("WEEKLY") *
                    periods.find(
                      (period) => values.savingPeriod == period.value
                    )?.weeks!
                  }
                />{" "}
                <SavingPlanCard
                  repaidEvery="Monthly"
                  isSelected={selectedPaymentFrequency == "MONTHLY"}
                  onSelect={() => {
                    onSelect("MONTHLY");
                    setCalculatedAmount(
                      calculate("MONTHLY") *
                        periods.find(
                          (period) => values.savingPeriod == period.value
                        )?.months!
                    );
                  }}
                  periodicPayment={calculate("MONTHLY")}
                  totalAmount={
                    calculate("MONTHLY") *
                    periods.find(
                      (period) => values.savingPeriod == period.value
                    )?.months!
                  }
                />
              </div>
            )}
          </span>
        </div>
        <button className="bg-primary text-lg text-white rounded-md p-3 w-full">
          Continue
        </button>
      </form>
    </div>
  );
}
