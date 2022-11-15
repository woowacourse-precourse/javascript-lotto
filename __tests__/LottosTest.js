const { describe, expect, test } = require('@jest/globals');
const { MONEY, PRIZE, PLACE } = require('../src/libs/const');
const Lotto = require('../src/Lotto');
const Lottos = require('../src/Lottos');

describe('Lottos 클래스 생성 테스트', () => {
  test.each([['8000j'], ['5000x'], ['구입합니다.']])(
    '구입 금액이 숫자가 아니라면 예외가 발생한다. 구입금액: %s',
    (money) => {
      expect(() => {
        new Lottos(money);
      }).toThrow('[ERROR] 구입금액: 숫자만 입력할 수 있습니다.');
    }
  );

  test.each([['120'], ['999'], ['-200']])(
    '구입 금액이 1000보다 작으면 예외가 발생한다. 구입금액: %s',
    (money) => {
      expect(() => {
        new Lottos(money);
      }).toThrow('[ERROR] 구입금액: 1000 이상 입력할 수 있습니다.');
    }
  );

  test.each([['1200'], ['5500'], ['13001']])(
    '구입 금액은 1000단위여야 한다. 그렇지 않으면 예외가 발생한다. 구입금액: %s',
    (money) => {
      expect(() => {
        new Lottos(money);
      }).toThrow('[ERROR] 구입금액: 1000 단위로 로또를 구입해야 합니다.');
    }
  );

  test.each([
    ['6000', 6],
    ['8000', 8],
    ['19000', 19],
  ])(
    'Lotts 클래스 생성 테스트, 구입금액: %s, 로또 개수: %d',
    (money, count) => {
      const lottos = new Lottos(money);
      expect(lottos.count).toEqual(count);
    }
  );
});

describe('발행된 로또개수 테스트', () => {
  test.each([
    ['5000', 5],
    ['12000', 12],
    ['30000', 30],
    ['200000', 200],
  ])('구입금액: %s, 로또개수: %d', (money, count) => {
    const lottos = new Lottos(money);

    expect(lottos.list.length).toEqual(count);
  });
});

describe('로또결과 테스트', () => {
  test('실행 테스트 - 5등이 2개인 경우', () => {
    const lottos = [
      [21, 23, 29, 34, 42, 45],
      [2, 3, 15, 18, 29, 43],
      [12, 16, 27, 29, 37, 44],
      [4, 13, 15, 19, 38, 39],
      [6, 7, 16, 17, 32, 40],
      [2, 5, 6, 18, 24, 41],
      [1, 16, 20, 36, 37, 43],
      [3, 12, 16, 19, 26, 42],
      [1, 4, 15, 18, 28, 32],
      [5, 10, 12, 21, 28, 34],
    ];

    const winningNumbers = [1, 5, 16, 20, 18, 28];
    const bonusNumber = 34;

    const getRanks = () => {
      let lottoRanks = [];

      lottos.forEach((numbers) => {
        const lotto = new Lotto(numbers);
        lottoRanks.push(lotto.getRank(winningNumbers, bonusNumber));
      });

      return lottoRanks.filter((rank) => rank <= 5);
    };

    expect(getRanks()).toEqual([5, 5]);
  });

  test('실행 테스트 - 1등, 2등, 4등인 경우', () => {
    const lottos = [
      [1, 6, 10, 32, 33, 43],
      [1, 2, 4, 8, 23, 24],
      [1, 2, 4, 8, 23, 42],
      [5, 11, 14, 18, 21, 28],
      [1, 2, 4, 8, 21, 28],
    ];

    const winningNumbers = [1, 2, 4, 8, 23, 24];
    const bonusNumber = 42;

    const getRanks = () => {
      let lottoRanks = [];

      lottos.forEach((numbers) => {
        const lotto = new Lotto(numbers);
        lottoRanks.push(lotto.getRank(winningNumbers, bonusNumber));
      });

      return lottoRanks.filter((rank) => rank <= 5);
    };

    expect(getRanks()).toEqual([1, 2, 4]);
  });

  test('실행 테스트 - 낙첨인 경우', () => {
    const lottos = [
      [4, 7, 14, 20, 36, 45],
      [2, 6, 8, 9, 20, 26],
      [5, 6, 19, 23, 27, 40],
    ];

    const winningNumbers = [1, 2, 4, 8, 23, 24];
    const bonusNumber = 42;

    const getRanks = (winningNumbers, bonusNumber) => {
      let lottoRanks = [];

      lottos.forEach((numbers) => {
        const lotto = new Lotto(numbers);
        lottoRanks.push(lotto.getRank(winningNumbers, bonusNumber));
      });

      return lottoRanks.filter((rank) => rank <= PLACE.LAST);
    };

    expect(getRanks(winningNumbers, bonusNumber)).toEqual([]);
  });
});

describe('등수 별 당첨 개수 테스트', () => {
  test.each([
    [1, [1, 2, 4, 2, 2, 5], 0],
    [1, [1, 2, 4, 2, 2, 5], 1],
    [0, [1, 2, 4, 2, 2, 5], 2],
    [3, [1, 2, 4, 2, 2, 5], 3],
    [1, [1, 2, 4, 2, 2, 5], 4],
  ])(
    '등수 별 당첨 개수 테스트, (5 - %#)등: %d개',
    (winningCount, lottoRanks, idx) => {
      const getWinningCount = (lottoRanks, idx) => {
        return lottoRanks.filter((result) => result === 5 - idx).length;
      };

      expect(getWinningCount(lottoRanks, idx)).toEqual(winningCount);
    }
  );
});

describe('수익률 계산 테스트', () => {
  const calculateRate = (lottoRanks, count) => {
    const lottePrizes = [
      PRIZE.FIFTH,
      PRIZE.FOURTH,
      PRIZE.THIRD,
      PRIZE.SECOND,
      PRIZE.FIRST,
    ];
    const finalPrize = lottePrizes.reduce((acc, cur, idx) => {
      const winningCount = getWinningCount(lottoRanks, idx);

      return acc + cur * winningCount;
    }, 0);

    const purchaseMoney = count * MONEY.UNIT;

    return ((finalPrize / purchaseMoney) * 100).toFixed(1);
  };

  const getWinningCount = (lottoRanks, idx) => {
    return lottoRanks.filter((result) => result === 5 - idx).length;
  };

  test.each([
    [[], 10, '0.0'],
    [[], 1, '0.0'],
    [[5], 10, '50.0'],
    [[5], 1, '500.0'],
    [[5], 5, '100.0'],
    [[5, 4, 4], 10, '1050.0'],
    [[5], 20, '25.0'],
    [[2], 5, '600000.0'],
    [[5, 1], 30, '6666683.3'],
  ])('수익률 계산 테스트 calculateRate(%p)', (lottoRanks, count, rate) => {
    expect(calculateRate(lottoRanks, count)).toEqual(rate);
  });
});
