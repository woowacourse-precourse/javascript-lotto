const { ERROR_MESSAGE } = require('../src/constants');
const BonusNumber = require('../src/domain/BonusNumber');

describe('BonusNumber 테스트', () => {
  test('보너스 번호에 공백이 포함되어 있는 경우', () => {
    const result = new BonusNumber('  3').getBonusNumberWithoutSpace();
    expect(result).toEqual(['3']);
  });
  test('보너스 번호가 범위를 초과한 숫자인 0일 경우', () => {
    expect(() => {
      new BonusNumber('0');
    }).toThrow(ERROR_MESSAGE.lottoRange);
  });

  test('보너스 번호가 범위를 초과한 숫자인 46일 경우', () => {
    expect(() => {
      new BonusNumber('46');
    }).toThrow(ERROR_MESSAGE.lottoRange);
  });

  test('보너스 번호가 범위를 초과한 숫자인 음수일 경우', () => {
    expect(() => {
      new BonusNumber('-3');
    }).toThrow(ERROR_MESSAGE.lottoRange);
  });

  test('보너스 번호가 문자인 경우', () => {
    expect(() => {
      new BonusNumber('B');
    }).toThrow(ERROR_MESSAGE.lottoRange);
  });
});
