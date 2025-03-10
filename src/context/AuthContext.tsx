import { createContext, useContext, useEffect, useState } from "react";
// import { decryptData, encryptData } from "../services/CryptoService";
import LoginResponse, {
  UserResponse,
} from "../features/auth/data/LoginResponse";
import SignUpRequest from "@/features/auth/data/SignUpRequest";

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
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserResponse | null>(null);
  const [hasForgottenPassword, setHasForgottenPassword] =
    useState<boolean>(false);
  const [signupRequestUserData, setSignUpRequestUserData] =
    useState<SignUpRequest>();
  const [forgotPasswordAccount, setForgotPasswordAccount] = useState<string>();
  const [forgotPasswordCode, setForgotPasswordCode] = useState<string>();

  const updateUserData = (userResponse: LoginResponse) => {
    // const encryptedUser = encryptData(
    //   userResponse.user,
    //   import.meta.env.VITE_KEY!
    // );
    localStorage.setItem("token", userResponse.token);
    // localStorage.setItem("data", String(encryptedUser));
    localStorage.setItem("data", String(userResponse.user));
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

  getUserData ?? "";

  useEffect(() => {
    // getUserData();
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
