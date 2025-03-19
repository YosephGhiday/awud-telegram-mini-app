import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/Input";
import * as yup from "yup";
import AuthApiService from "../../services/AuthApiService";
import useResponse from "@/services/useResponse";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { setSpinner } from "@/context/SpinnerContext";
import ShowToast from "@/components/ShowToast";

const schema = yup
  .object({
    newPassword: yup.string().required("This field cannot be empty!"),
    oldPassword: yup.string().required("This field cannot be empty!"),
    confirmPassword: yup
      .string()
      .required("This field cannot be empty!")
      .oneOf([yup.ref("newPassword")], "Passwords must match!"),
  })
  .required();

const authApiService = new AuthApiService();

export default function ChangePinPage() {
  const changePasswordResponse = useResponse();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigator = useNavigate();

  const onSubmit = handleSubmit((values, event) => {
    event!.preventDefault();
    setSpinner(true);
    changePasswordResponse.handler(
      () =>
        authApiService.changePassword({
          newPassword: values.newPassword,
          oldPassword: values.oldPassword,
        }),
      {
        success() {
          setSpinner(false);
          ShowToast({ type: "success", message: "Pin Changed Successfully!" });
        },
        error(errorMessage) {
          setSpinner(false);
          ShowToast({ type: "error", message: errorMessage });
        },
      }
    );
  });

  return (
    <div className="w-full h-screen overflow-y-scroll bg-white max-w-[500px] flex flex-col px-10 py-10 gap-5 justify-start items-center">
      <span className="w-full bg-white px-10 py-5 fixed top-0 right-0  flex text-textPrimary items-center justify-start gap-4">
        <ArrowLeft size={25} onClick={() => navigator(-1)} />
        <p className="text-lg font-bold">Change Pin</p>
      </span>
      <form
        onSubmit={onSubmit}
        className="w-full h-full flex justify-between flex-col pt-15 pb-5"
      >
        <span className="w-full flex gap-5 flex-col">
          <Input
            label="Old Pin"
            {...register("oldPassword")}
            placeholder="******"
            maxLength={6}
            errorMessage={errors.oldPassword?.message}
          />
          <Input
            label="New Pin"
            {...register("newPassword")}
            placeholder="******"
            maxLength={6}
            errorMessage={errors.newPassword?.message}
          />
          <Input
            label="Confirm Pin"
            {...register("confirmPassword")}
            placeholder="******"
            maxLength={6}
            errorMessage={errors.confirmPassword?.message}
          />
        </span>
        <button
          className="bg-primary text-lg text-white rounded-md p-3 w-full"
          type="submit"
        >
          Change Pin
        </button>
      </form>
    </div>
  );
}
