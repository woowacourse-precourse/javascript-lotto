const Bonus = require('../src/Lotto/Bonus');

describe('보너스 번호 유효성 테스트', () => {
  test('보너스 번호가 숫자가 아닌 값이면 예외가 발생한다.', () => {
    let winningNumber = '1,2,3,4,5,6';
    let bonusNumber = 'a';
    expect(() => {
      new Bonus(bonusNumber, winningNumber);
    }).toThrow('[ERROR]');

    bonusNumber = ' ';
    expect(() => {
      new Bonus(bonusNumber, winningNumber);
    }).toThrow('[ERROR]');

    bonusNumber = 'null';
    expect(() => {
      new Bonus(bonusNumber, winningNumber);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    let winningNumber = '1,2,3,4,5,6';
    let bonusNumber = '46';
    expect(() => {
      new Bonus(bonusNumber, winningNumber);
    }).toThrow('[ERROR]');

    bonusNumber = '0';
    expect(() => {
      new Bonus(bonusNumber, winningNumber);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복되는 값이면 예외가 발생한다.', () => {
    let winningNumber = '1,2,3,4,5,6';
    let bonusNumber = '3';
    expect(() => {
      new Bonus(bonusNumber, winningNumber);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복되지 않고 1부터 45 사이의 숫자이면 정상적으로 동작한다.', () => {
    let winningNumber = '1,2,3,4,5,6';
    let bonusNumber = '7';
    expect(() => {
      new Bonus(bonusNumber, winningNumber);
    }).not.toThrow('[ERROR]');
  });
});
