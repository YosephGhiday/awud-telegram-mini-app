import { ClientResponse } from "@/features/auth/data/ClientResponse";

export interface Saving {
  id: string;
  name: string;
  clientId: string;
  accountNumber: string;
  product: {
    id: string;
    name: string;
    repayedEvery: string;
    minimumBalance: number;
    maximumBalance: number;
    description: string;
  };
  currencyCode: string;
  totalDeposit: number;
  totalWithdraw: number;
  status: string;
  savingPeriod: string;
  createdAt: Date;
  repaidEvery?: string;
}

export interface AddSaving {
  repayedEvery: string;
  minimumBalance: number;
  maximumBalance: number;
  name: string;
  clientId: string;
  savingPeriod: string;
}

export interface SavingTransaction {
  id: string;
  clientId: string;
  client: ClientResponse;
  savingsAccountId: string;
  savingsProductId: string;
  amount: number;
  penalty: number;
  transactionType: string;
  status: boolean;
  txnReference: string;
  date: string;
  createdById: string;
  createdByName: string;
  paymentCode: string;
  isPenalty: boolean;
  savingsChargeTransaction: {
    id: string;
    savingsCharge: {
      id: string;
      chargeId: string;
      charge: {
        id: string;
        name: string;
        chargeAppliesTo: string;
        chargeTimeAt: string;
        chargeCalculationType: string;
        amount: number;
        isPenalty: true;
        isActive: true;
      };
      clientId: string;
      savingsAccountId: string;
      date: string;
      amount: number;
    };
    savingsTransaction: string;
    amount: number;
  };
}
