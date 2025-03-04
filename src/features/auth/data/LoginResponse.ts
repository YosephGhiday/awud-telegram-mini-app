export default interface LoginResponse {
  token: string;
  user: UserResponse;
}

export interface UserResponse {
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
  client: string;
}
