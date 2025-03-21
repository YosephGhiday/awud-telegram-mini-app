import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export default function ContactUsPage() {
  const navigator = useNavigate();

  return (
    <div className="w-full hide-scrollbar h-screen overflow-y-scroll px-10 bg-white max-w-[500px] flex flex-col pt-25 gap-5 justify-start items-center">
      <span className="w-full bg-white px-10 py-5 fixed top-0 right-0  flex text-textPrimary items-center justify-start gap-4">
        <ArrowLeft size={25} onClick={() => navigator(-1)} />
      </span>
      <span className="w-full my-5 gap-2 flex flex-col items-start">
        <p className="text-2xl text-textPrimary font-bold uppercase">
          Contact us
        </p>
        <p className="text-md text-textSecondary">
          We'd love to hear from you! Feel free to reach out to us using the
          information below.
        </p>
      </span>
      <span className="w-full  gap-2 flex flex-col items-start">
        <p className="text-lg text-textPrimary font-bold uppercase">email</p>
        <span className="flex gap-3 justify-start items-center">
          <Mail className="w-10 h-10 rounded-md bg-gray-100 p-2 text-textPrimary" />{" "}
          <p className="text-textSecondary text-md">info@awudequbs.com</p>
        </span>
      </span>
      <span className="w-full  gap-2 flex flex-col items-start">
        <p className="text-lg text-textPrimary font-bold uppercase">
          Phone Number
        </p>
        <span className="flex gap-3 justify-start items-center">
          <Phone className="w-10 h-10 rounded-md bg-gray-100 p-2 text-textPrimary" />{" "}
          <p className="text-textSecondary text-md">+251 90-333-9966</p>
        </span>
        <span className="flex gap-3 justify-start items-center">
          <Phone className="w-10 h-10 rounded-md bg-gray-100 p-2 text-textPrimary" />{" "}
          <p className="text-textSecondary text-md">+251 90-233-1188</p>
        </span>
      </span>
      <span className="w-full  gap-2 flex flex-col items-start">
        <p className="text-lg text-textPrimary font-bold uppercase">Address</p>
        <span className="flex gap-3 justify-start items-center">
          <MapPin className="w-10 h-10 rounded-md bg-gray-100 p-2 text-textPrimary" />{" "}
          <p className="text-textSecondary text-md">
            Brand Mall, Romanat Square, Mekelle, Ethiopia
          </p>
        </span>
      </span>
    </div>
  );
}
