import ApiService from "@/services/ApiServices";
import BannerResponse from "../data/BannerResponse";

export default class AdsApiSrevice {
  private baseUrl = "/banners";
  private api;

  constructor() {
    this.api = new ApiService();
  }

  getBanners() {
    const response = this.api
      .addAuthorizationHeader()
      .get<BannerResponse[]>(this.baseUrl);
    return response;
  }
}
