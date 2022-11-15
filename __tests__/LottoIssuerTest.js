const LottoIssuer = require('../src/LottoIssuer');
const { LOTTO_DIGITS, NUMBER_RANGE } = require('../src/Constants');
const { Random } = require('@woowacourse/mission-utils');

describe('LottoIssuer 클래스 - 로또 번호 생성 테스트', () => {
  const issuedLotto = LottoIssuer.generateLottoNumbers();

  test('1~45까지의 중복되지 않는 6자리 로또 번호를 만든다.', () => {
    expect(issuedLotto).toHaveLength(LOTTO_DIGITS);
    issuedLotto.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(NUMBER_RANGE.lower);
      expect(number).toBeLessThanOrEqual(NUMBER_RANGE.upper);
    });
    expect(issuedLotto.length === new Set(issuedLotto).size).toBeTruthy();
  });

  LottoIssuer.finish();
});

describe('LottoIssuer 클래스 - 여러 개의 로또 생성 테스트', () => {
  const randomNumber = Random.pickNumberInRange(1, 100);
  const issuedLottoes = LottoIssuer.generateLottoes(randomNumber);

  test('주어진 갯수만큼 로또를 발행한다.', () => {
    expect(issuedLottoes).toHaveLength(randomNumber);
  });

  LottoIssuer.finish();
});
