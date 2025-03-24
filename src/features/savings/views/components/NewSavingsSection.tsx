import { useState } from "react";
import {
  longTermSavingsPlans,
  recurringSavingsPlans,
  shortTermSavingsPlans,
} from "../../data/enums";
import NewSavingCard from "./NewSavingCard";

export default function NewSavingsSection() {
  const [selectedTab, setSelectedTab] = useState("RECURRING");

  return (
    <div className="flex flex-col px-2 gap-5">
      <p className="text-sm text-textSecondary">
        Here are some saving challenges. Select one and signup to start saving.
      </p>
      <span className="w-full flex items-center justify-between border-b-2 border-gray-200">
        <span
          onClick={() => {
            setSelectedTab("RECURRING");
          }}
          className={` font-bold ${
            selectedTab == "RECURRING"
              ? "border-primary border-b text-primary"
              : " text-textSecondary"
          }`}
        >
          Recurring
        </span>
        <span
          onClick={() => {
            setSelectedTab("SHORT_TERM");
          }}
          className={` font-bold ${
            selectedTab == "SHORT_TERM"
              ? "border-primary border-b text-primary"
              : " text-textSecondary"
          }`}
        >
          Short Term
        </span>
        <span
          onClick={() => {
            setSelectedTab("LONG_TERM");
          }}
          className={` font-bold ${
            selectedTab == "LONG_TERM"
              ? "border-primary border-b text-primary"
              : " text-textSecondary"
          }`}
        >
          Long Term
        </span>
      </span>
      <div className="w-full grid grid-cols-2 pb-25 gap-2">
        {selectedTab == "RECURRING"
          ? recurringSavingsPlans.map((plan, index) => (
              <NewSavingCard key={index} plan={plan} />
            ))
          : selectedTab == "SHORT_TERM"
          ? shortTermSavingsPlans.map((plan, index) => (
              <NewSavingCard key={index} plan={plan} />
            ))
          : longTermSavingsPlans.map((plan, index) => (
              <NewSavingCard key={index} plan={plan} />
            ))}{" "}
      </div>
    </div>
  );
}
