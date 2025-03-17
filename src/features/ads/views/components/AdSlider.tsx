import { Pagination } from "swiper/modules";
import BannerResponse from "../../data/BannerResponse";
import { Swiper, SwiperSlide } from "swiper/react";
// import { imageRoute } from "@/services/ApiServices";
import { useNavigate } from "react-router-dom";
import WelcomeImage from "@/assets/images/Welcome.png";

import "swiper/swiper-bundle.css";

interface AdSliderProps {
  ads?: BannerResponse[];
  loading: boolean;
}

const SkeletonBox = () => (
  <div
    className={`bg-gray-300/90 p-4 w-full h-[135px] rounded-md animate-pulse`}
  ></div>
);

export default ({ ads, loading }: AdSliderProps) => {
  const navigate = useNavigate();
  const handleClick = (ad: BannerResponse) => {
    switch (ad.linkType) {
      case "EQUB":
        navigate("/awud-telegam-mini-app/equbs");
        break;
      case "SAVING":
        navigate("/awud-telegam-mini-app/savings");
        break;
      case "EXTERNAL":
        window.open(ad.link, "_blank");
        break;
      case "NOTIFICATION":
        break;
      case "TRANSACTION":
        navigate("/awud-telegam-mini-app/transactions");
        break;
    }
  };

  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      autoplay={true}
      className="w-full"
    >
      {!loading &&
        ads?.map((ad, index) => (
          <SwiperSlide
            className="w-full mb-2 px-2 "
            onClick={() => handleClick(ad)}
            key={index}
          >
            <img
              className="w-full shadow-lg h-[135px] rounded-lg overflow-hidden"
              //   src={`${imageRoute}/${ad.image}`}
              src={WelcomeImage}
            />
          </SwiperSlide>
        ))}
      {(loading || ads?.length == 0) && (
        <SwiperSlide className="w-full mb-2 px-2 ">
          <SkeletonBox />
        </SwiperSlide>
      )}
      {(loading || ads?.length == 0) && (
        <SwiperSlide className="w-full mb-2 px-2 ">
          <SkeletonBox />
        </SwiperSlide>
      )}
      {(loading || ads?.length == 0) && (
        <SwiperSlide className="w-full mb-2 px-2 ">
          <SkeletonBox />
        </SwiperSlide>
      )}
      ...
    </Swiper>
  );
};
