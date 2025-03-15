import BottomNavBar from "./BottomNavBar";
import Header from "./Header";
import { useAuth } from "@/context/AuthContext";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const { user } = useAuth();
  return (
    <div className="w-full h-screen overflow-y-scroll bg-white max-w-[500px] flex flex-col  gap-2">
      <Header user={user!} />
      {children}
      <BottomNavBar />
    </div>
  );
}
