import { createContext, useContext, useEffect, useState } from "react";
// import { decryptData, encryptData } from "../services/CryptoService";
import LoginResponse, {
  UserResponse,
} from "../features/auth/data/LoginResponse";
import SignUpRequest from "@/features/auth/data/SignUpRequest";
import AuthApiService from "@/features/auth/services/AuthApiService";
// import { setSpinner } from "./SpinnerContext";
import { ClientResponse } from "@/features/auth/data/ClientResponse";
import useResponse from "@/services/useResponse";
import ShowToast from "@/components/ShowToast";

interface AuthContextType {
  // updatePermissions: (userResponse: UserResponse) => void;
  updateUserData: (user: LoginResponse) => void;
  token: string | null;
  user: UserResponse | null;
  hasForgottenPassword: boolean;
  setHasForgottenPassword: (status: boolean) => void;
  signupRequestUserData: SignUpRequest | undefined;
  setSignUpRequestUserData: (data: SignUpRequest) => void;
  forgotPasswordAccount: string | undefined;
  setForgotPasswordAccount: (account: string) => void;
  forgotPasswordCode: string | undefined;
  setForgotPasswordCode: (code: string) => void;
  userDetail: ClientResponse | null;
  getUserDetail: () => void;
}

const authApiService = new AuthApiService();
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userDetail, setUserDetail] = useState<ClientResponse | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserResponse | null>(null);
  const [hasForgottenPassword, setHasForgottenPassword] =
    useState<boolean>(false);
  const [signupRequestUserData, setSignUpRequestUserData] =
    useState<SignUpRequest>();
  const [forgotPasswordAccount, setForgotPasswordAccount] = useState<string>();
  const [forgotPasswordCode, setForgotPasswordCode] = useState<string>();

  const clientResponse = useResponse<ClientResponse>();

  const updateUserData = (userResponse: LoginResponse) => {
    // const encryptedUser = encryptData(
    //   userResponse.user,
    //   import.meta.env.VITE_KEY!
    // );
    localStorage.setItem("token", userResponse.token);
    // localStorage.setItem("data", String(encryptedUser));
    localStorage.setItem("data", JSON.stringify(userResponse.user));
    setUser(userResponse.user);
    setToken(userResponse.token);
  };

  const getUserData = () => {
    // checkLocalDataExist();

    const data = localStorage.getItem("data");
    const token = localStorage.getItem("token");
    if (data == null || token == null) {
      return;
    }
    // const decryptedUser: UserResponse = JSON.parse(
    //   decryptData(data!, import.meta.env.VITE_KEY!)
    // );

    setToken(token);
    // setUser(decryptedUser!);
    setUser(JSON.parse(data));
  };

  const getUserDetail = () => {
    const data = localStorage.getItem("data");
    const token = localStorage.getItem("token");
    if (data == null || token == null) {
      return;
    }
    // setSpinner(true);
    clientResponse.handler(() => authApiService.getUserDetail(), {
      success(data) {
        setUserDetail(data);
        localStorage.setItem("userDetail", JSON.stringify(data));
        // setSpinner(false);
        ShowToast({ type: "success", message: "Sync successfull!" });
      },
      error(errorMessage) {
        // setSpinner(false);
        ShowToast({ type: "error", message: errorMessage });
        const data = localStorage.getItem("userDetail");
        if (data) {
          setUserDetail(JSON.parse(data));
        } else {
          return;
        }
      },
    });
  };

  useEffect(() => {
    getUserData();
    getUserDetail();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        updateUserData,
        signupRequestUserData,
        setSignUpRequestUserData,
        user,
        token,
        hasForgottenPassword,
        setHasForgottenPassword,
        forgotPasswordAccount,
        setForgotPasswordAccount,
        forgotPasswordCode,
        setForgotPasswordCode,
        getUserDetail,
        userDetail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
