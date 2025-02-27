import type { AxiosResponse } from "axios";

import { NetworkResponseData } from "../static/interfaces/NetworkResponseData";
import ErrorMessage from "./ErrorMessage";

export const ApiResponse = async <T>(
  fun: Promise<AxiosResponse>
): Promise<NetworkResponseData<T>> => {
  const res: NetworkResponseData<T> = {
    success: false,
    status: 0,
    data: {} as T,
    errorMessage: "",
  };

  return fun
    .then((response) => {
      res.success = true;
      res.data = response.data;
      res.status = response.status;
      return res;
    })
    .catch((error) => {
      console.log(error);
      // this is true when the request gets to the server
      // and there is some error on the server
      if (error.response) {
        res.success = false;
        res.status = error.response.status;
        res.errorMessage = ErrorMessage.getErrorMessage(error.response);
        return res;
      }

      // this is true when the request cant get to the server
      // eg. connection error
      if (error.request) {
        res.success = false;
        res.status = error.code;
        res.errorMessage = ErrorMessage.getErrorMessage(res);
        return res;
      }

      return res;
    });
};
