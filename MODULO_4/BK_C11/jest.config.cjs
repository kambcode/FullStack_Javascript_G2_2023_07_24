module.export = {
  testEnviroment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "json", "node"],
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
};
