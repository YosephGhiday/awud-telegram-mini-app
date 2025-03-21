import BottomNavBar from "./BottomNavBar";
import Header from "./Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-full h-screen overflow-y-scroll hide-scrollbar bg-[#F9F9F9] max-w-[500px] flex flex-col  gap-2 pt-20">
      <Header />
      {children}
      <BottomNavBar />
    </div>
  );
}
