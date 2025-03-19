import { Slide, toast } from "react-toastify";
import ErrorToast from "./ErrorToast";
import SuccessToast from "./SuccessToast";
import WarningToast from "./WarningToast";

type ToastType = "success" | "warning" | "error";

interface ShowToastProps {
  message: string;
  type: ToastType;
}

export default function ShowToast(values: ShowToastProps) {
  const { message, type } = values;

  toast(
    type == "error" ? (
      <ErrorToast message={message} />
    ) : type == "success" ? (
      <SuccessToast message={message} />
    ) : (
      <WarningToast message={message} />
    ),
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      transition: Slide,
      style: {
        background: "transparent",
        padding: "0",
        paddingTop: "10px",
        boxShadow: "none",
        width: "350px",
      },
      closeButton: false,
    }
  );
}
