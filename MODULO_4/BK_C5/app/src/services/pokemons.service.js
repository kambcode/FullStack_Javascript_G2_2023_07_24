import AxiosService from "./axios.service.js";

class PokemonService extends AxiosService {
  #url = "https://pokeapi.co/api/v2/pokemon";

  constructor() {
    super();
  }

  async getPokemons() {
    try {
      const response = await this.request("get", this.#url);

      return response;
    } catch (error) {
      console.error("PokemonService error:", error.message);
      throw error;
    }
  }
}

export default new PokemonService();
