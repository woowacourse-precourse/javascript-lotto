const Lotto = require("../src/Lotto");
const { ERROR_MESSAGE } = require("../src/constant/Constant");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.INVALID_WINNING_NUMBER.INVALID_LENGTH);
  });

  test("로또 번호 개수가 6개가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.INVALID_WINNING_NUMBER.INVALID_LENGTH);
  });

  test("로또 번호에 1보다 작거나 45보다 큰 숫자가 포함되어있다면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 3, 4, 5, 6, 46]);
    }).toThrow(ERROR_MESSAGE.INVALID_WINNING_NUMBER.NOT_IN_RANGE);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.INVALID_WINNING_NUMBER.IS_DUPLICATED);
  });

  test("로또 번호가 숫자로만 이루어진 배열이 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, "이", 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.INVALID_WINNING_NUMBER.NOT_A_NUMBER);
  });
});
