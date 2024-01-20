import fs from "fs/promises";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "../common/dataBase.txt");

class UserModel {
  async createUser({ name, lastName, email, password }) {
    const existingData = await fs.readFile(filePath, "utf-8");
    const existingUser = JSON.parse(existingData || "[]");

    const existingEmail = existingUser.filter(
      (user) => user.email === email.toLowerCase()
    );

    if (existingEmail.length) {
      return { error: "Email already registered" };
    } else {
      const encryptedPassword = await bcrypt.hash(password, 10);
      const id = uuidv4();
      const userData = {
        id,
        firstName: name, //Wilmer
        lastName: lastName, //Gonzales
        email: email.toLowerCase(), //wilmergo@outlook.com
        password: encryptedPassword,
      };

      existingUser.push(userData);

      await fs.writeFile(filePath, JSON.stringify(existingUser));

      return userData;
    }
  }

  async findUser(email) {
    const existingData = await fs.readFile(filePath, "utf-8");
    const existingUser = JSON.parse(existingData || "[]");

    const user = existingUser.find(
      (user) => user.email === email.toLowerCase()
    );

    if (!user) {
      return { error: "Email not registered" };
    } else {
      return user;
    }
  }

  deleteUser(email) {}
}

export default UserModel;

// FUNCIONES

// export const createUser = async (email) => {
//   return email;
// };

// import { createUser } from "path";

// createUser(email);

// CLASES

// import UserModule from "path";

// const userModule = new UserModule();

// userModule.createUser(email);
