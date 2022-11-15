const { ERROR_MESSAGES } = require('../../src/constant/messages');
const Purchaser = require('../../src/domain/Purchaser');
const Lotto = require('../../src/Lotto/Lotto');

describe('로또 클래스 테스트', () => {
  test('buyLotto 함수가 리턴하는 배열 길이가 로또 구매 갯수와 일치하는지 검사', () => {
    const input = 3;
    const purchaser = new Purchaser();

    expect(purchaser.buyLotto(input)).toHaveLength(input);
  });

  /**
   * createToken()
   * 정수값을 받으면 해당 수만큼의 토큰을 반환하는 함수
   */
  test('입력된 숫자만큼 토큰을 리턴하는지 검사.', () => {
    const purchaser = new Purchaser();
    expect(purchaser.createToken(3).length).toBe(3);
  });

  /**
   * countMatchedNumber()
   * 구매한 로또 전체와 당첨 번호 및 보너스 번호가 몇 개나 일치하는지 반환하는 함수
   */

  test('구매한 로또 전체와 당첨 번호 및 보너스 번호를 올바르게 비교하는지 검사', () => {
    const purchaser = new Purchaser();
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]), // 4개 일치
      new Lotto([7, 22, 23, 40, 41, 45]), // 2개 일치 + 보너스 1개 일치
      new Lotto([12, 21, 34, 38, 39, 40]), // 1개 일치
    ];
    const winnerNumber = [1, 2, 3, 4, 40, 41];
    const bonusNumber = 7;

    expect(
      purchaser.countMatchedNumberAll(lottos, winnerNumber, bonusNumber)
    ).toStrictEqual([0, 1, 1, 0, 1, 0, 0, 0]);
  });

  /**
   * compare()
   * 로또 번호와 당첨 번호 및 보너스 번호를 비교하여 각각 몇 개나 일치하는지 객체로 반환하는 함수
   */
  test('로또 번호와 당첨 번호 및 보너스 번호를 올바르게 비교하는지 검사', () => {
    const purchaser = new Purchaser();
    const lottoToken = [1, 4, 6, 23, 28, 40];
    const winnerNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(purchaser.compare(lottoToken, winnerNumber, bonusNumber)).toEqual({
      count: 3,
      bonus: 0,
    });
  });

  test('로또 번호에 보너스 번호가 존재할 때 올바르게 비교하는지 검사', () => {
    const purchaser = new Purchaser();
    const lottoToken = [1, 4, 6, 23, 28, 40];
    const winnerNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 23;
    expect(purchaser.compare(lottoToken, winnerNumber, bonusNumber)).toEqual({
      count: 3,
      bonus: 1,
    });
  });

  /**
   * countMatchedNumber()
   * 로또 번호와 당첨 번호 및 보너스 번호가 일치하는 개수를 배열로 반환하는 함수
   */
  test('로또 번호와 일치하는 개수만큼 계산된 배열을 리턴하는지 검사', () => {
    const purchaser = new Purchaser();
    const count = 3;
    const bonus = 1;
    const matchedCountList = [0, 0, 0, 1, 1, 1, 0, 0];
    expect(
      purchaser.countMatchedNumber(count, bonus, matchedCountList)
    ).toEqual([0, 0, 0, 2, 1, 1, 0, 0]);
  });

  /**
   * computeRevenue()
   * 수익의 합계를 계산하는 함수
   */
  test('숫자가 3개 이상 일치할 때부터 올바르게 계산하는지 검사', () => {
    const purchaser = new Purchaser();
    const matchedCountList = [1, 1, 0, 1, 0, 0, 0, 0];
    expect(purchaser.computeRevenue(matchedCountList)).toBe(5000);
  });

  test('수익의 합계를 올바르게 계산하는지 검사', () => {
    const purchaser = new Purchaser();
    const matchedCountList = [0, 0, 0, 1, 2, 0, 0, 1];
    expect(purchaser.computeRevenue(matchedCountList)).toBe(2000105000);
  });

  /**
   * getReturnRate()
   * 수익률을 반환하는 함수
   */
  test('수익률이 소수점 둘째 자리에서 반올림 되는지 검사', () => {
    const purchaser = new Purchaser();
    const money = 7000;
    const revenue = 5000;
    expect(purchaser.getReturnRate(money, revenue)).toBe(71.4);
  });
});
