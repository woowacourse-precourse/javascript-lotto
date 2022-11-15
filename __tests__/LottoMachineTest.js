const LottoMachine = require("../src/LottoMachine");

describe("LottoMachine 클래스 테스트", () => {
  const lottoMachine = new LottoMachine();

  test("랜덤으로 생성된 로또 번호는 길이가 6이다", () => {
    const result = lottoMachine.getRandomNum();

    expect(result).toHaveLength(6);
  });

  test("랜덤으로 생성된 로또 번호는 45이하의 숫자이어야 한다.", () => {
    const results = lottoMachine.getRandomNum();

    results.forEach((result) => {
      expect(result).toBeLessThan(46);
    });
  });

  test("랜덤으로 생성된 로또 번호는 1이상의 숫자이어야 한다.", () => {
    const results = lottoMachine.getRandomNum();

    results.forEach((result) => {
      expect(result).toBeGreaterThan(0);
    });
  });

  test("보유 금액을 1000원으로 나눈 값이 나와야 한다.", () => {
    const result = lottoMachine.getLottoQuantity(8000);

    expect(result).toBe(8);
  });

  test("일치하는 당첨 번호와 보너스 번호 개수가 나와야 한다.", () => {
    const userNumbers = [31, 27, 17, 41, 5, 6];
    const winningNumbers = [27, 31, 7, 19, 36, 6];
    const bonusNumber = 12;
    const [winningCount, bonusCount] = lottoMachine.checkOne(
      userNumbers,
      winningNumbers,
      bonusNumber
    );

    expect(winningCount).toBe(3);
    expect(bonusCount).toBe(0);
  });

  test("당첨된 등수들이 나와야 한다.", () => {
    const lottoResults = [
      [6, 0],
      [5, 0],
      [4, 0],
      [5, 1],
    ];
    const result = lottoMachine.getRank(lottoResults);

    expect(result).toEqual([1, 1, 1, 1, 0]);
  });

  test("당첨 금액의 총합이 나와야 한다", () => {
    const ranks = [1, 0, 1, 1, 0];
    const result = lottoMachine.getProfit(ranks);

    expect(result).toBe(2001550000);
  });

  test("수익률이 나와야 한다,", () => {
    const ranks = [0, 0, 0, 0, 1];
    const userMoney = 8000;
    const result = lottoMachine.getProfitRate(ranks, userMoney);

    expect(result).toBe(62.5);
  });
});
