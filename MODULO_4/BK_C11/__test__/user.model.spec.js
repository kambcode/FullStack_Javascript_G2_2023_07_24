import UserModel from "../src/models/user.model.js";

describe("User model test", () => {
  let userModel;

  beforeAll(() => {
    userModel = new UserModel();
  });

  afterAll(async () => {
    // await userModel.deleteUser(email);
  });

  it("should create a user", async () => {
    const dataMock = {
      name: "Roberto",
      lastName: "Molina",
      email: "robertoMo@gmail.com",
      password: "123456789",
    };

    const result = await userModel.createUser(dataMock);

    console.log("result: ", result);

    expect(result.id).toBeDefined();
    expect(result.firstName).toBeDefined();
    expect(result.lastName).toBeDefined();
    expect(result.email).toBeDefined();
    expect(result.password).toBeDefined();
  });

  it("should not create a duplicated user", async () => {
    const dataMock = {
      name: "Roberto",
      lastName: "Molina",
      email: "robertoMo@gmail.com",
      password: "123456789",
    };

    const result = await userModel.createUser(dataMock);

    expect(result.error).toEqual("Email already registered");
  });

  it("should find user by email", async () => {
    const email = "robertoMo@gmail.com";

    const result = await userModel.findUser(email);

    expect(result.id).toBeDefined();
    expect(result.firstName).toEqual("Roberto");
    expect(result.lastName).toEqual("Molina");
    expect(result.email).toEqual("robertomo@gmail.com");
    expect(result.password).toBeDefined();
  });
});
