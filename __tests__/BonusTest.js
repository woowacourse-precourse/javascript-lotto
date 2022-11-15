const Bonus = require('../src/domain/Bonus');

describe('보너스 클래스 테스트', () => {
  test('보너스 번호가 1 ~ 45 사이 숫자가 아니면 에러를 발생한다.', () => {
    expect(() => {
      new Bonus(0);
    }).toThrow('[ERROR]');

    expect(() => {
      new Bonus(46);
    }).toThrow('[ERROR]');

    expect(() => {
      new Bonus('a');
    }).toThrow('[ERROR]');

    expect(() => {
      new Bonus('');
    }).toThrow('[ERROR]');

    expect(() => {
      new Bonus('45 ');
    }).toThrow('[ERROR]');

    expect(() => {
      new Bonus(' 45');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 정상적으로 입력되는지 테스트', () => {
    const input = 34;
    const bonus = new Bonus(input);

    expect(bonus.getNumber()).toEqual(input);
  });
});
