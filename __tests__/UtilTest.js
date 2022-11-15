const countIncludeNumber = require('../src/utils/count/countIncludeNumber');
const countPurchasedLotteries = require('../src/utils/count/countPurchasedLotteries');
const verifyValidBonusNumber = require('../src/utils/verify/verifyValidBonusNumber');
const processRandomLottoNumber = require('../src/utils/process/processRandomLottoNumber');
const processLotteryRank = require('../src/utils/process/processLotteryRank');
const verifyValidLottery = require('../src/utils/verify/verifyValidLottery');
const calculateProfit = require('../src/utils/calculate/calculateProfit');
const calculateProfitRate = require('../src/utils/calculate/calculateProfitRate');
const verifyStartMoneyUnit = require('../src/utils/verify/verifyStartMoneyUnit');
const makeException = require('../src/utils/exception/makeException');

describe('유틸 함수 동작 테스트', () => {
  test('금액에 맞는 구매 로또의 개수를 리턴하는 함수', () => {
    expect(countPurchasedLotteries('11000')).toBe(11);
    expect(countPurchasedLotteries('1000')).toBe(1);
    expect(countPurchasedLotteries('31200')).toBe(31);
    expect(countPurchasedLotteries('500')).toBe(0);
  });

  test('금액 단위 검증 함수', () => {
    expect(verifyStartMoneyUnit(10000)).toBe(true);
    expect(verifyStartMoneyUnit(11500)).toBe(false);
    expect(verifyStartMoneyUnit(10000)).toBe(true);
    expect(verifyStartMoneyUnit(1234)).toBe(false);
  });

  test('구매 로또의 정답 개수를 리턴하는 함수', () => {
    expect(countIncludeNumber([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])).toBe(5);
    expect(countIncludeNumber([1, 2, 3, 4, 5, 6], [5, 6, 7, 8, 9, 10])).toBe(2);
    expect(
      countIncludeNumber([12, 23, 42, 14, 35, 27], [13, 42, 23, 44, 35, 27])
    ).toBe(4);
    expect(
      countIncludeNumber([19, 22, 42, 14, 35, 27], [13, 42, 23, 44, 35, 27])
    ).toBe(3);
  });

  test('구매 로또의 보너스 번호 정답 여부 확인', () => {
    expect(verifyValidBonusNumber(1, [2, 3, 4, 5, 6, 7])).toBe(0);
    expect(verifyValidBonusNumber(4, [2, 3, 4, 5, 6, 7])).toBe(1);
    expect(verifyValidBonusNumber(14, [12, 31, 42, 15, 26, 37])).toBe(0);
    expect(verifyValidBonusNumber(15, [12, 31, 42, 15, 26, 37])).toBe(1);
  });

  test('정답 수를 통한 등수 확인', () => {
    expect(processLotteryRank(1, 1)).toBe('0');
    expect(processLotteryRank(2, 1)).toBe('5');
    expect(processLotteryRank(0, 1)).toBe('0');
    expect(processLotteryRank(3, 1)).toBe('4');
    expect(processLotteryRank(4, 1)).toBe('3');
    expect(processLotteryRank(5, 0)).toBe('3');
    expect(processLotteryRank(5, 1)).toBe('2');
    expect(processLotteryRank(6, 0)).toBe('1');
  });

  test('로또 랜덤 번호 생성 유효성 확인', () => {
    expect(
      (() => {
        const result = processRandomLottoNumber();
        return new Set(result).size;
      })()
    ).toBe(6);
    expect(
      (() => {
        const result = processRandomLottoNumber();
        return new Set(result).size;
      })()
    ).toBe(6);
    expect(
      (() => {
        const result = processRandomLottoNumber();
        return new Set(result).size;
      })()
    ).toBe(6);
  });

  test('답안 로또 번호 유효성 확인', () => {
    expect(verifyValidLottery([1, 2, 3, 4, 5, 6])).toBe(true);
  });

  test('로또를 통해 번 금액 반환 함수 테스트', () => {
    expect(calculateProfit({ 0: 28, 1: 0, 2: 0, 3: 0, 4: 0, 5: 2 })).toBe(
      10000
    );
    expect(calculateProfit({ 0: 5, 1: 0, 2: 0, 3: 0, 4: 0, 5: 3 })).toBe(15000);
    expect(calculateProfit({ 0: 7, 1: 0, 2: 0, 3: 0, 4: 1, 5: 2 })).toBe(60000);
    expect(calculateProfit({ 0: 9, 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 })).toBe(50000);
    expect(calculateProfit({ 0: 29, 1: 0, 2: 0, 3: 1, 4: 0, 5: 1 })).toBe(
      1505000
    );
  });

  test('수익률 계산하는 함수 테스트', () => {
    expect(calculateProfitRate(10000, 5000)).toBe(50);
    expect(calculateProfitRate(8000, 5000)).toBe(62.5);
    expect(calculateProfitRate(10000, 1500000)).toBe(15000);
    expect(calculateProfitRate(13000, 55000)).toBe(423.1);
    expect(calculateProfitRate(13000, 0)).toBe(0);
  });

  it('예외처리 유틸 함수 유닛 테스트', () => {
    try {
      makeException('INPUT_NOT_NUMBER');
    } catch (err) {
      expect(err).toEqual(new Error('[ERROR] 숫자만 입력해주세요.'));
    }
  });

  it('예외처리 유틸 함수 유닛 테스트', () => {
    try {
      makeException('INPUT_LENGTH_ERROR');
    } catch (err) {
      expect(err).toEqual(new Error('[ERROR] 6개의 숫자를 입력하셔야 합니다.'));
    }
  });
});
