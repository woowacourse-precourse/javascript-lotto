const Bonus = require('../src/Bonus');

describe('보너스 클래스 테스트', () => {
  test('숫자 범위가 1~45가 아닙니다.', () => {
    expect(() => {
      const bonus = new Bonus();
      bonus.validate('55');
    }).toThrow('[ERROR]');
  });
});
