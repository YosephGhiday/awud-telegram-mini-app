import { createContext, useContext, useEffect, useState } from "react";
// import { decryptData, encryptData } from "../services/CryptoService";
import LoginResponse, {
  UserResponse,
} from "../features/auth/data/LoginResponse";
import SignUpRequest from "@/features/auth/data/SignUpRequest";
import AuthApiService from "@/features/auth/services/AuthApiService";
import { ClientResponse } from "@/features/auth/data/ClientResponse";
import useResponse from "@/services/useResponse";
import ShowToast from "@/components/ShowToast";

interface AuthContextType {
  // updatePermissions: (userResponse: UserResponse) => void;
  updateUserData: (user: LoginResponse) => void;
  token: string | null;
  user: UserResponse | null;
  signupRequestUserData: SignUpRequest | undefined;
  setSignUpRequestUserData: (data: SignUpRequest) => void;
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
  const [signupRequestUserData, setSignUpRequestUserData] =
    useState<SignUpRequest>();
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
    clientResponse.handler(() => authApiService.getUserDetail(), {
      success(data) {
        setUserDetail(data);
        localStorage.setItem("userDetail", JSON.stringify(data));
        ShowToast({ type: "success", message: "Sync successfull!" });
      },
      error(errorMessage) {
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
