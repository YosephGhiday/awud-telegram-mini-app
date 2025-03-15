import GetStartedPage from "@/components/pages/GetStartedPage";
import LoginPage from "@/features/auth/views/pages/LoginPage";
import SignUpPage from "@/features/auth/views/pages/SignUpPage";
import CreateAccountPage from "@/features/auth/views/pages/CreateAccountPage";
import ForgotPasswordPage from "@/features/auth/views/pages/ForgotPasswordPage";
import ConfirmationPage from "@/features/auth/views/pages/ConfimationPage";
import CreatePinPage from "@/features/auth/views/pages/CreatePinPage";
import SuccessfullyChangedPasswordPage from "@/features/auth/views/pages/SuccessfullyChangedPasswordPage";

interface PageRoute {
  path: string;
  isProtected?: boolean;
  element: React.FC;
}

const routes: PageRoute[] = [
  {
    // path: "/awud-telegram-mini-app/get-started",
    path: "/awud-telegram-mini-app/",
    element: GetStartedPage,
  },
  {
    path: "/awud-telegram-mini-app/create-account",
    element: CreateAccountPage,
  },
  {
    path: "/awud-telegram-mini-app/sign-up",
    element: SignUpPage,
  },
  {
    path: "/awud-telegram-mini-app/login",
    element: LoginPage,
  },
  {
    path: "/awud-telegram-mini-app/forgot-password",
    element: ForgotPasswordPage,
  },
  {
    path: "/awud-telegram-mini-app/confirmation",
    element: ConfirmationPage,
  },
  {
    path: "/awud-telegram-mini-app/create-pin",
    element: CreatePinPage,
  },
  {
    path: "/awud-telegram-mini-app/successfully-changed-password",
    element: SuccessfullyChangedPasswordPage,
  },
];

export { routes };
