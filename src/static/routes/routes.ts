import GetStartedPage from "@/components/GetStartedPage";
import LoginPage from "@/features/auth/views/pages/LoginPage";
import SignUpPage from "@/features/auth/views/pages/SignUpPage";
import CreateAccountPage from "@/components/CreateAccountPage";
import ForgotPasswordPage from "@/features/auth/views/pages/ForgotPasswordPage";

interface PageRoute {
  path: string;
  isProtected?: boolean;
  element: React.FC;
}

const routes: PageRoute[] = [
  {
    path: "/awud-telegram-mini-app/get-started",
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
];

export { routes };
