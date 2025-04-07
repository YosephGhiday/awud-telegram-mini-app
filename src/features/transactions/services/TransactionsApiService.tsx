import ApiService from "../../../services/ApiServices";
import { TransactionsResponse } from "../data/TransactionResponse";

export default class TransactionsApiService {
  private api = new ApiService();

  async getAllTransactions() {
    const response = await this.api
      .addAuthorizationHeader()
      .get<TransactionsResponse>(`clients/transactions/self`);
    return response;
  }
}
