/* eslint-disable */

const Bonus = require('../src/Bonus');

describe('로또 보너스 번호 클래스 테스트', () => {
  test('로또 당첨 번호와 보너스 번호가 중복이 되면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(7, [1, 2, 3, 4, 5, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 당첨 번호가 1-45 범위가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus(46, [1, 2, 3, 4, 5, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 당첨 번호가 문자열이나 기호라면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('A', [1, 2, 3, 4, 5, 7]);
    }).toThrow('[ERROR]');
  });
});
