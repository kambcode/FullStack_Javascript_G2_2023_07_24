import AxiosService from "./axios.service.js";

class ColombiaService extends AxiosService {
  url = "https://api-colombia.com/api/v1/Department";

  async getAllDepartments() {
    try {
      const response = await this.request("get", this.url);
      return response;
    } catch (error) {
      console.error("ColombiaService error:", error.message);
      throw error;
    }
  }
}

export default new ColombiaService();
