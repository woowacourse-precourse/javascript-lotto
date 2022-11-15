const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1~45 사이가 아닌 숫자가 들어있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 56, 3, 67]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자와 , 이외의 문자가 들어있는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 56, 3, 67]);
    }).toThrow("[ERROR]");
  });

  test("로또 당첨 테스트", () => {
    const userNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 10, 11],
      [1, 2, 3, 10, 11, 12],
    ];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNum = 7;
    const expectedWinningCnt = [1, 1, 1, 1, 1];
    const rate =
      ((2000000000 + 30000000 + 1500000 + 50000 + 5000) / (5 * 1000)) * 100;

    expect(lotto.getWinningCount(userNumbers, bonusNum)).toEqual(
      expectedWinningCnt
    );

    expect(lotto.getWinningStatistics(expectedWinningCnt)).toContain(
      `3개 일치 (5,000원) - 1개\n` +
        `4개 일치 (50,000원) - 1개\n` +
        `5개 일치 (1,500,000원) - 1개\n` +
        `5개 일치, 보너스 볼 일치 (30,000,000원) - 1개\n` +
        `6개 일치 (2,000,000,000원) - 1개`
    );

    expect(lotto.getRateOfReturnString(expectedWinningCnt, 5)).toEqual(
      `총 수익률은 ${rate.toFixed(1)}%입니다.`
    );
  });
});
