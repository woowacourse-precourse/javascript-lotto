const LottoCalculator = require('../src/domain/LottoCalculator');

describe('로또 계산기 클래스 - 로또 결과 테스트', () => {
  test('구입 로또, 당첨 로또, 보너스 번호를 입력하면 로또 점수가 나온다.', () => {
    const lottoCalculator = new LottoCalculator(
      [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
      ],
      [8, 21, 23, 41, 35, 44],
      16
    );
    expect(lottoCalculator.score).toEqual({ 3: 0, 4: 1, 5: 0, bonus: 0, 6: 0 });
  });
  test('구입 로또, 당첨 로또, 보너스 번호를 입력하면 로또 점수가 나온다.', () => {
    const lottoCalculator = new LottoCalculator(
      [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
      ],
      [7, 11, 16, 41, 35, 44],
      36
    );
    expect(lottoCalculator.score).toEqual({ 3: 0, 4: 0, 5: 0, bonus: 1, 6: 0 });
  });
});
