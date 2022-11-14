const LottoResult = require('../src/LottoResult');

describe('LottoResult 테스트', () => {
  test('로또 당첨 번호와 발행한 로또간 매칭 카운트를 반환해주는 getMatchCount 메서드가 정상 동작한다.', () => {
    // 준비(arrange)
    const winningNumbers = { winning: [1, 2, 3, 4, 5, 6], bonus: 7 };
    const lottery = new Set([1, 2, 3, 4, 12, 13]);

    // 실행(act)
    const count = LottoResult.getMatchCount(winningNumbers, lottery);

    // 검증(assert)
    expect(count).toEqual('four');
  });

  test('발행한 각 로또의 매칭 카운트를 받아 카운트를 누적하는 countMatching 메서드가 정상 동작한다.', () => {
    // 준비(arrange)
    const lottoResult = new LottoResult();
    const winningNumbers = { winning: [1, 2, 3, 4, 5, 6], bonus: 7 };
    const lotteries = [
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 44, 45],
      [1, 2, 3, 43, 44, 45],
      [1, 2, 42, 43, 44, 45],
    ];

    // 실행(act)
    lottoResult.countMatching(winningNumbers, lotteries);

    // 검증(assert)
    expect(lottoResult.lottoMatchCounter).toEqual({
      three: 1,
      four: 1,
      five: 0,
      fiveWithBonus: 1,
      six: 0,
      out: 1,
    });
  });

  test('로또 누적 수익을 반환하는 calculateProfit 메서드가 정상 동작한다.', () => {
    // 준비(arrange)
    const lottoResult = new LottoResult();
    lottoResult.lottoMatchCounter = {
      three: 1,
      four: 1,
      five: 0,
      fiveWithBonus: 1,
      six: 0,
      out: 1,
    };

    // 실행(act)
    const totalProfit = lottoResult.calculateProfit();

    // 검증(assert)
    expect(totalProfit).toEqual(30055000);
  });

  test('수익률을 계산하는 calculateProfitRate 메서드가 정상 동작한다.', () => {
    // 준비(arrange)
    const lottoResult = new LottoResult();
    lottoResult.lottoMatchCounter = {
      three: 1,
      four: 0,
      five: 0,
      fiveWithBonus: 0,
      six: 0,
      out: 7,
    };

    // 실행(act)
    lottoResult.calculateProfitRate(8000);

    // 검증(assert)
    expect(lottoResult.profitRate).toEqual('62.5');
  });
});
