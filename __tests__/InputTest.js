const checkPriceUnits = require('../src/checkValid/checkPriceValidation');

describe('입력 테스트', () => {
  test('구입금액: 1000원 단위인지 확인', () => {
    expect(() => {
      checkPriceUnits('1000a');
    }).toThrow('[ERROR]');
  });
});
