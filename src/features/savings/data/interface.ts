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
