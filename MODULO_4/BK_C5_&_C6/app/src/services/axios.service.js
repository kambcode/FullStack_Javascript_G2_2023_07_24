import axios from "axios";

class AxiosService {
  constructor() {}

  async request(method, url, data = null) {
    try {
      const response = await axios({
        method,
        url,
        data,
      });

      return response.data;
    } catch (error) {
      console.error("Axios request error:", error.message);
      throw error;
    }
  }
}

export default AxiosService;
