const { ERROR_MESSAGE } = require("../src/constants");
const WinningLotto = require("../src/WinningLotto");

describe("당첨 로또 클래스 테스트", () => {
  test("당첨 번호가 6자리 숫자가 아니면 예외가 발생한다.", () => {
    const winningLotto = new WinningLotto();
    expect(() => {
      winningLotto.setNumbers([1, 3, 5, 23, 12, 34, 6]);
    }).toThrow(ERROR_MESSAGE.WINNING_LOTTO_DUPLICATION_ERROR);
  });

  test("당첨 번호에 중복이 있으면 예외가 발생한다.", () => {
    const winningLotto = new WinningLotto();
    expect(() => {
      winningLotto.setNumbers([1, 3, 5, 23, 12, 5]);
    }).toThrow(ERROR_MESSAGE.WINNING_LOTTO_DUPLICATION_ERROR);
  });

  test("보너스 번호에 중복이 있으면 예외가 발생한다.", () => {
    const winningLotto = new WinningLotto();
    expect(() => {
      winningLotto.setNumbers([1, 3, 5, 23, 12, 34]);
      winningLotto.setBonus(1);
    }).toThrow(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION_ERROR);
  });
  
  test("당첨 번호가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    const winningLotto = new WinningLotto();
    expect(() => {
      winningLotto.setNumbers([1, 3, 5, 23, 12, 47]);
    }).toThrow(ERROR_MESSAGE.NUMBER_RANGE_ERROR);
  });
  
  test("보너스 번호가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    const winningLotto = new WinningLotto();
    expect(() => {
      winningLotto.setBonus(47);
    }).toThrow(ERROR_MESSAGE.NUMBER_RANGE_ERROR);
  });

  test("당첨 번호가 숫자가 아니면 예외가 발생한다.", () => {
    const winningLotto = new WinningLotto();
    expect(() => {
      winningLotto.setNumbers([1, 3, 5, 23, 12, '34hello']);
    }).toThrow(ERROR_MESSAGE.NUMBER_IS_NAN_ERROR);
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    const winningLotto = new WinningLotto();
    expect(() => {
      winningLotto.setBonus('34hello');
    }).toThrow(ERROR_MESSAGE.NUMBER_IS_NAN_ERROR);
  });
});
