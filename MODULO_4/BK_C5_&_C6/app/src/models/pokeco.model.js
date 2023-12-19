import AxiosService from "../services/axios.service.js";

class PokeCo extends AxiosService {
  data = [];

  get() {
    return this.data;
  }

  create({ id, pokemon, department }) {
    this.data.push({ id, pokemon, department });
  }

  update(id, data) {
    const dataUpdated = this.data.map((item) => {
      if (item.id === id) {
        return { ...item, ...data }; //spread operator
      } else {
        return item;
      }
    });

    this.data = dataUpdated;
  }

  delete(id) {
    const newData = this.data.filter((item) => item.id !== id);

    this.data = newData;
  }
}

export default new PokeCo();
