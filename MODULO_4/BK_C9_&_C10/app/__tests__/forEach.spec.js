import {
  forEach,
  getHelloEarth,
  getRandomNumber,
  anotherFunction,
  user,
} from "../src/forEach.js";

jest.mock("../src/forEach.js", () => {
  const originalModule = jest.requireActual("../src/forEach.js");

  return {
    __esModule: true,
    ...originalModule,
    getHelloEarth: "Hello world",
    getRandomNumber: jest.fn(() => 200),
    anotherFunction: jest.fn(() => "Hello world 200"),
  };
});

describe("Index test", () => {
  const mockCallback = jest.fn((x) => {
    console.log("this is a number: ", x);
  });
  it("ForEach mock function", () => {
    forEach([1, 5, 8], mockCallback);

    console.log("mockCallback: ", mockCallback.mock);

    expect(mockCallback.mock.calls).toHaveLength(3);

    // expect(mockCallback.mock.calls).toHaveLength(3);
    // expect(mockCallback.mock.calls[0][0]).toBe(1);
    // expect(mockCallback.mock.calls[1][0]).toBe(5);
    // expect(mockCallback.mock.results[0].value).toBe(43);

    // const myMock = jest.fn();

    // myMock
    //   .mockReturnValueOnce(10)
    //   .mockReturnValueOnce(15)
    //   .mockReturnValueOnce(45);

    // console.log(myMock(), myMock(), myMock(), myMock());
  });

  it("test mock", () => {
    const result = getHelloEarth();

    expect(result).toBe("Hello Earth");
  });

  it("unit getRandomNumber", () => {
    const result = getRandomNumber();

    expect(result).toBeGreaterThanOrEqual(0);
  });

  it("unit test another function", () => {
    const response = anotherFunction();

    expect(response).toEqual("Hello world 200");
    // expect(response).toEqual("Hello Earth 321"); //Roberto
    // expect(response).toEqual("Hello Earth 200"); //Wilmer
    // expect(response).toEqual("Hello Earth 564"); //Edinson
    // expect(response).toEqual("Hello Earth 456"); //Juliana
  });

  it("test user", () => {
    const userSpy = jest.spyOn(user, "getName").mockReturnValue("Juliana");

    const response = user.getName();

    console.log("userSpy: ", userSpy);

    expect(userSpy).toHaveBeenCalled();
    expect(response).toEqual("Juliana");

    userSpy.mockRestore();

    const response2 = user.getName();

    expect(response2).toEqual("Wilmer");
  });

  //unit test -> no mock
});
