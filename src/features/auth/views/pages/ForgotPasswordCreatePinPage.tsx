import { useNavigate } from "react-router-dom";
import { Input } from "@/components/Input";
import * as yup from "yup";
import AuthApiService from "../../services/AuthApiService";
import useResponse from "@/services/useResponse";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { setSpinner } from "@/context/SpinnerContext";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ShowToast from "@/components/ShowToast";
import { useAuth } from "@/context/AuthContext";
import CreatePinImage from "@/assets/images/Man Running.svg";
import { useParams } from "react-router-dom";

const schema = yup
  .object({
    password: yup.string().required("This field cannot be empty!"),
    confirmPassword: yup
      .string()
      .required("This field cannot be empty!")
      .oneOf([yup.ref("password")], "Passwords must match!"),
  })
  .required();

const authApiService = new AuthApiService();

export default function ForgotPasswordCreatePinPage() {
  const navigate = useNavigate();
  const request = useResponse();
  const { forgotPasswordCode } = useAuth();

  const { phone } = useParams();

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
      () =>
        authApiService.forgotPasswordNewPassword({
          account: phone,
          code: forgotPasswordCode,
          newPassword: values.password,
        }),
      {
        error(errorMessage) {
          setSpinner(false);
          ShowToast({
            type: "error",
            message: errorMessage,
          });
        },
        success() {
          setSpinner(false);
          ShowToast({
            type: "success",
            message: "Pin Changed Successfully",
          });
          navigate("/awud-telegram-mini-app/successfully-changed-password");
        },
      }
    );
  });

  return (
    <div className="w-full h-screen bg-white max-w-[500px] flex flex-col  gap-2">
      <div className="w-full h-1/2 bg-[#2E2E2E] flex flex-col items-start justify-end">
        <img className="mx-auto" src={CreatePinImage} />
        <span className="px-10 pb-5 flex flex-col">
          <p className="text-white text-[30px] font-bold">Create Pin</p>
          <p className="text-gray-300 text-sm">Create your pin</p>
        </span>
      </div>
      <form
        onSubmit={onSubmit}
        className="w-full h-2/3 flex justify-between flex-col pt-5 px-10 pb-5"
      >
        <span className="w-full flex justify-start gap-5 flex-col">
          <Input
            label="Pin"
            {...register("password")}
            placeholder="******"
            maxLength={6}
            errorMessage={errors.password?.message}
          />
          <Input
            label="Confirm Pin"
            {...register("confirmPassword")}
            placeholder="******"
            maxLength={6}
            errorMessage={errors.confirmPassword?.message}
          />
        </span>

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
