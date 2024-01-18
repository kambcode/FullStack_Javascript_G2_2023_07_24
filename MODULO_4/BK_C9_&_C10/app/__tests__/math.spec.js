import { sum, sub, mul, div } from "../src/math.js";

describe("This is a unit test module", () => {
  it("const is true", () => {
    const lala = true;
    expect(lala).toBeTruthy();
  });

  it("const is not true", () => {
    const lala = false;
    expect(lala).toBeFalsy();
  });
});

describe("set of math test", () => {
  it("should sum", () => {
    const response = sum(5, 9);

    expect(response).toBe(14);
    expect(response).toEqual(14);
    expect(response).toBeGreaterThanOrEqual(14);
    expect(response).toBeCloseTo(14.004);
  });

  it("should substract", () => {
    const response = sub(12, 16);

    expect(response).toBeLessThan(0);
  });

  it("should divide ", () => {
    const response = div(8, 2);

    expect(response).toEqual(4);
  });

  it("should multiply", () => {
    const response = mul(4, 3);

    expect(response).toBeGreaterThan(10);
  });
});

describe("matchers module", () => {
  it("should match strings", () => {
    expect("Hello world").toMatch(/world/);
    expect("Hello workd").not.toMatch(/world/);
  });
  it("should match arrays", () => {
    const arr = [1, 2, 3, 8, 10];

    expect(arr).toContain(8);
    expect(arr).not.toContain(5);
  });
});
