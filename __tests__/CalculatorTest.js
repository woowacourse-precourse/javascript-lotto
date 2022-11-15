const calculator = require("../src/model/Calculator");

const calculatorModel = new calculator();

describe("계산 로직 테스트", () => {
  test("나의 로또 번호 목록과 당첨 번호를 인자로 넣으면 결과 객체를 도출한다.", () => {
    expect(
      calculatorModel.getWinningResult(
        [
          [4, 7, 21, 23, 29, 35],
          [3, 11, 13, 32, 35, 42],
          [3, 6, 14, 32, 37, 38],
          [6, 12, 13, 17, 20, 39],
          [19, 28, 34, 39, 40, 45]
        ],
        { winningNumber: [1, 2, 3, 4, 5, 6], bonusNumber: 7 }
      )
    ).toEqual({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  });

  test("나의 로또 번호 목록과 당첨 번호를 인자로 넣으면 결과 객체를 도출한다.", () => {
    expect(
      calculatorModel.getWinningResult(
        [
          [1, 2, 5, 7, 13, 14],
          [3, 11, 13, 32, 35, 42],
          [3, 6, 14, 32, 37, 38],
          [6, 12, 13, 17, 20, 39],
          [19, 28, 34, 39, 40, 45]
        ],
        { winningNumber: [1, 13, 2, 14, 5, 6], bonusNumber: 7 }
      )
    ).toEqual({ 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 });
  });

  test("나의 로또 번호 목록과 당첨 번호를 인자로 넣으면 결과 객체를 도출한다.", () => {
    expect(
      calculatorModel.getWinningResult(
        [
          [1, 2, 5, 6, 7, 43],
          [1, 2, 3, 4, 5, 7],
          [1, 2, 5, 6, 15, 16],
          [1, 2, 5, 6, 15, 7],
          [1, 2, 5, 6, 15, 18]
        ],
        { winningNumber: [1, 2, 5, 6, 15, 16], bonusNumber: 7 }
      )
    ).toEqual({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
  });

  test("나의 로또 번호 목록과 당첨 번호를 인자로 넣으면 결과 객체를 도출한다.", () => {
    expect(
      calculatorModel.getWinningResult([[1, 2, 5, 6, 7, 43]], {
        winningNumber: [1, 2, 5, 6, 15, 16],
        bonusNumber: 7
      })
    ).toEqual({ 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 });
  });

  test("당첨 목록과 투입 금액을 입력하면 수익률이 도출된다.", () => {
    const calculatorModel = new calculator();
    expect(calculatorModel.getEarningRate({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }, "8000")).toEqual("0.0");
  });

  test("당첨 목록과 투입 금액을 입력하면 수익률이 도출된다.", () => {
    const calculatorModel = new calculator();
    expect(calculatorModel.getEarningRate({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }, "5000")).toEqual(
      "40631100.0"
    );
  });

  test("당첨 목록과 투입 금액을 입력하면 수익률이 도출된다.", () => {
    const calculatorModel = new calculator();
    expect(calculatorModel.getEarningRate({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 }, 3000)).toEqual("166.7");
  });
});
