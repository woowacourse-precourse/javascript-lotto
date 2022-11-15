const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1미만 45초과의 숫자가 있으면 예외가 발생한다.', () => {
    const lottos = [
      [0, 1, 2, 3, 4, 5],
      [46, 1, 2, 3, 4, 5],
    ];

    lottos.forEach((lotto) => {
      expect(() => {
        new Lotto(lotto);
      }).toThrow('[ERROR]');
    });
  });

  test('하나의 로또에 대한 당첨 등수를 반환한다.', () => {
    const matchingCounts = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6];
    const matchesBonusNums = [
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
    ];
    const answers = [-1, -1, 4, 4, 3, 3, 2, 1, 0, 0];

    matchingCounts.forEach((count, i) => {
      const ILotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(ILotto.getWinningRanking(count, matchesBonusNums[i])).toBe(
        answers[i]
      );
    });
  });

  test('총 당첨 금액의 합을 반환한다.', () => {
    const winningStates = [
      [0, 0, 0, 0, 1],
      [0, 0, 0, 4, 6],
      [0, 0, 3, 0, 3],
      [0, 2, 9, 0, 2],
      [2, 1, 5, 3, 2],
    ];
    const answers = [5000, 230000, 4515000, 73510000, 4037660000];

    winningStates.forEach((state, i) => {
      const ILotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(ILotto.calcTotalPrize(state)).toBe(answers[i]);
    });
  });

  test('수익률을 계산해 소수점 둘 째 자리에서 반올림한 값을 반환한다.', () => {
    const totalPrizes = [150000, 5000, 30000, 30000000, 4000000000];
    const countOfLottos = [3, 4, 5, 10, 20];
    const answers = ['5000.0', '125.0', '600.0', '300000.0', '20000000.0'];

    totalPrizes.forEach((money, i) => {
      const ILotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(ILotto.calcRateOfReturn(money, countOfLottos[i])).toBe(answers[i]);
    });
  });

  test('총 당첨 횟수를 등수별로 종합한 배열을 반환한다.', () => {
    const userLottos = [
      [1, 6, 22, 30, 43, 45],
      [4, 13, 16, 30, 42, 45],
      [10, 12, 23, 25, 26, 37],
      [1, 2, 4, 5, 12, 33],
      [1, 15, 26, 32, 34, 39],
      [7, 13, 21, 22, 34, 39],
      [3, 4, 5, 18, 19, 32],
      [3, 16, 31, 35, 40, 45],
      [5, 12, 14, 28, 33, 44],
      [15, 20, 22, 23, 35, 39],
      [1, 12, 24, 25, 30, 38],
      [9, 15, 19, 30, 31, 36],
      [5, 13, 31, 34, 40, 45],
      [1, 2, 5, 15, 24, 42],
      [1, 2, 21, 30, 33, 40],
    ];
    const winningNumbers = [1, 2, 5, 30, 33, 40];
    const bonusNumber = 43;

    const ILotto = new Lotto(winningNumbers);
    expect(ILotto.informWinningState(userLottos, bonusNumber)).toEqual([
      0, 0, 1, 1, 1,
    ]);
  });

  test('App 클래스에서 호출하면 출력에 필요한 게임 결과를 반환한다.', () => {
    const userLottos = [
      [2, 3, 7, 18, 22, 28],
      [1, 2, 6, 9, 16, 43],
      [1, 2, 20, 21, 26, 44],
      [8, 9, 13, 14, 19, 45],
      [4, 7, 13, 19, 20, 29],
      [3, 6, 15, 27, 32, 44],
      [1, 10, 29, 32, 40, 44],
      [7, 8, 17, 20, 37, 40],
      [1, 3, 8, 16, 18, 40],
      [6, 14, 21, 30, 40, 44],
      [1, 6, 11, 12, 14, 37],
      [2, 11, 24, 34, 38, 42],
      [2, 3, 28, 30, 37, 45],
      [7, 15, 17, 34, 35, 38],
      [6, 7, 8, 11, 14, 24],
    ];
    const winningNumbers = [1, 2, 6, 11, 24, 38];
    const bonusNumber = 42;

    const ILotto = new Lotto(winningNumbers);
    expect(ILotto.getGameResult(userLottos, bonusNumber)).toEqual([
      [0, 0, 0, 1, 3],
      '433.3',
    ]);
  });
});
