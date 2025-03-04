import GetStartedPage from "../../components/GetStartedPage";
import LoginPage from "../../features/auth/views/pages/LoginPage";

interface PageRoute {
  path: string;
  isProtected?: boolean;
  element: React.FC;
}

const routes: PageRoute[] = [
  {
    path: "/",
    element: GetStartedPage,
  },
  {
    path: "/login",
    element: LoginPage,
  },
];

export { routes };
