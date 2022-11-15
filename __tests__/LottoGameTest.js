/* eslint-disable */

const MissionUtils = require("@woowacourse/mission-utils");
const LottoGame = require("../src/LottoGame");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 게임 테스트", () => {
  test("set 유저의 로또", () => {
    const expectedLottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
    ];

    mockRandoms(expectedLottos);

    const lottoGame = new LottoGame();
    lottoGame.setLottosOfUser(5);

    const lottos = lottoGame.lottosOfUser;

    expectedLottos.forEach((expected, index) => {
      expect(lottos[index].getNumbers()).toEqual(
        expect.arrayContaining(expected),
      );
    });
  });

  test("set 당첨 로또, 보너스 번호", () => {
    const expectedWinningNumbers = [1, 2, 3, 4, 5, 6];
    const expectedBonusNumber = 7;

    const lottoGame = new LottoGame();
    lottoGame.setWinningLotto(expectedWinningNumbers);
    lottoGame.setBonusNumber(expectedBonusNumber);

    const { winningLotto } = lottoGame;

    expect(winningLotto.getNumbers()).toEqual(
      expect.arrayContaining(expectedWinningNumbers),
    );
    expect(winningLotto.getBonusNumber()).toEqual(expectedBonusNumber);
  });

  test("calculate 결과", () => {
    const lottosOfUser = [
      [1, 2, 3, 4, 5, 6], // 1등
      [1, 2, 3, 4, 5, 7], // 2등
      [1, 2, 3, 4, 5, 8], // 3등
      [1, 2, 3, 4, 7, 8], // 4등
      [1, 2, 3, 7, 8, 9], // 5등
      [2, 3, 4, 7, 8, 9], // 5등
      [1, 2, 7, 8, 10, 11], // 당첨 X
    ];
    const boughtAmount = lottosOfUser.length * 1000;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const expectedNumberOfEachRanking = {
      FIRST: 1,
      SECOND: 1,
      THIRD: 1,
      FOURTH: 1,
      FIFTH: 2,
    };
    const expectedTotalProfit = 2_031_560_000;
    const expectedTotalProfitRate = (
      (expectedTotalProfit / boughtAmount) *
      100
    ).toFixed(1);

    mockRandoms(lottosOfUser);

    const lottoGame = new LottoGame();
    lottoGame.boughtAmount = boughtAmount;
    lottoGame.setLottosOfUser(lottosOfUser.length);
    lottoGame.setWinningLotto(winningNumbers);
    lottoGame.setBonusNumber(bonusNumber);
    lottoGame.calculateResult();

    expect(lottoGame.numberOfEachRanking).toEqual(
      expect.objectContaining(expectedNumberOfEachRanking),
    );

    expect(lottoGame.totalProfitRate).toEqual(expectedTotalProfitRate);
  });
});
