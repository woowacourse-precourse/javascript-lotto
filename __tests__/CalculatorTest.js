const Calculator = require("../src/Calculator");
const { ERROR_MESSAGE } = require("../src/message");

describe("당첨 계산기 테스트", () => {
  const winngingLotto = [1, 2, 3, 4, 5, 6];
  const bonusLotto = 7;
  test("1등 당첨", () => {
    const userLotto = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    const result = new Calculator(
      userLotto,
      winngingLotto,
      bonusLotto
    ).returnRank();
    expect(result).toEqual({
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 1,
    });
  });
  test("2등 당첨", () => {
    const userLotto = [
      [1, 2, 3, 4, 5, 7],
      [7, 8, 9, 10, 11, 12],
    ];
    const result = new Calculator(
      userLotto,
      winngingLotto,
      bonusLotto
    ).returnRank();
    expect(result).toEqual({
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 1,
      first: 0,
    });
  });
  test("5등 2개 당첨", () => {
    const userLotto = [
      [1, 2, 3, 24, 15, 7],
      [7, 8, 9, 1, 6, 2],
    ];
    const result = new Calculator(
      userLotto,
      winngingLotto,
      bonusLotto
    ).returnRank();
    expect(result).toEqual({
      fifth: 2,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    });
  });
});
