const LottoGame = require("../src/LottoGame");

describe("LottoGame 클래스 isPurchaseAmountValid 함수 테스트", () => {
  test("문자를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGame().isPurchaseAmountValid("abc");
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });

  test("1,000으로 나누어 떨어지지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoGame().isPurchaseAmountValid(8750);
    }).toThrow("[ERROR] 1,000으로 나누어 떨어지는 금액을 입력해주세요.");
  });
});

describe("LottoGame 클래스 isWinningNumbersValid 함수 테스트", () => {
  test("값의 개수가 6을 초과하면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGame().isWinningNumbersValid([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 값을 6개만 입력해주세요.");
  });

  test("문자를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGame().isWinningNumbersValid(["a", "b", 1, 2, 3, 4]);
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });

  test("1~45 범위를 벗어나는 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGame().isWinningNumbersValid([1, 2, 3, 4, 5, 55]);
    }).toThrow("[ERROR] 1~45 범위의 값만 입력해주세요.");
  });
});
