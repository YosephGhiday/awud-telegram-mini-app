import BottomNavBar from "./BottomNavBar";
import Header from "./Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-white max-w-[500px] flex flex-col  gap-2">
      <Header />
      {children}
      <BottomNavBar />
    </div>
  );
}
