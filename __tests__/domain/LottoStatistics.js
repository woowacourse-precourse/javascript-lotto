const Lotto = require("../../src/Lotto");
const LottoStatistics = require("../../src/domain/LottoStatistics");
const Utils = require("../../src/Utils");

describe("로또 통계 클래스 테스트", () => {
  test("로또 통계 클래스는 로또 인스턴스를 매개변수로 받아야 한다.", () => {
    expect(() => {
      new LottoStatistics();
    }).toThrow();
  });

  test("로또 통계 클래스는 보너스 번호가 설정된 로또 인스턴스를 매개변수로 받아야 한다.", () => {
    expect(() => {
      const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      new LottoStatistics(winningLotto);
    }).toThrow();
  });

  test("번호를 몇 개 맞췄는지 알려준다.", () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    winningLotto.addBonusNumber(7);

    const lottoStatistics = new LottoStatistics(winningLotto);

    const TEST_CASE = [
      {
        numbers: [1, 2, 3, 4, 5, 6],
        result: 6,
      },
      {
        numbers: [11, 12, 13, 14, 15, 16],
        result: 0,
      },
      {
        numbers: [1, 3, 4, 5, 6, 7],
        result: 5,
      },
    ];

    TEST_CASE.forEach(({ numbers, result }) => {
      expect(lottoStatistics.matchCount(numbers, winningLotto.numbers)).toEqual(
        result,
      );
    });
  });

  test("등수를 알려준다.", () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    winningLotto.addBonusNumber(7);

    const lottoStatistics = new LottoStatistics(winningLotto);

    const TEST_CASE = [
      {
        numbers: [1, 2, 3, 4, 5, 6],
        result: 1,
      },
      {
        numbers: [1, 3, 4, 5, 6, 7],
        result: 2,
      },
      {
        numbers: [1, 3, 4, 5, 6, 8],
        result: 3,
      },
      {
        numbers: [1, 2, 3, 15, 16, 18],
        result: 5,
      },
      {
        numbers: [1, 2, 13, 14, 15, 16],
        result: null,
      },
      {
        numbers: [11, 12, 13, 14, 15, 16],
        result: null,
      },
    ];

    TEST_CASE.forEach(({ numbers, result }) => {
      const matchedCount = lottoStatistics.matchCount(
        numbers,
        winningLotto.numbers,
      );
      const isMatchedBonus = numbers.includes(7);

      expect(lottoStatistics.getRank(matchedCount, isMatchedBonus)).toEqual(
        result,
      );
    });
  });

  test("구매한 로또들의 등수를 객체 형태로 반환한다.", () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    winningLotto.addBonusNumber(7);

    const lottoStatistics = new LottoStatistics(winningLotto);

    const TEST_CASE = [
      {
        buyingLottos: [
          [1, 2, 3, 4, 5, 6],
          [1, 3, 4, 5, 6, 7],
          [1, 3, 4, 5, 6, 8],
          [1, 3, 4, 5, 6, 8],
          [1, 3, 4, 5, 6, 8],
          [1, 2, 3, 15, 16, 18],
          [1, 2, 13, 14, 15, 16],
          [11, 12, 13, 14, 15, 16],
        ],
        result: {
          1: 1,
          2: 1,
          3: 3,
          5: 1,
        },
      },
      {
        buyingLottos: [
          [8, 21, 23, 41, 42, 43],
          [3, 5, 11, 16, 32, 38],
          [7, 11, 16, 35, 36, 44],
          [1, 8, 11, 31, 41, 42],
          [13, 14, 16, 38, 42, 45],
          [7, 11, 30, 40, 42, 43],
          [2, 13, 22, 32, 38, 45],
          [1, 3, 5, 14, 22, 45],
        ],
        result: {
          5: 1,
        },
      },
      {
        buyingLottos: [
          [1, 2, 3, 4, 5, 6],
          [1, 3, 4, 5, 6, 7],
          [1, 3, 4, 5, 6, 8],
          [1, 2, 3, 15, 16, 18],
          [1, 2, 13, 14, 15, 16],
          [11, 12, 13, 14, 15, 16],
        ],
        result: {
          1: 1,
          2: 1,
          3: 1,
          5: 1,
        },
      },
    ];

    TEST_CASE.forEach(({ buyingLottos, result }) => {
      expect(lottoStatistics.createRankCounter(buyingLottos)).toEqual(result);
    });
  });

  test("구매한 로또들의 총 상금을 반환한다.", () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    winningLotto.addBonusNumber(7);

    const lottoStatistics = new LottoStatistics(winningLotto);

    const TEST_CASE = [
      {
        buyingLottos: [
          [1, 2, 3, 4, 5, 6],
          [1, 3, 4, 5, 6, 7],
          [1, 3, 4, 5, 6, 8],
          [1, 3, 4, 5, 6, 8],
          [1, 3, 4, 5, 6, 8],
          [1, 2, 3, 15, 16, 18],
          [1, 2, 13, 14, 15, 16],
          [11, 12, 13, 14, 15, 16],
        ],
        result: 2034505000,
      },
      {
        buyingLottos: [
          [8, 21, 23, 41, 42, 43],
          [3, 5, 11, 16, 32, 38],
          [7, 11, 16, 35, 36, 44],
          [1, 8, 11, 31, 41, 42],
          [13, 14, 16, 38, 42, 45],
          [7, 11, 30, 40, 42, 43],
          [2, 13, 22, 32, 38, 45],
          [1, 3, 5, 14, 22, 45],
        ],
        result: 5000,
      },
      {
        buyingLottos: [
          [1, 3, 4, 5, 6, 7],
          [1, 3, 4, 5, 6, 8],
          [1, 2, 3, 15, 16, 18],
          [1, 2, 13, 14, 15, 16],
          [11, 12, 13, 14, 15, 16],
        ],
        result: 31505000,
      },
    ];

    TEST_CASE.forEach(({ buyingLottos, result }) => {
      expect(lottoStatistics.getTotalReward(buyingLottos)).toEqual(result);
    });
  });

  test("구매한 로또들의 수익률을 포맷팅하여 반환한다.", () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    winningLotto.addBonusNumber(7);

    const lottoStatistics = new LottoStatistics(winningLotto);

    const TEST_CASE = [
      {
        buyingLottos: [
          [1, 2, 3, 4, 5, 6],
          [1, 3, 4, 5, 6, 7],
          [1, 3, 4, 5, 6, 8],
          [1, 3, 4, 5, 6, 8],
          [1, 3, 4, 5, 6, 8],
          [1, 2, 3, 15, 16, 18],
          [1, 2, 13, 14, 15, 16],
          [11, 12, 13, 14, 15, 16],
        ],
        result: "25,431,312.5",
      },
      {
        buyingLottos: [
          [8, 21, 23, 41, 42, 43],
          [3, 5, 11, 16, 32, 38],
          [7, 11, 16, 35, 36, 44],
          [1, 8, 11, 31, 41, 42],
          [13, 14, 16, 38, 42, 45],
          [7, 11, 30, 40, 42, 43],
          [2, 13, 22, 32, 38, 45],
          [1, 3, 5, 14, 22, 45],
        ],
        result: "62.5",
      },
      {
        buyingLottos: [
          [1, 3, 4, 5, 6, 7],
          [1, 3, 4, 5, 6, 8],
          [1, 2, 3, 15, 16, 18],
          [1, 2, 13, 14, 15, 16],
          [11, 12, 13, 14, 15, 16],
        ],
        result: "630,100.0",
      },
    ];

    TEST_CASE.forEach(({ buyingLottos, result }) => {
      const profit = lottoStatistics.getProfit(buyingLottos);
      const formattedProfit = Utils.formatProfit(profit);
      expect(formattedProfit).toEqual(result);
    });
  });
});
