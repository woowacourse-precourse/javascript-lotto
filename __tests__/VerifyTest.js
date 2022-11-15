const countNumber = require('../src/util/count/countNumber');
const countPurchasedTicket = require('../src/util/count/countPurchasedTicket');
const examineBonusNumber = require('../src/util/examine/examineBonusNumber');
const calculateRandomNumber = require('../src/util/calculate/calculateRandomNumber');
const calculateTicketRank = require('../src/util/calculate/calculateTicketRank');
const examineCountLotto = require('../src/util/examine/examineCountLotto');
const computeReturnRate = require('../src/util/compute/computeReturnRate');
const examineAmount = require('../src/util/examine/examineAmount');
const checkException = require('../src/util/check/checkException');

describe('함수 구현 테스트', () => {
  test('구매한 로또의 개수를 리턴하는 함수', () => {
    expect(countPurchasedTicket('16000')).toBe(16);
    expect(countPurchasedTicket('3000')).toBe(30);
    expect(countPurchasedTicket('500')).toBe(0);
  });

  test('금액 검증 함수', () => {
    expect(examineAmount(60000)).toBe(true);
    expect(examineAmount(19900)).toBe(false);
    expect(examineAmount(3333)).toBe(false);
    expect(examineAmount(20000)).toBe(true);
  });

  test('구매 당첨 개수를 리턴하는 함수', () => {
    expect(countNumber([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 8])).toBe(4);
    expect(countNumber([1, 2, 3, 4, 5, 6], [5, 6, 4, 8, 9, 10])).toBe(3);
    expect(
      countNumber([12, 23, 45, 14, 35, 27], [13, 42, 23, 44, 35, 27])
    ).toBe(3);
    expect(
      countNumber([19, 22, 42, 14, 34, 26], [13, 42, 23, 44, 35, 27])
    ).toBe(1);
  });

  test('구매 로또의 보너스 번호 정답 여부 확인', () => {
    expect(examineBonusNumber(1, 2, [3, 4, 7, 6, 8])).toBe(0);
  });

  test('정답 수를 통한 등수 확인', () => {
    expect(calculateTicketRank(1, 1)).toBe('0');
    expect(calculateTicketRank(2, 1)).toBe('5');
    expect(calculateTicketRank(0, 1)).toBe('0');
    expect(calculateTicketRank(6, 0)).toBe('1');
  });

  test('로또 랜덤 번호확인', () => {
    expect(
      (() => {
        const result = calculateRandomNumber();
        return new Set(result).size;
      })()
    ).toBe(6);
  });

  test('답안 로또 번호 유효성 확인', () => {
    expect(examineCountLotto([1, 2, 3, 4, 5, 6])).toBe(true);
  });

  test('수익률 계산하는 함수 테스트', () => {
    expect(computeReturnRate(10000, 4000)).toBe(40);
    expect(computeReturnRate(10000, 1600000)).toBe(16000);
  });

  it('예외처리 테스트1', () => {
    try {
      checkException('INPUT_NOT_NUMBER');
    } catch (err) {
      expect(err).toEqual(new Error('[ERROR] 숫자만 입력해주세요.'));
    }
  });

  it('예외처리 테스트2', () => {
    try {
      checkException('INPUT_LENGTH_ERROR');
    } catch (err) {
      expect(err).toEqual(new Error('[ERROR] 6개의 숫자만 입력해주세요.'));
    }
  });
});
