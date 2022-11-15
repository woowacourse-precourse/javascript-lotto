const { FIFTH, FOURTH, SECOND, FIRST, NOTHING, THIRD } = require('../src/constants/gameSetting');
const Lotto = require('../src/Lotto');
const LottoStatistics = require('../src/LottoStatistics');

describe('LottoStatistics 테스트', () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  const winningLottos = [
    new Map([
      ['당첨 번호', [1, 2, 3, 7, 8, 9]],
      ['보너스 번호', 7],
    ]),
    new Map([
      ['당첨 번호', [1, 2, 3, 4, 8, 9]],
      ['보너스 번호', 5],
    ]),
    new Map([
      ['당첨 번호', [1, 2, 3, 4, 5, 9]],
      ['보너스 번호', 7],
    ]),
    new Map([
      ['당첨 번호', [1, 2, 3, 4, 6, 7]],
      ['보너스 번호', 5],
    ]),
    new Map([
      ['당첨 번호', [1, 2, 3, 4, 5, 6]],
      ['보너스 번호', 7],
    ]),
    new Map([
      ['당첨 번호', [6, 7, 8, 9, 10, 11]],
      ['보너스 번호', 3],
    ]),
  ];

  test('calculateProfitRate  테스트', () => {
    const answer = [
      [0, 1000],
      [5000, 1000],
      [50000, 5000],
      [15000, 7000],
      [2000000000, 5000],
    ];
    const result = ['0.0', '500.0', '1,000.0', '214.3', '40,000,000.0'];
    answer.forEach((arr, index) =>
      expect(LottoStatistics.calculateProfitRate(...arr)).toBe(result[index])
    );
  });

  test('getLottoRanking 테스트', () => {
    const result = [FIFTH, FOURTH, THIRD, SECOND, FIRST, NOTHING];
    winningLottos.forEach((winningLotto, index) =>
      expect(LottoStatistics.getLottoRanking(lotto, winningLotto)).toBe(result[index])
    );
  });

  test('getLottosResult 테스트', () => {
    const lottos = new Map([
      ['로또1', new Lotto([1, 2, 3, 4, 5, 6])],
      ['로또2', new Lotto([7, 8, 9, 10, 11, 12])],
      ['로또3', new Lotto([1, 3, 5, 30, 40, 45])],
    ]);
    const lottosResult = [FIFTH, FIFTH, NOTHING];
    expect(LottoStatistics.getLottosResult(lottos, winningLottos[0])).toEqual(lottosResult);
  });

  test('collectLottoStatistics 테스트', () => {
    const lottos = new Map([
      ['로또1', new Lotto([1, 2, 3, 4, 5, 6])],
      ['로또2', new Lotto([7, 8, 9, 10, 11, 12])],
      ['로또3', new Lotto([1, 3, 5, 30, 40, 45])],
    ]);

    const lottoStatistics = {
      '5등': 2,
      '4등': 0,
      '3등': 0,
      '2등': 0,
      '1등': 0,
      '꽝' : 1,
      profitRate: '333.3',
    };

    expect(LottoStatistics.collectLottoStatistics(lottos, winningLottos[0])).toEqual(
      lottoStatistics
    );
  });
});
