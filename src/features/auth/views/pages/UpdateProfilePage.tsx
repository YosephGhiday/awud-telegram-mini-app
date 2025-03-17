import { ArrowLeft, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { DateInput } from "@/components/DateInput";
import GenderPicker from "@/features/auth/views/components/GenderPicker";
import AuthApiService from "../../services/AuthApiService";
import { useEffect, useState } from "react";
import useResponse from "@/services/useResponse";
import { setSpinner } from "@/context/SpinnerContext";
import { ClientResponse } from "../../data/ClientResponse";
import ShowToast from "@/components/ShowToast";
import { useAuth } from "@/context/AuthContext";

const schema = yup
  .object({
    phoneNumber: yup.string().required("Phone number is required!"),
    firstName: yup.string().required("First name is required!"),
    lastName: yup.string().required("Last name is required!"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    gender: yup.string().required("Gender is required!"),
    dateOfBirth: yup.string().required("Date of birth is required!"),
  })
  .required();

const authApiService = new AuthApiService();

export default function UpdateProfilePage() {
  const navigator = useNavigate();
  const updateUserResponse = useResponse();
  const { userDetail, getUserDetail } = useAuth();
  const getUserRequest = useResponse();
  const [user, setUser] = useState<ClientResponse>();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((values, event) => {
    event!.preventDefault();
    updateUserResponse.handler(() => authApiService.updateProfile(values), {
      success() {
        ShowToast({ type: "success", message: "Successfully updated Profile" });
        getUserDetail();
        navigator("/awud-telegram-mini-app/settings");
      },
      error(errorMessage) {
        ShowToast({ type: "error", message: errorMessage });
      },
    });
  });

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
    <form
      onSubmit={onSubmit}
      className="w-full h-screen overflow-y-scroll bg-white max-w-[500px] flex flex-col px-10 py-15 gap-2 justify-start items-center"
    >
      <div className="w-full flex text-textPrimary items-center justify-between">
        <span className="flex items-center justify-start gap-4">
          <ArrowLeft size={25} onClick={() => navigator(-1)} />
          <p className="text-lg font-bold">Account</p>
        </span>
        <button
          type="submit"
          className="px-5 py-1 rounded-sm bg-primary text-white"
        >
          Save
        </button>
      </div>
      <span className="w-full flex flex-col items-center justify-center my-10">
        <User className="w-30 h-30 p-8 rounded-full text-textPrimary bg-gray-200" />
        <p className="font-extrabold text-lg text-textPrimary mt-2 mb-1">
          {user?.firstName + " " + user?.lastName}
        </p>
        <p className="text-sm text-textSecondary font-bold">Level 1</p>
      </span>
      {!getUserRequest.loading && (
        <span className="w-full flex flex-col gap-3">
          <Input
            defaultValue={user?.firstName}
            label="First Name"
            {...register("firstName")}
            placeholder="Write your first name"
            errorMessage={errors.firstName?.message}
          />
          <Input
            defaultValue={user?.lastName}
            label="Last Name"
            {...register("lastName")}
            placeholder="Write your last name"
            errorMessage={errors.lastName?.message}
          />

          <Input
            defaultValue={user?.email}
            label="Email"
            {...register("email")}
            placeholder="Enter email"
            errorMessage={errors.email?.message}
          />
          <Input
            defaultValue={user?.phoneNumber}
            label="Phone Number"
            {...register("phoneNumber")}
            placeholder="Enter Phone Number"
            errorMessage={errors.phoneNumber?.message}
          />
          <DateInput
            defaultValue={user?.dateOfBirth!.split("T")[0]}
            {...register("dateOfBirth")}
            errorMessage={errors.dateOfBirth?.message}
            label="Date of birth"
          />

          <GenderPicker
            errorMessage={errors.gender?.message}
            label="Gender"
            onSelect={(gender: string) => setValue("gender", gender)}
          />
        </span>
      )}
    </form>
  );
}
