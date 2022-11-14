const LottoManager = require('../src/LottoManager');

describe('로또 매니저 클래스 테스트', () => {
  test('정답 번호 중 하나가 보너스 번호와 일치한다면 예외가 발생한다.', () => {
    expect(() => {
      const lottoManager = new LottoManager();
      lottoManager.setWinningNumbers([1, 2, 3, 4, 5, 6]);
      lottoManager.validateBonusNumber(6);
    }).toThrow('[ERROR]');
  });

  test('유저의 숫자들과 정답 숫자/보너스 숫자 비교하여 같은 숫자 개수와 보너스 숫자가 있는지를 반환한다.', () => {
    const lottoManager = new LottoManager();

    lottoManager.setWinningNumbers([1, 2, 3, 4, 5, 6]);
    lottoManager.setBonusNumber(8);

    const { count, isBonusCorrect } = lottoManager.countSame([
      1, 2, 3, 6, 7, 8,
    ]);

    expect(count).toEqual(4);
    expect(isBonusCorrect).toBeTruthy();
  });

  test('같은 숫자의 개수와 보너스 숫자 유무를 통해 받는 상을 반환한다.', () => {
    const inputs = [
      { count: 5, isBonusCorrect: true },
      { count: 5, isBonusCorrect: false },
      { count: 1, isBonusCorrect: true },
      { count: 6, isBonusCorrect: true },
      { count: 6, isBonusCorrect: false },
    ];

    const answer = ['second', 'third', 'none', 'first', 'first'];

    const lottoManager = new LottoManager();

    inputs.forEach(({ count, isBonusCorrect }, index) => {
      const prize = lottoManager.getPrize(count, isBonusCorrect);
      expect(prize).toEqual(answer[index]);
    });
  });

  test('유저의 로또 번호들로 받는 상들의 개수를 반환한다.', () => {
    const lottoManager = new LottoManager();

    lottoManager.setWinningNumbers([1, 2, 3, 4, 5, 6]);
    lottoManager.setBonusNumber(8);

    const prizes = lottoManager.getPrizes([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 8],
      [10, 2, 3, 4, 5, 6],
      [10, 2, 3, 4, 5, 8],
      [10, 20, 3, 4, 5, 6],
      [10, 20, 30, 4, 5, 6],
      [10, 20, 30, 40, 5, 6],
    ]);

    expect(prizes).toEqual({
      first: 1,
      second: 1,
      third: 1,
      fourth: 2,
      fifth: 1,
    });
  });

  test('통계자료와 유저 구매 금액을 통해 수익률을 계산한다.', () => {
    const statistics = {
      first: 1,
      second: 1,
      third: 1,
      fourth: 2,
      fifth: 1,
    };

    const amount = 10000;

    const lottoManager = new LottoManager();
    const revenue = lottoManager.calculateRevenue(statistics, amount);

    expect(revenue).toEqual('20316050.0');
  });
});
