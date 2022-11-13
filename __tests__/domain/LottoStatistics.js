const Lotto = require("../../src/Lotto");
const LottoStatistics = require("../../src/domain/LottoStatistics");

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
      expect(lottoStatistics.match(numbers)).toEqual(result);
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
        result: -1,
      },
      {
        numbers: [11, 12, 13, 14, 15, 16],
        result: -1,
      },
    ];

    TEST_CASE.forEach(({ numbers, result }) => {
      expect(lottoStatistics.judgeRank(numbers)).toEqual(result);
    });
  });
});
