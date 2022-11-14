const Bonus = require("../src/Bonus");
const { ERROR_MESSAGE } = require("../src/constant/Constant");

let lottoNumbers = [1, 2, 3, 4, 5, 6];

describe("보너스 클래스 테스트", () => {
  test("보너스 번호가 숫자가 아닌경우 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("이십삼", lottoNumbers);
    }).toThrow(ERROR_MESSAGE.INVALID_BONUS_NUMBER.NOT_A_NUMBER);
  });

  test("보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("6", lottoNumbers);
    }).toThrow(ERROR_MESSAGE.INVALID_BONUS_NUMBER.IS_DUPLICATED);
  });

  test("보너스 번호가 1보다 작거나 45보다 큰 경우 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("47", lottoNumbers);
    }).toThrow(ERROR_MESSAGE.INVALID_BONUS_NUMBER.NOT_IN_RANGE);
  });

  test("보너스 번호가 1보다 작거나 45보다 큰 경우 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("0", lottoNumbers);
    }).toThrow(ERROR_MESSAGE.INVALID_BONUS_NUMBER.NOT_IN_RANGE);
  });
});
