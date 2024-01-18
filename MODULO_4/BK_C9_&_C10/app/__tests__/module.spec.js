import baz, { bar, foo } from "../src/module.js";

jest.mock("../src/module.js", () => {
  const originalModule = jest.requireActual("../src/module.js");

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => "baz mocked"),
    foo: "foo mocked",
  };
});

describe("Modules test", () => {
  it("should do a partial block", () => {
    const bazResult = baz();

    expect(bazResult).toBe("baz mocked");
    expect(baz).toHaveBeenCalled();

    expect(foo).toBe("foo mocked");
    expect(bar()).toBe("bar");
  });
});
