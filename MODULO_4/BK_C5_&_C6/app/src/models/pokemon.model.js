import AxiosService from "../services/axios.service.js";

class PokemonModel extends AxiosService {
  url = "https://pokeapi.co/api/v2/pokemon";
  data = [];

  async getAllData() {
    try {
      const response = await this.request("get", this.url);

      return response;
    } catch (error) {
      console.error("PokemonService error:", error.message);
      throw error;
    }
  }
}

export default new PokemonModel();
