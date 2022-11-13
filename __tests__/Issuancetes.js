const Issuance = require("../src/Issuance");

describe("로또 발급 예외 테스트", () => {
  test("6개의 번호가 아닌 경우", () => {
    expect(() => {
      new Issuance([1, 45, 30, 20, 42]);
    }).toThrow("[ERROR]");
  });
  test("중복되는 숫자가 있는 경우", () => {
    expect(() => {
      new Issuance([1, 1, 45, 30, 20, 42]);
    }).toThrow("[ERROR]");
  });
});
