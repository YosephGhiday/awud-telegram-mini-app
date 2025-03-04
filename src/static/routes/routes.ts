import GetStartedPage from "../../components/GetStartedPage";
import LoginPage from "../../features/auth/views/pages/LoginPage";

interface PageRoute {
  path: string;
  isProtected?: boolean;
  element: React.FC;
}

const routes: PageRoute[] = [
  {
    path: "/awud-telegram-mini-app/",
    element: GetStartedPage,
  },
  {
    path: "/awud-telegram-mini-app/login",
    element: LoginPage,
  },
];

export { routes };
