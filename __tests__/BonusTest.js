const Bonus = require('../src/Bonus');
const { ERROR_MESSAGE } = require('../src/constant/constant');

describe('보너스 클래스 테스트', () => {
  test('숫자 아닌 값 입력', () => {
    expect(() => {
      new Bonus('1j');
    }).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });

  test(ERROR_MESSAGE.LOTTO.NUMBER_RANGE, () => {
    expect(() => {
      new Bonus(55);
    }).toThrow(ERROR_MESSAGE.LOTTO.NUMBER_RANGE);
  });
});
