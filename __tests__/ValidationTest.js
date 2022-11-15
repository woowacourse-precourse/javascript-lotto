const { validateNumber } = require('../src/utils/validation');

describe('validation 테스트', () => {
  test('보너스 번호 유효 검증 : 0', () => {
    expect(() => {
      const input = 0;
      validateNumber(input);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 유효 검증 : 46', () => {
    expect(() => {
      const input = 46;
      validateNumber(input);
    }).toThrow('[ERROR]');
  });
});
