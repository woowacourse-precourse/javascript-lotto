/* eslint-disable */

const {
  checkMoneyIsNan,
  checkMoneyDivision,
  checkMoneyLessStandard,
} = require('../src/lib/utils/purchaseUtils');

describe('구매 금액 로직 단위 테스트', () => {
  test('구매 금액이 숫자로만 구성이 되어 있는지 테스트', () => {
    expect(checkMoneyIsNan('8000')).toEqual(false);
    expect(checkMoneyIsNan('8a000')).toEqual(true);
    expect(checkMoneyIsNan('80/00')).toEqual(true);
    expect(checkMoneyIsNan('D')).toEqual(true);
    expect(checkMoneyIsNan('!')).toEqual(true);
  });

  test('구매 금액이 1000원 단위인지 테스트', () => {
    expect(checkMoneyDivision(1000)).toEqual(false);
    expect(checkMoneyDivision(100000)).toEqual(false);
    expect(checkMoneyDivision(1700)).toEqual(true);
    expect(checkMoneyDivision(5009)).toEqual(true);
    expect(checkMoneyDivision(9999999)).toEqual(true);
  });

  test('구매 금액이 1000원 이상인지 테스트', () => {
    expect(checkMoneyLessStandard(1000)).toEqual(false);
    expect(checkMoneyLessStandard(900)).toEqual(true);
    expect(checkMoneyLessStandard(800)).toEqual(true);
    expect(checkMoneyLessStandard(200)).toEqual(true);
    expect(checkMoneyLessStandard(0)).toEqual(true);
  });
});
