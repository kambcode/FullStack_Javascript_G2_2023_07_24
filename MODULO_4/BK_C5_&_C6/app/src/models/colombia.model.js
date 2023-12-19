import AxiosService from "../services/axios.service.js";

class ColombiaModel extends AxiosService {
  url = "https://api-colombia.com/api/v1/Department";
  data = [];

  async getAllData() {
    try {
      const response = await this.request("get", this.url);

      return response;
    } catch (error) {
      console.error("ColombiaService error:", error.message);
      throw error;
    }
  }
}

export default new ColombiaModel();