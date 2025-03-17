import {
  ArrowLeft,
  LogOut,
  User,
  Settings,
  BookText,
  CircleHelp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import SettingsTile from "../components/SettingsTile";
import AuthApiService from "../../services/AuthApiService";

export default function SettingsPage() {
  const navigator = useNavigate();
  const { user } = useAuth();
  const authApiService = new AuthApiService();

  const logOut = () => {
    authApiService.logout();
    navigator("/awud-telegram-mini-app/login");
  };

  return (
    <div className="w-full h-screen overflow-y-scroll bg-white max-w-[500px] flex flex-col px-10 py-15 gap-2 justify-start items-center">
      <div className="w-full text-textPrimary flex items-center justify-start gap-4">
        <ArrowLeft size={25} onClick={() => navigator(-1)} />
        <p className="text-lg font-bold">Account</p>
      </div>
      <span className="w-full flex flex-col items-center justify-center my-10">
        <User className="w-30 h-30 p-8 rounded-full text-textPrimary bg-gray-200" />
        <p className="font-extrabold text-lg text-textPrimary mt-2 mb-1">
          {user?.firstName + " " + user?.lastName}
        </p>
        <p className="text-sm text-textSecondary font-bold">Level 1</p>
      </span>
      <SettingsTile
        icon={<User className="text-primary" size={25} />}
        page="/awud-telegram-mini-app/update-profile"
        text="Profile"
      />
      <SettingsTile
        icon={<Settings className="text-primary" size={25} />}
        page="/"
        text="Change Password"
      />
      <SettingsTile
        icon={<BookText className="text-primary" size={25} />}
        page="/"
        text="Terms & Conditions"
      />
      <SettingsTile
        icon={<CircleHelp className="text-primary" size={25} />}
        page="/"
        text="About"
      />
      <span
        onClick={logOut}
        className="flex justify-start items-center shadow-md rounded-md py-[20px] px-[14px] w-full"
      >
        <span className="flex items-center text-error gap-4">
          <span className="p-[5px] bg-error/30 rounded-sm">
            <LogOut size={25} />
          </span>
          <p>Logout</p>
        </span>
      </span>
    </div>
  );
}
