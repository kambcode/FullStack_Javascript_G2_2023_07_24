import request from "supertest";
import server from "../app.js";

describe("app module end to end test (e2e)", () => {
  it("should get a message", async () => {
    const response = await request(server).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Hello world" });
  });
});
