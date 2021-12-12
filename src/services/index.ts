import http from "../axios-common";

class DataService {
  getCurrentTime(): Promise<any> {
    return http.get("http://worldclockapi.com/api/json/utc/now");
  }
}

export default new DataService();