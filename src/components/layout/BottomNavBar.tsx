import { Home, Store, Wallet, Banknote } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNavBar() {
  const location = useLocation();
  const checkLocation = (page: string): boolean => {
    return location.pathname.includes(page);
  };

  return (
    <div className="w-full fixed bottom-0 right-0 bg-white flex items-center justify-between py-[10px] px-[28px]">
      <Link
        to="/awud-telegram-mini-app/home"
        className={`flex  px-[9px] py-[6px] rounded-md ${
          checkLocation("home") ? "text-white bg-primary" : "text-textPrimary"
        } flex-col items-center justify-center"`}
      >
        <Home size={30} />
        <p className="font-bold text-sm">Home</p>
      </Link>
      <Link
        to="/awud-telegram-mini-app/home"
        className={`flex  px-[9px] py-[6px] rounded-md ${
          checkLocation("equbs") ? "text-white bg-primary" : "text-textPrimary"
        } flex-col items-center justify-center"`}
      >
        <Store size={30} />
        <p className="font-bold text-sm">Equbs</p>
      </Link>
      <Link
        to="/awud-telegram-mini-app/home"
        className={`flex  px-[9px] py-[6px] rounded-md ${
          checkLocation("transactions")
            ? "text-white bg-primary"
            : "text-textPrimary"
        } flex-col items-center justify-center"`}
      >
        <Banknote size={30} />
        <p className="font-bold text-sm">Transactions</p>
      </Link>
      <Link
        to="/awud-telegram-mini-app/home"
        className={`flex  px-[9px] py-[6px] rounded-md ${
          checkLocation("savings")
            ? "text-white bg-primary"
            : "text-textPrimary"
        } flex-col items-center justify-center"`}
      >
        <Wallet size={30} />
        <p className="font-bold text-sm">Savings</p>
      </Link>
    </div>
  );
}
