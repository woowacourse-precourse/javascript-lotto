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

  test("값이 문자면 예외가 발생한다.", () => {
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

describe("LottoGame 클래스 isBonusNumberValid 함수 테스트", () => {
  test("값이 문자면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGame().isBonusNumberValid([1, 2, 3, 4, 5, 6], "a");
    }).toThrow("[ERROR] 숫자를 입력해주세요.");
  });

  test("값이 당첨 숫자와 중복된다면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGame().isBonusNumberValid([1, 2, 3, 4, 5, 6], 1);
    }).toThrow("[ERROR] 보너스 번호가 당첨 번호와 중복되지 않게 입력해주세요.");
  });

  test("1~45 범위를 벗어나는 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGame().isBonusNumberValid([1, 2, 3, 4, 5, 6], 55);
    }).toThrow("[ERROR] 1~45 범위의 값만 입력해주세요.");
  });
});

describe("LottoGame 클래스 countMatchedNumbers 함수 테스트", () => {
  test("로또 번호와 당첨 번호의 겹치는 숫자 개수를 구한다.", () => {
    expect(
      new LottoGame().countMatchedNumbers(
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 7]
      )
    ).toEqual(5);
  });
});

describe("LottoGame 클래스 calculateEarning 함수 테스트", () => {
  test("로또 결과에 따른 수익을 계산한다.", () => {
    expect(
      new LottoGame().calculateEarning({ 3: 1, 4: 0, 5: 1, "5-bonus": 0, 6: 0 })
    ).toEqual(1505000);
  });
});

describe("LottoGame 클래스 getEarningRate 함수 테스트", () => {
  test("수익에 따른 수익률을 계산한다.", () => {
    expect(new LottoGame().getEarningRate(5000, 8000)).toEqual(62.5);
  });
});
