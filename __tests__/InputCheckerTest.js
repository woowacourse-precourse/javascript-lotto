const { validateMoney } = require('../src/InputChecker');

describe('입력한 금액이 유효한지 확인', () => {
  test('입력한 금액이 숫자이며 1,000의 배수인지 확인', () => {
    expect(() => validateMoney('123')).toThrow();
  });
});


