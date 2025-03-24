import ApiService from "../../../services/ApiServices";
// import {
//   Saving,
// } from "../data/interface";
import { SavingsResponse } from "../data/SavingsResponse";

export default class SavingsApi {
  private extraUrl = "savings/accounts/";
  private api = new ApiService();

  async getMyEqubs() {
    const response = await this.api
      .addAuthorizationHeader()
      .get<SavingsResponse>(`${this.extraUrl}/self`);
    return response;
  }
}
