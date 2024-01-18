import axios from "axios";

class UsersService {
  static async all() {
    const response = await axios.get("/users.json");

    return response.data;
  }
}

export default UsersService;
