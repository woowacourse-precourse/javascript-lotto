const { isValidLottoNumbers } = require('../../backup/src/new/util/utils');
const {
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  VALID_LOTTO_NUMBER_LENGTH
} = require('../src/constants/numbers');
const LottoStore = require('../src/LottoStore');

describe('로또스토어 클래스 테스트', () => {
  const lottoStore = new LottoStore();
  test('금액을 입력하면 해당 금액으로 구매할 수 있는 최대 로또 매수가 반환된다.', () => {
    const testMoney = 5000;
    const expectedBuyCount = 5;
    const testCount = lottoStore.askBuyLottoCount(testMoney);
    expect(testCount).toBe(expectedBuyCount);
  });

  test('금액 입력 시 숫자 이외의 값을 입력하면 에러가 발생한다.', () => {
    expect(() => {
      lottoStore.validateMoney('삼천원');
    }).toThrow('[ERROR]');
  });

  test('금액 입력 시 소수점 이하가 포함된 숫자를 입력하면 에러가 발생한다.', () => {
    expect(() => {
      lottoStore.validateMoney(2000.35);
    }).toThrow('[ERROR]');
  });

  test('금액 입력 시 음수를 입력하면 에러가 발생한다.', () => {
    expect(() => {
      lottoStore.validateMoney(-2000);
    }).toThrow('[ERROR]');
  });

  test('금액 입력 시 1000으로 나누어 떨어지지 않는 수를 입력하면 에러가 발생한다.', () => {
    expect(() => {
      lottoStore.validateMoney(1500);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 생성 시 로또 번호 조건에 맞는 배열이 생성된다.', () => {
    const test = lottoStore.getRandomLottoNumbers();
    for (const element of test) {
      expect(
        element >= MIN_LOTTO_NUMBER && MAX_LOTTO_NUMBER >= element
      ).toBeTruthy();
      expect(test.length === VALID_LOTTO_NUMBER_LENGTH).toBeTruthy();
    }
  });
});
