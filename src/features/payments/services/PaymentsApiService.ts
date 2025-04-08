import ApiService from "@/services/ApiServices";

export default class PaymentsApiServce {
  private api = new ApiService();

  async depostMoneyInitiate(data: any) {
    const response = await this.api
      .addAuthorizationHeader()
      .post("clients/deposit/electronic/initiate", data);
    return response;
  }
}
