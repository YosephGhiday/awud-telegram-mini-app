import { AddressResponse } from "./AddressResponse";
import { UserResponse } from "./LoginResponse";

export interface ClientResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  username: string;
  profile: string;
  image: string;
  role: string;
  userRole: string;
  gender: string;
  dateOfBirth: string;
  device?: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  status: boolean;
  roles: [];
  client: Client;
}

export interface Client {
  id: string;
  clientCode: number;
  totalBalance: number;
  payableBalance: number;
  status: boolean;
  occupationType: string;
  organization: string;
  income: number;
  idimageNumber: string;
  IdimageNumber: string;
  IDImage: string;
  address?: AddressResponse;
  user: UserResponse;
  verificationStatus: string;
}
