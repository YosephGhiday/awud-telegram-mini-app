import { GetBaseResponseModel } from "@/static/interfaces/GetBaseResponseModel";

export interface PaginatedEqubResponse extends GetBaseResponseModel {
  content: EqubResponse[];
}

export interface EqubResponse {
  name: string;
  id: string;
  equbProduct: {
    id: string;
    repaidEvery: string;
    lotteryPeriod: string;
    numberOfMembers: number;
    amount: number;
    currencyId: string;
    createdBy: string;
    updatedBy: string;
    deletedAt: string;
    equbType: string;
  };
  round: number;
  prize: number;
  serviceFee: number;
  startDate: string;
  endDate: string;
  visibility: string;
  lotteryType: string;
  status: string;
  lockDate: string;
  closedDate: string;
  createdBy: string;
  members: EqubMemberResponse[];
  updatedBy: string;
  role: string;
  equbPaymentSchedule: [
    {
      id: string;
      equb: string;
      installment: number;
      amount: number;
      fromDate: string;
      dueDate: string;
      penaltyStartDate: string;
    }
  ];
  nextPayment: [
    {
      id: string;
      equb: string;
      installment: number;
      amount: number;
      fromDate: string;
      dueDate: string;
      penaltyStartDate: string;
    }
  ];
}

export interface EqubMemberResponse {
  id: string;
  equb: string;
  client: {
    id: string;
    clientCode: number;
    occupationType: string;
    income: number;
    IDImage: string;
    IDImageNumber: string;
    address: {
      country: string;
      region: string;
      zone: string;
      wereda: string;
      tabiya: string;
      ketena: string;
    };
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phoneNumber: string;
      userName: string;
      profile: string;
      image: string;
      role: string;
      userRole: string;
      gender: string;
      dateOfBirth: string;
      device: string;
      createdAt: string;
      updatedAt: string;
      deleted: true;
      status: true;
      roles: [
        {
          id: string;
          name: string;
          permissions: [
            {
              id: string;
              name: string;
            }
          ];
        }
      ];
      client: string;
    };
    userId: string;
    totalBalance: number;
    payableBalance: number;
    organization: string;
    activationDate: string;
    image: string;
    verificationStatus: string;
    idimage: string;
    idimageNumber: string;
  };
  createdBy: string;
  code: string;
  addMembers: number;
  reason: string;
  numberOfLotteries: number;
  status: string;
  joinedDate: string;
}
