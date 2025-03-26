import ApiService from "../../../services/ApiServices";
// import {
//   Saving,
// } from "../data/interface";
import { SavingsResponse } from "../data/SavingsResponse";

export default class SavingsApi {
  private extraUrl = "savings/accounts/";
  private api = new ApiService();

  async getMySavings() {
    const response = await this.api
      .addAuthorizationHeader()
      .get<SavingsResponse>(`${this.extraUrl}/self`);
    return response;
  }

  async addSaving(data: any) {
    const response = await this.api
      .addAuthorizationHeader()
      .post(`${this.extraUrl}/self`, data);
    return response;
  }
}
