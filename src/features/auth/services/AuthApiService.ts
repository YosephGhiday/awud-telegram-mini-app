import ApiService from "../../../services/ApiServices";
import LoginResponse from "../data/LoginResponse";

export default class AuthApiService {
  private baseUrl = "/users";
  private api;

  constructor() {
    this.api = new ApiService();
  }

  async signin(data: any) {
    const response = await this.api
      .supportedMediaType()
      .post<LoginResponse>(this.baseUrl + "/login", data);

    return response;
  }

  async signup(data: any) {
    const response = await this.api
      .supportedMediaType()
      .post<LoginResponse>(this.baseUrl + "/register", data);

    return response;
  }

  async resetForgottenPassword(account: string) {
    const response = await this.api.post(
      `${this.baseUrl}/forgot_password/${account}`
    );
    return response;
  }
}
