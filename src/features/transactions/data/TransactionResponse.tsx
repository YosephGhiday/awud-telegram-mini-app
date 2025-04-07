import { GetBaseResponseModel } from "@/static/interfaces/GetBaseResponseModel";

export interface TransactionResponse {
  id: string;
  clientId: string;
  reference: string;
  amount: number;
  transactionType: string;
  status: boolean;
  date: string;
}

export interface TransactionsResponse extends GetBaseResponseModel {
  content: TransactionResponse[];
}
