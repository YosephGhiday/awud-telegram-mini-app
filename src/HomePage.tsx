import DefaultLayout from "@/components/layout/DefaultLayout";
import BalanceCard from "./components/BalanceCard";
import { useAuth } from "./context/AuthContext";
import AdSlider from "./features/ads/views/components/AdSlider";
import AdsApiService from "./features/ads/services/AdsApiService";
import useResponse from "./services/useResponse";
import { useState, useEffect } from "react";
import DiscoverEqubsSection from "./features/equbs/views/components/DiscoverEqubsSection";
import BannerResponse from "./features/ads/data/BannerResponse";

export default function HomePage() {
  const [ads, setAds] = useState<BannerResponse[]>([]);
  const adsResponse = useResponse<BannerResponse[]>();
  const adsApiService = new AdsApiService();
  const { userDetail } = useAuth();

  const getAds = () => {
    adsResponse.handler(() => adsApiService.getBanners(), {
      success(data) {
        setAds(data);
      },
      error(errorMessage) {
        console.log(errorMessage);
      },
    });
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <DefaultLayout>
      <div className="w-full flex flex-col gap-5 px-5">
        <BalanceCard user={userDetail!} />
        <AdSlider loading={adsResponse.loading} ads={ads} />
        <DiscoverEqubsSection />
      </div>
    </DefaultLayout>
  );
}
