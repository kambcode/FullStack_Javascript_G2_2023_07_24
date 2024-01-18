import { forEach } from "../src/forEach.js";

describe("Index test", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  it("ForEach mock function", () => {
    forEach([1, 5, 8], mockCallback);

    expect(mockCallback.mock.calls).toHaveLength(3);
    expect(mockCallback.mock.calls[0][0]).toBe(1);
    expect(mockCallback.mock.calls[1][0]).toBe(5);
    expect(mockCallback.mock.results[0].value).toBe(43);

    const myMock = jest.fn();

    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(15)
      .mockReturnValueOnce(45);

    console.log(myMock(), myMock(), myMock(), myMock());
  });
});
