const LottoResult = require('./LottoResult');

describe('LottoResult 클래스 테스트', () => {
  test('로또 번호와 일치하는 당첨 번호의 개수를 관리한다.', () => {
    const SAME_NUMBER_COUNT = 7;
    const IS_BONUS_NUMBER_MATCHED = true;
    const lottoResult = new LottoResult(SAME_NUMBER_COUNT, IS_BONUS_NUMBER_MATCHED);

    expect(lottoResult.getSameNumberCount()).toEqual(SAME_NUMBER_COUNT);
  });

  test('로또 번호와 보너스 번호 일치 여부를 관리한다.', () => {
    const SAME_NUMBER_COUNT = 7;
    const IS_BONUS_NUMBER_MATCHED = true;
    const lottoResult = new LottoResult(SAME_NUMBER_COUNT, IS_BONUS_NUMBER_MATCHED);

    expect(lottoResult.isBonusNumberMatched()).toEqual(IS_BONUS_NUMBER_MATCHED);
  });
});
