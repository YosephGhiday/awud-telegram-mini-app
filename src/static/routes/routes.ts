import GetStartedPage from "@/components/pages/GetStartedPage";
import LoginPage from "@/features/auth/views/pages/LoginPage";
import SignUpPage from "@/features/auth/views/pages/SignUpPage";
import CreateAccountPage from "@/features/auth/views/pages/CreateAccountPage";
import ForgotPasswordPage from "@/features/auth/views/pages/ForgotPasswordPage";
import SuccessfullyChangedPasswordPage from "@/features/auth/views/pages/SuccessfullyChangedPasswordPage";
import SettingsPage from "@/features/auth/views/pages/SettingsPage";
import ChangePinPage from "@/features/auth/views/pages/ChangePinPage";
import ProfileDetailPage from "@/features/auth/views/pages/ProfileDetailPage";
import TermsPage from "@/components/pages/Termspage";
import ContactUsPage from "@/components/pages/ContactUsPage";
import ForgotPasswordCreatePinPage from "@/features/auth/views/pages/ForgotPasswordCreatePinPage";
import ForgotPasswordConfirmationPage from "@/features/auth/views/pages/ForgotPasswordConfimationPage";
import SignUpConfirmationPage from "@/features/auth/views/pages/SignUpConfirmationPage";
import NewPinPage from "@/features/auth/views/pages/NewPinPage";
import EqubsPage from "@/features/equbs/views/pages/EqubsPage";
import SavingsPage from "@/features/savings/views/pages/SavingsPage";

import HomePage from "@/HomePage";

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

  {
    path: "/awud-telegram-mini-app/forgot-password-confirmation/:phone",
    element: ForgotPasswordConfirmationPage,
  },
  {
    path: "/awud-telegram-mini-app/forgot-password-create-pin/:phone",
    element: ForgotPasswordCreatePinPage,
  },
  {
    path: "/awud-telegram-mini-app/new-pin",
    element: NewPinPage,
  },
  {
    path: "/awud-telegram-mini-app/sign-up-confirmation",
    element: SignUpConfirmationPage,
  },
  {
    path: "/awud-telegram-mini-app/successfully-changed-password",
    element: SuccessfullyChangedPasswordPage,
  },
  {
    path: "/awud-telegram-mini-app/",
    element: HomePage,
    isProtected: true,
  },
  {
    path: "/awud-telegram-mini-app/settings",
    element: SettingsPage,
    isProtected: true,
  },
  {
    path: "/awud-telegram-mini-app/profile-detail",
    element: ProfileDetailPage,
    isProtected: true,
  },
  {
    path: "/awud-telegram-mini-app/change-pin",
    element: ChangePinPage,
    isProtected: true,
  },
  {
    path: "/awud-telegram-mini-app/terms-and-conditions",
    element: TermsPage,
  },
  {
    path: "/awud-telegram-mini-app/contact-us",
    element: ContactUsPage,
    isProtected: true,
  },
  {
    path: "/awud-telegram-mini-app/equbs",
    element: EqubsPage,
    isProtected: true,
  },
  {
    path: "/awud-telegram-mini-app/savings",
    element: SavingsPage,
    isProtected: true,
  },
];

export { routes };
