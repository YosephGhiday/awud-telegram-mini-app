import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { useAuth } from "@/context/AuthContext";
import { DateInput } from "@/components/DateInput";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import GenderPicker from "@/features/auth/views/components/GenderPicker";

const schema = yup
  .object({
    phoneNumber: yup.string().required("Phone number is required!"),
    firstName: yup.string().required("First name is required!"),
    lastName: yup.string().required("Last name is required!"),
    // userName: yup.string().required("Username is required!"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    gender: yup.string().required("Gender is required!"),
    dateOfBirth: yup.string().required("Date of birth is required!"),
  })
  .required();

export default function SignUpPage() {
  const navigate = useNavigate();
  const { setSignUpRequestUserData, setHasForgottenPassword } = useAuth();

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
    setHasForgottenPassword(false);
    setSignUpRequestUserData({ ...values, device: "Telegram-mini-app" });
    navigate("/awud-telegram-mini-app/create-pin");
  });

  return (
    <div className="w-full h-screen overflow-y-scroll bg-white max-w-[500px] flex flex-col  gap-2">
      <div className="w-full h-1/5 bg-[#2E2E2E] flex flex-col items-start justify-end pb-5 px-10 ">
        <p className="text-white text-[30px] font-bold">Create Account</p>
        <p className="text-gray-300 text-sm">
          Register & get started with Awud.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="w-full h-full flex justify-between flex-col pt-5 px-10"
      >
        <span className="w-full flex flex-col gap-3">
          <Input
            label="First Name"
            {...register("firstName")}
            placeholder="Write your first name"
            errorMessage={errors.firstName?.message}
          />
          <Input
            label="Last Name"
            {...register("lastName")}
            placeholder="Write your last name"
            errorMessage={errors.lastName?.message}
          />
          {/* <Input
            label="Username"
            {...register("userName")}
            placeholder="Write your username"
            errorMessage={errors.userName?.message}
          /> */}
          <Input
            label="Email"
            {...register("email")}
            placeholder="Enter email"
            errorMessage={errors.email?.message}
          />
          <Input
            label="Phone Number"
            {...register("phoneNumber")}
            placeholder="Enter Phone Number"
            errorMessage={errors.phoneNumber?.message}
          />
          <DateInput
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
        <span className="flex h-full justify-between py-5 items-center">
          <Link to="/awud-telegram-mini-app/login">
            <ArrowLeft className="text-[#2E2E2E] " size={20} />
          </Link>
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
