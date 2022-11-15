const BonusChecker = require('../src/services/BonusChecker');

describe('BonusChecker 클래스 테스트', () => {
  test('1 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkRowDataOfBonus(1)).toThrow('[ERROR]');
  });

  test('"notNumber" 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkRowDataOfBonus('notNumber')).toThrow('[ERROR]');
  });

  test('1과 [1, 2, 3, 4, 5, 6] 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkBonus(1, [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  });

  test('45과 [1, 2, 3, 4, 5, 45] 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkBonus(45, [1, 2, 3, 4, 5, 45])).toThrow('[ERROR]');
  });
});
