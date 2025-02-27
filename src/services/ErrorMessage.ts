export default class ErrorMessage {
  static getErrorMessage(response: any) {
    let errorMessage;
    console.log(response);
    switch (response.status) {
      case "ERR_NETWORK":
      case "ECONNABORTED":
        errorMessage = "Cannot connect to server";
        break;
      case 400:
        errorMessage = response.data.message;
        break;
      case 409:
        errorMessage = response.data.message;
        break;
      case 401:
        errorMessage = response.data.message;
        break;
      case 500:
        errorMessage = "Server error. Try again later";
        break;
      case 201:
        errorMessage = "You are not authenticated";
        break;
      default:
        errorMessage =
          "Something unplanned has happen. We will figure it out soon";
        break;
    }
    return errorMessage;
  }
}
