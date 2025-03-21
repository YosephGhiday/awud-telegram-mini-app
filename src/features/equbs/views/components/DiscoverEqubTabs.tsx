import { useState } from "react";

interface DiscoverEqubTabsProps {
  onSelect: (tab: string) => void;
}

type tabs = "FEATURED" | "DAILY" | "MONTHLY" | "WEEKLY";

export default function DiscoverEqubTabs({ onSelect }: DiscoverEqubTabsProps) {
  const [selectedTab, setSelectedTab] = useState<tabs>("FEATURED");

  return (
    <div className="w-full overflow-x-scroll hide-scrollbar items-center justify-start flex py-2  gap-5 scr">
      <span
        onClick={() => {
          setSelectedTab("FEATURED");
          onSelect("FEATURED");
        }}
        className={`px-3 py-1 rounded-md ${
          selectedTab == "FEATURED"
            ? "bg-primary text-white"
            : " text-textSecondary"
        }`}
      >
        Featured
      </span>

      <span
        onClick={() => {
          setSelectedTab("DAILY");
          onSelect("DAILY");
        }}
        className={`px-3 py-1 rounded-md ${
          selectedTab == "DAILY"
            ? "bg-primary text-white"
            : " text-textSecondary"
        }`}
      >
        Daily
      </span>

      <span
        onClick={() => {
          setSelectedTab("WEEKLY");
          onSelect("WEEKLY");
        }}
        className={`px-3 py-1 rounded-md ${
          selectedTab == "WEEKLY"
            ? "bg-primary text-white"
            : " text-textSecondary"
        }`}
      >
        Weekly
      </span>

      <span
        onClick={() => {
          setSelectedTab("MONTHLY");
          onSelect("MONTHLY");
        }}
        className={`px-3 py-1 rounded-md ${
          selectedTab == "MONTHLY"
            ? "bg-primary text-white"
            : " text-textSecondary"
        }`}
      >
        Monthly
      </span>
    </div>
  );
}
