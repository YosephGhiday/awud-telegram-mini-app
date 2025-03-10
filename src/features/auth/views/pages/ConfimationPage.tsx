import { useNavigate } from "react-router-dom";
import { Input } from "@/components/Input";
import * as yup from "yup";
import AuthApiService from "../../services/AuthApiService";
import useResponse from "@/services/useResponse";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { setSpinner } from "@/context/SpinnerContext";
import ConfirmationImage from "@/assets/images/ConfimationImage.png";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ShowToast from "@/components/ShowToast";
import { useAuth } from "@/context/AuthContext";
// import { useEffect } from "react";

const schema = yup
  .object({
    OTP: yup.string().required("This field cannot be empty!"),
  })
  .required();

const authApiService = new AuthApiService();

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const request = useResponse();
  const {
    hasForgottenPassword,
    signupRequestUserData,
    updateUserData,
    forgotPasswordAccount,
    setForgotPasswordCode,
  } = useAuth();

  const {
    handleSubmit,
    register,
    // setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((values, event) => {
    event!.preventDefault();
    setSpinner(true);
    if (hasForgottenPassword) {
      request.handler(
        () =>
          authApiService.forgotPasswordConfirmCode({
            code: values.OTP,
            account: forgotPasswordAccount!,
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
            setForgotPasswordCode(values.OTP);
            ShowToast({
              type: "success",
              message: "Successfully verified OTP!",
            });
            navigate("/create-pin");
          },
        }
      );
    } else {
      request.handler(
        () =>
          authApiService.activateAccount({
            code: values.OTP,
            account: signupRequestUserData?.phoneNumber,
          }),
        {
          error(errorMessage) {
            setSpinner(false);
            ShowToast({
              type: "error",
              message: errorMessage,
            });
          },
          success(data) {
            setSpinner(false);
            ShowToast({
              type: "success",
              message: "Successfully verified OTP!",
            });
            updateUserData(data);
            // navigate("/");
          },
        }
      );
    }
  });

  //   useEffect(() => {
  //     if ('OTPCredential' in window) {
  //       const ac = new AbortController();
  //       navigator.credentials
  //         .get({
  //           otp: { transport: ['sms'] },
  //           signal: ac.signal,
  //         })
  //         .then((otp) => {
  //           console.log(otp?.code);
  //           setValue("OTP",otp?.code);
  //           ac.abort();
  //         })
  //         .catch((err) => {
  //           ac.abort();
  //           console.error(err);
  //         });
  //     }
  //   }, []);

  return (
    <div className="w-full h-screen bg-white max-w-[500px] flex flex-col  gap-2">
      <div className="w-full h-1/3 bg-[#2E2E2E] flex flex-col items-start justify-end">
        <img className="mx-auto" src={ConfirmationImage} />
        <span className="px-10 py-5 flex flex-col">
          <p className="text-white text-[30px] font-bold">Confirmation</p>
          <p className="text-gray-300 text-sm">
            we have sent an OTP to the number you entered.
          </p>
        </span>
      </div>
      <form
        onSubmit={onSubmit}
        className="w-full h-2/3 flex justify-between flex-col pt-5 px-10 pb-5"
      >
        <Input
          label="OTP"
          autoComplete="one-time-code"
          {...register("OTP")}
          placeholder="Enter OTP"
          errorMessage={errors.OTP?.message}
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
