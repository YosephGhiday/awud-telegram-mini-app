import { useNavigate } from "react-router-dom";
import { Input } from "@/components/Input";
import * as yup from "yup";
import AuthApiService from "../../services/AuthApiService";
import useResponse from "@/services/useResponse";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { setSpinner } from "@/context/SpinnerContext";
import LoginImage from "@/assets/images/LoginImage.png";
import { ArrowRight, ArrowLeft } from "lucide-react";

const schema = yup
  .object({
    phoneNumber: yup.string().required("Phone number is required!"),
  })
  .required();

const authApiService = new AuthApiService();

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const request = useResponse();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((values, event) => {
    event!.preventDefault();
    setSpinner(true);
    request.handler(
      () => authApiService.resetForgottenPassword(values.phoneNumber),
      {
        error() {
          setSpinner(false);
          //   ShowToast({
          //     type: "error",
          //     message: errorMessage,
          //   });
        },
        success() {
          setSpinner(false);
          navigate("/");
        },
      }
    );
  });

  return (
    <div className="w-full h-screen bg-white max-w-[500px] flex flex-col  gap-2">
      <div className="w-full h-1/2 bg-[#2E2E2E] flex flex-col items-start justify-end">
        <img className="mx-auto" src={LoginImage} />
        <span className="px-10 py-5 flex flex-col">
          <p className="text-white text-[30px] font-bold">Forgot Password?</p>
          <p className="text-gray-300 text-sm">
            Register & get started with Awud.
          </p>
        </span>
      </div>
      <form
        onSubmit={onSubmit}
        className="w-full h-1/2 flex justify-between flex-col pt-5 px-10 pb-20"
      >
        <Input
          label="Phone Number"
          {...register("phoneNumber")}
          placeholder="Enter Phone Number"
          errorMessage={errors.phoneNumber?.message}
        />

        <span className="flex justify-between items-center">
          <ArrowLeft
            onClick={() => navigate(-1)}
            className="text-[#2E2E2E] "
            size={20}
          />
          <button
            className="bg-primary text-lg text-white rounded-md p-3 flex gap-2 items-center"
            type="submit"
          >
            Continue
            <ArrowRight size={16} />
          </button>
        </span>
      </form>
    </div>
  );
}
