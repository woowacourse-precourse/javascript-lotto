const Bonus = require("../src/Bonus");
const Lotto = require("../src/Lotto");
describe("보너스 번호 테스트", () => {
  test("보너스 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("a");
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 범위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(47);
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(8);
      new Lotto([1, 2, 3, 4, 7, 8]);
    }).toThrow("[ERROR]");
  });
});
