import { useState } from "react";
import { NetworkResponseData } from "../static/interfaces/NetworkResponseData";
type ErrorCallback = (errorMessage: string, status: number) => void;
type SuccessCallback<T> = (data: T, status: number) => void;

interface Options<T> {
  error?: ErrorCallback | (() => any);
  success?: SuccessCallback<T> | (() => any);
}

export default function useResponse<T = any>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);
  const [response, setResponse] = useState<NetworkResponseData<T>>();

  function handler(
    api: () => Promise<NetworkResponseData<T>>,
    options?: Options<T>
  ) {
    setLoading(true);
    setError("");
    setDirty(true);
    api()?.then((res) => {
      setLoading(false);
      setResponse(res);
      setError(res.errorMessage);

      if (res.success) {
        options?.success && options.success(res.data, res.status);
      } else {
        options?.error && options.error(res.errorMessage, res.status);
      }
    });
  }

  return { handler, loading, error, response, dirty };
}
