import BottomNavBar from "./BottomNavBar";
import Header from "./Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-gray-100/75 max-w-[500px] flex flex-col  gap-2 pt-20">
      <Header />
      {children}
      <BottomNavBar />
    </div>
  );
}
