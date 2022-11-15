const Lotto = require("../src/Lotto");
const { ERROR_MESSAGE } = require("../src/Utils");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.LOTTO.INVALID_LENGTH);
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0, 0]);
    }).toThrow(ERROR_MESSAGE.LOTTO.INVALID_LENGTH);
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.LOTTO.INVALID_LENGTH);
    expect(() => {
      new Lotto([]);
    }).toThrow(ERROR_MESSAGE.LOTTO.INVALID_LENGTH);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.LOTTO.DUPLICATE);
    expect(() => {
      new Lotto([1, 2, 4.55, 4.55, 5, 6]);
    }).toThrow(ERROR_MESSAGE.LOTTO.DUPLICATE);
    expect(() => {
      new Lotto([1, 2, 3, 5, 5, 60]);
    }).toThrow(ERROR_MESSAGE.LOTTO.DUPLICATE);
  });

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, "e", 5, 6]);
    }).toThrow(ERROR_MESSAGE.LOTTO.NAN);
    expect(() => {
      new Lotto(["$", 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.LOTTO.NAN);
    expect(() => {
      new Lotto(["$", 2, 4.55, 4.55, 5, 6]);
    }).toThrow(ERROR_MESSAGE.LOTTO.NAN);
  });

  test("로또 번호의 숫자가 1~45 범위가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 0, 5, 6]);
    }).toThrow(ERROR_MESSAGE.LOTTO.OVER_RANGE);
    expect(() => {
      new Lotto([1, 2, 3, 4, 40, 50]);
    }).toThrow(ERROR_MESSAGE.LOTTO.OVER_RANGE);
  });

  test("로또 번호가 소수의 형태로 입력되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4.55, 5, 6]);
    }).toThrow(ERROR_MESSAGE.LOTTO.NOT_INTEGER);
  });

  test("private #numbers 클래스 외부에서 접근한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.numbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
