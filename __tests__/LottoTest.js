/* eslint-disable */
const Lotto = require("../src/Lotto");
const { ERROR_MESSAGES } = require("../src/Constants");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);

    expect(() => {
      new Lotto([2, 11, 17, 34, 39, 2]);
    }).toThrow(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
  });

  test("로또 번호가 숫자로만 이루어지지 않은 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, "X", "Y", "Z"]);
    }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_TYPE);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "-"]);
    }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_TYPE);
  });

  test("로또의 각 자리의 번호가 1 ~ 45가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 55, 6]);
    }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_RANGE);

    expect(() => {
      new Lotto([1, 2, 3, 4, 0, 6]);
    }).toThrow(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
  });

  test("로또 클래스 정상 작동 테스트", () => {
    const exampleOne = [1, 2, 3, 4, 5, 6];
    const exampleTwo = [3, 5, 10, 37, 38, 42];
    const normalOperationOne = new Lotto(exampleOne);
    const normalOperationTwo = new Lotto(exampleTwo);

    expect(normalOperationOne.getLottoWinningNumber()).toEqual(exampleOne);
    expect(normalOperationTwo.getLottoWinningNumber()).toEqual(exampleTwo);
  });
});
