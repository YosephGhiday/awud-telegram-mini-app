import ApiService from "../../../services/ApiServices";
import { Saving, SavingTransaction } from "../data/interface";
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

  async getOneSaving(id: string) {
    const response = await this.api
      .addAuthorizationHeader()
      .get<Saving>(`${this.extraUrl}/${id}`);
    return response;
  }

  async getSavingTransactions(id: string) {
    const response = await this.api
      .addAuthorizationHeader()
      .get<SavingTransaction[]>(`savings/transactions/account/${id}`);
    return response;
  }
}
