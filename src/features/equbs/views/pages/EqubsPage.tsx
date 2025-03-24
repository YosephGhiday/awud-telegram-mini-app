import DefaultLayout from "@/components/layout/DefaultLayout";
import DiscoverEqubsSection from "@/features/equbs/views/components/DiscoverEqubsSection";
import DetailedMyEqubsSection from "../components/DetailedMyEqubsSection";

export default function EqubsPage() {
  return (
    <DefaultLayout>
      <div className="w-full flex flex-col gap-5 px-5">
        <DetailedMyEqubsSection />
        <DiscoverEqubsSection />
      </div>
    </DefaultLayout>
  );
}
