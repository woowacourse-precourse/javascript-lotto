const Bonus = require("../src/model/Bonus");
const { ERROR_MESSAGE } = require("../src/constants");

describe("보너스 숫자 클래스 테스트", () => {
  test("보너스 숫자가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus('abcd', [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.NAN);
  });

  test("보너스 숫자가 당첨 번호에 이미 포함되어있으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("4", [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.DUPLICATE);
  });

  test("보너스 숫자가 1~45를 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(1001, [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.RANGE);
  });
});
