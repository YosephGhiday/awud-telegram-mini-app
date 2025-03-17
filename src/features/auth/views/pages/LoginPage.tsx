import LoginImage from "@/assets/images/2People discussing.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginResponse from "@/features/auth/data/LoginResponse";
import AuthApiService from "@/features/auth/services/AuthApiService";
import useResponse from "@/services/useResponse";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { PasswordInput } from "@/components/Password";
import { setSpinner } from "@/context/SpinnerContext";
import ShowToast from "@/components/ShowToast";

const schema = yup
  .object({
    phoneNumber: yup.string().required("Phone number is required!"),
    password: yup.string().required("Password is required"),
  })
  .required();

const authApiService = new AuthApiService();

export default function LoginPage() {
  const navigate = useNavigate();
  const request = useResponse<LoginResponse>();
  const { updateUserData, getUserDetail } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((values, event) => {
    // console.log(values);
    event!.preventDefault();
    setSpinner(true);
    request.handler(() => authApiService.login(values), {
      error(errorMessage) {
        setSpinner(false);
        ShowToast({
          type: "error",
          message: errorMessage,
        });
      },
      success(data: LoginResponse) {
        setSpinner(false);
        ShowToast({
          message: "Successfully Logged in",
          type: "success",
        });
        updateUserData(data);
        getUserDetail();
        navigate("/awud-telegram-mini-app/", { replace: true });
      },
    });
  });

  return (
    <div className="w-full h-screen overflow-y-scroll bg-white max-w-[500px] flex flex-col  gap-2">
      <div className="w-full h-1/2 bg-[#2E2E2E] flex flex-col items-start justify-end">
        <img className="mx-auto" src={LoginImage} />
        <span className="px-10 py-5 flex flex-col">
          <p className="text-white text-[30px] font-bold">Login</p>
          <p className="text-gray-300 text-sm">
            Register & get started with Awud.
          </p>
        </span>
      </div>
      <form
        onSubmit={onSubmit}
        className="w-full h-1/2 flex justify-between flex-col pt-5 px-10 pb-20"
      >
        <span className="w-full flex flex-col gap-3">
          <Input
            label="Phone Number"
            {...register("phoneNumber")}
            placeholder="Enter Phone Number"
            errorMessage={errors.phoneNumber?.message}
          />
          <PasswordInput
            label="Enter Your Pin"
            {...register("password")}
            placeholder="*******"
            errorMessage={errors.password?.message}
          />
          <span className="w-full flex my-2 justify-end ">
            <Link
              className="text-textPrimary text-sm"
              to="/awud-telegram-mini-app/forgot-password"
            >
              Forgot Pin?
            </Link>
          </span>
        </span>
        <span className="flex flex-col gap-3 items-center">
          <p className="inline text-sm my-2 mx-auto">
            If you don’t have an account.{" "}
            <Link
              to="/awud-telegram-mini-app/create-account"
              className="text-primary"
            >
              Create an Account
            </Link>
          </p>
          <button
            className="bg-primary px-4 py-3 w-full rounded-lg text-md mb-5 text-white"
            type="submit"
          >
            Login
          </button>
        </span>
      </form>
    </div>
  );
}
