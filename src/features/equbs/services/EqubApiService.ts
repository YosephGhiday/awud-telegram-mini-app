import ApiService from "@/services/ApiServices";
import { EqubMemberResponse, EqubResponse } from "../data/EqubResponse";

export class EqubApiService {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async getFeaturedEqubs() {
    const response = await this.apiService
      .addAuthorizationHeader()
      .get<EqubResponse[]>("equbs/featured");
    return response;
  }

  async getDailyProducts() {
    const response = await this.apiService
      .addAuthorizationHeader()
      .get<EqubResponse[]>("equbs/products/daily");
    return response;
  }

  async getMonthlyProducts() {
    const response = await this.apiService
      .addAuthorizationHeader()
      .get<EqubResponse[]>("equbs/products/monthly");
    return response;
  }

  async getWeeklyProducts() {
    const response = await this.apiService
      .addAuthorizationHeader()
      .get<EqubResponse[]>("equbs/products/weekly");
    return response;
  }

  //   async joinEqub(equbId: string, join: JoinEqubRequestEntity) {
  //     const joinModel = {
  //       numberOflottoeries: join.numberOflottoeries,
  //     };
  //     const response = await this.apiService
  //       .addAuthorizationHeader()
  //       .post(`equbs/join/${equbId}`, joinModel);
  //     return response;
  //   }

  async getMyEqubs() {
    const response = await this.apiService
      .addAuthorizationHeader()
      .get<EqubResponse[]>("equbs/me");
    return response;
  }

  async getMyEqubDetail(equbId: string) {
    const response = await this.apiService
      .addAuthorizationHeader()
      .get<EqubResponse>(`equbs/${equbId}`);
    return response;
  }

  async getProductSummery() {
    const response = await this.apiService
      .addAuthorizationHeader()
      .get("equbs/products");
    return response;
  }

  //   async submitBankTransaction(data: BankTransactionRequestEntity) {
  //     const response = await this.apiService
  //       .addAuthorizationHeader()
  //       .post("", data); // Note: Adjust the endpoint as necessary
  //     return response;
  //   }

  async getEqubWinners(equbId: string) {
    const response = await this.apiService
      .addAuthorizationHeader()
      .get<EqubMemberResponse[]>(`equbs/lotteries/${equbId}`);
    return response;
  }

  //   async checkEqubPaymentAmount(amount: CheckEqubPaymentAmountRequestEntity) {
  //     const response = await this.apiService
  //       .addAuthorizationHeader()
  //       .get("equb_payments/next/info", amount);
  //     return response;
  //   }
}
