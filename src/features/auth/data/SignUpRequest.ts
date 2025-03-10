export default interface SignUpRequest {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password?: string;
  gender: string;
  dateOfBirth: string;
  device: string;
}
