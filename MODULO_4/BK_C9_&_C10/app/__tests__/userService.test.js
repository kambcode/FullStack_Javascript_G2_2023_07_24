import axios from "axios";
import UsersService from "../src/users.js";

jest.mock("axios");

// Antes cada it
// beforeEach(() => {});
// Antes todos it
// beforeAll(() => {});
//Después cada it
// afterEach(() => {});
//Después todos it
// afterAll(() => {});

describe("UserService test", () => {
  beforeAll(() => {
    const users = [
      { name: "Bob", age: "18" },
      { name: "Alexa", age: "22" },
    ];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);
  });

  it("should return data from all method", async () => {
    const data = await UsersService.all();

    expect(data).toEqual([
      { name: "Bob", age: "18" },
      { name: "Alexa", age: "22" },
    ]);
  });
});
