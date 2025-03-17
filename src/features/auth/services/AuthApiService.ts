import ApiService from "../../../services/ApiServices";
import { ClientResponse } from "../data/ClientResponse";
import LoginResponse from "../data/LoginResponse";
import SignUpRequest from "../data/SignUpRequest";

export default class AuthApiService {
  private baseUrl = "/users";
  private api;

  constructor() {
    this.api = new ApiService();
  }

  async login(data: any) {
    const response = await this.api
      .supportedMediaType()
      .post<LoginResponse>(this.baseUrl + "/login", data);

    return response;
  }

  logout() {
    localStorage.clear();
  }

  async signup(data: SignUpRequest) {
    const response = await this.api
      .supportedMediaType()
      .post<LoginResponse>(this.baseUrl + "/register", data);

    return response;
  }

  async getUserDetail() {
    const response = await this.api
      .addAuthorizationHeader()
      .get<ClientResponse>(this.baseUrl + "/me");

    return response;
  }

  async changePassword(data: any) {
    const response = await this.api
      .addAuthorizationHeader()
      .put(this.baseUrl + "/users/change_password", data);

    return response;
  }

  async activateAccount(data: any) {
    const response = await this.api.patch(
      this.baseUrl + "/users/activate_account",
      data
    );

    return response;
  }

  async initializeForgotPassword(account: string) {
    const response = await this.api.post(
      `${this.baseUrl}/users/forgot_password/${account}`
    );
    return response;
  }

  async forgotPasswordConfirmCode(data: any) {
    const response = await this.api.post(
      this.baseUrl + "/users/activate_reset_password",
      data
    );

    return response;
  }

  async forgotPasswordNewPassword(data: any) {
    const response = await this.api.patch(
      this.baseUrl + "/users/reset_password/self",
      data
    );

    return response;
  }

  async updateNotificationToken(data: any) {
    const response = await this.api
      .addAuthorizationHeader()
      .post(this.baseUrl + "/notifications/device", data);

    return response;
  }

  async sendAccountActivationCode(phoneNumber: string) {
    const response = await this.api
      .addAuthorizationHeader()
      .patch(`${this.baseUrl}/users/activate_account/resend/${phoneNumber}`);

    return response;
  }

  async uploadClientIdImage(image: any) {
    const response = await this.api
      .addAuthorizationHeader()
      .post(this.baseUrl + "/clients/upload/id", image);
    return response;
  }

  async checkAppVersion() {
    const response = await this.api.get(this.baseUrl + "/app-version");

    return response;
  }

  async updateProfile(data: any) {
    const response = await this.api.post("/users/update_profile_request", data);
    return response;
  }
}
