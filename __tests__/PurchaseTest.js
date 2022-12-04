/* eslint-disable max-lines-per-function */
const { Random } = require('@woowacourse/mission-utils');
const Purchase = require('../src/Purchase');

describe('로또 구입 및 발행 테스트', () => {
  test('구입 금액에 해당하는 로또 수량 계산 테스트', () => {
    const money = 12000;
    const expectedCount = 12;

    expect(Purchase.getCount(money)).toEqual(expectedCount);
  });

  test('구입한 로또 수량만큼 로또 발행 테스트', () => {
    const count = 6;
    const getNumbers = () => [4, 5, 6, 3, 2, 1];
    const expectedResult = new Array(count).fill([1, 2, 3, 4, 5, 6]);

    expect(Purchase.issueLottos(count, getNumbers)).toStrictEqual(expectedResult);
  });

  test('구입한 로또 수량만큼 로또 발행 테스트', () => {
    const count = 10;
    const getNumbers = () => Random.pickUniqueNumbersInRange(1, 45, 6);

    expect(Purchase.issueLottos(count, getNumbers)).toHaveLength(count);
  });
});
