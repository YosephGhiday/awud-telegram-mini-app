import { ArrowLeft, User, Phone, VenusAndMars, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthApiService from "../../services/AuthApiService";
import { useEffect, useState } from "react";
import useResponse from "@/services/useResponse";
import { setSpinner } from "@/context/SpinnerContext";
import { ClientResponse } from "../../data/ClientResponse";
import { useAuth } from "@/context/AuthContext";
import ShowToast from "@/components/ShowToast";
import ProfileDetailTile from "../components/ProfileDetailTile";
import { format } from "date-fns";

const authApiService = new AuthApiService();

export default function ProfileDetailPage() {
  const navigator = useNavigate();
  const { userDetail } = useAuth();
  const getUserRequest = useResponse();
  const [user, setUser] = useState<ClientResponse>();

  useEffect(() => {
    setSpinner(true);
    getUserRequest.handler(() => authApiService.getUserDetail(), {
      success(data) {
        setUser(data);
        setSpinner(false);
      },
      error(errorMessage) {
        setUser(userDetail!);
        setSpinner(false);
        ShowToast({ type: "error", message: errorMessage });
      },
    });
  }, []);

  return (
    <div className="w-full hide-scrollbar h-screen overflow-y-scroll bg-[#F9F9F9] max-w-[500px] flex flex-col px-10 py-15 gap-2 justify-start items-center">
      <span className="w-full bg-white px-10 py-5 fixed top-0 right-0  flex text-textPrimary items-center justify-start gap-4">
        <ArrowLeft size={25} onClick={() => navigator(-1)} />
        <p className="text-lg font-bold">Account</p>
      </span>
      <span className="w-full flex flex-col items-center justify-center my-10">
        <User className="w-30 h-30 p-10 rounded-full border text-textPrimary bg-[#F9F9F9]" />
        <p className="font-bold text-lg text-textPrimary mt-2 mb-1">
          {!getUserRequest.loading && user?.firstName + " " + user?.lastName}
        </p>
      </span>
      {!getUserRequest.loading && (
        <span className="w-full flex flex-col gap-5">
          <ProfileDetailTile
            icon={<User />}
            text="First Name"
            value={user?.firstName!}
          />

          <ProfileDetailTile
            icon={<User />}
            text="Last Name"
            value={user?.lastName!}
          />

          <ProfileDetailTile
            icon={<Phone />}
            text="Phone Number"
            value={user?.phoneNumber!}
          />

          <ProfileDetailTile
            icon={<VenusAndMars />}
            text="Gender"
            value={user?.gender!}
          />

          <ProfileDetailTile
            icon={<Calendar />}
            text="Birth Date"
            value={
              user?.dateOfBirth ? format(user?.dateOfBirth!, "yyyy-MM-dd") : ""
            }
          />
        </span>
      )}
    </div>
  );
}
