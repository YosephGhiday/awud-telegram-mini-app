import { imageRoute } from "@/services/ApiServices";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user } = useAuth();
  function getGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    if (hours < 12) {
      greeting = "Good Morning!";
    } else if (hours < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }
    return greeting;
  }
  return (
    <div className="w-full bg-white flex items-center justify-between py-[10px] px-[28px]">
      <span className="flex flex-col items-start justify-center text-textPrimary">
        <p className="text-xl font-bold">Hi, {user?.firstName}</p>
        <p className="text-xs">{getGreeting()}</p>
      </span>
      <span className="flex items-center justify-center gap-3">
        <Link to="/awud-telegram-mini-app/settings">
          {user?.image != null && user?.image != "" ? (
            <img
              src={`${imageRoute}/${user.image}`}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <User className="w-10 h-10 p-2 rounded-full text-textPrimary bg-gray-200" />
          )}
        </Link>
      </span>
    </div>
  );
}
