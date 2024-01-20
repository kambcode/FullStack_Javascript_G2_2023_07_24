import request from "supertest";
import app from "../app.js";

describe("Auth service e2e", () => {
  it("should be registrate", async () => {
    const registrationData = {
      name: "Daniel",
      lastName: "Lozano",
      email: "daniel@gmail.com",
      password: "123456789",
    };

    const response = await request(app)
      .post("/auth/register")
      .send(registrationData);

    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("User registered successfully");
  });

  it("should login with the user data", async () => {
    const loginData = {
      email: "daniel@gmail.com",
      password: "123456789",
    };

    const response = await request(app).post("/auth/login").send(loginData);

    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("User logged successfully");
  });

  it("should not login the user", async () => {
    const loginData = {
      email: "daniel@gmail.com",
      password: "123",
    };

    const response = await request(app).post("/auth/login").send(loginData);

    expect(response.status).toBe(400);
    expect(response.body.message).toEqual("Verify email or password");
  });
});
