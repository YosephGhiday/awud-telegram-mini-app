import axios, { type AxiosRequestConfig } from "axios";
import { ApiResponse } from "./ApiResponse";
import { NetworkResponseData } from "../static/interfaces/NetworkResponseData";

// 'http://167.235.148.112:3000/api/v1/'

export const backendApi = `${import.meta.env.VITE_BASE_URL}/api/v1/`;
export const imageRoute = `${import.meta.env.VITE_BASE_URL}/images`;

let api = axios.create({
  baseURL: backendApi,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 403) {
      api.defaults.headers.common["Authorization"] = null;
      localStorage.removeItem("token");
      window.location.href = "/awud-telegram-mini-app/login";
    }
    return Promise.reject(error);
  }
);

class ApiService {
  async get<T>(
    config: string | AxiosRequestConfig
  ): Promise<NetworkResponseData<T>> {
    if (config.toString() != config) {
      return await ApiResponse<T>(
        api({
          ...(config as AxiosRequestConfig),
          method: "get",
        })
      );
    }
    return await ApiResponse<T>(api.get(config as string));
  }

  async post<T>(
    extraUrl: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<NetworkResponseData<T>> {
    if (config) {
      return await ApiResponse<T>(
        api({
          ...config,
          url: extraUrl,
          data,
          method: "post",
        })
      );
    }
    return await ApiResponse<T>(api.post(extraUrl, data));
  }

  async put<T>(
    extraUrl: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<NetworkResponseData<T>> {
    if (config) {
      console.log("sdf");
      return await ApiResponse<T>(
        api({
          ...config,
          url: extraUrl,
          data,
          method: "PUT",
        })
      );
    }
    console.log("sdf fgdf");

    return await ApiResponse<T>(api.put(extraUrl, data));
  }

  async patch<T>(
    extraUrl: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<NetworkResponseData<T>> {
    if (config) {
      return await ApiResponse<T>(
        api({
          ...config,
          url: extraUrl,
          data,
          method: "patch",
        })
      );
    }
    return await ApiResponse<T>(api.patch(extraUrl, data));
  }

  async delete<T>(
    extraUrl: string,
    config?: AxiosRequestConfig
  ): Promise<NetworkResponseData<T>> {
    if (config) {
      return await ApiResponse<T>(
        api({
          ...config,
          url: extraUrl,
          method: "delete",
        })
      );
    }
    return await ApiResponse<T>(api.delete(extraUrl));
  }

  changeContentTypeHeaders() {
    api.defaults.headers.common["Content-Type"] = "application/json";
  }

  addAuthorizationHeader() {
    const token = localStorage.getItem("token");
    if (token != null) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    return this;
  }

  supportedMediaType() {
    // api.defaults.headers.common["Content-Type"] =
    //   "application/x-www-form-urlencoded";
    api = axios.create({
      baseURL: backendApi,
    });
    return this;
  }

  addMultipartHeader() {
    api = axios.create({
      baseURL: backendApi,
    });
    return this;
  }
}

export default ApiService;
