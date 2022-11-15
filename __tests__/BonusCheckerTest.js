const BonusChecker = require('../src/services/BonusChecker');

describe('BonusChecker 클래스 테스트', () => {
  test('0 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkRowDataOfBonus(0)).toThrow('[ERROR]');
  });

  test('5 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkRowDataOfBonus(5)).toThrow('[ERROR]');
  });

  test('"notPlaceNumberInString" 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkRowDataOfBonus('notNumber')).toThrow('[ERROR]');
  });

  test('0과 [1, 2, 3, 4, 5, 6] 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkBonus(0, [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  });

  test('"string"과 [1, 2, 3, 4, 5, 6] 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkBonus('string', [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  });

  test('0과 [1, 2, 3, 4, 5, 6] 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkBonus(0, [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  });

  test('46과 [1, 2, 3, 4, 5, 45] 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkBonus(46, [1, 2, 3, 4, 5, 45])).toThrow('[ERROR]');
  });

  test('45과 [1, 2, 3, 4, 5, 45] 입력은 예외를 발생시킨다.', () => {
    expect(() => BonusChecker.checkBonus(45, [1, 2, 3, 4, 5, 45])).toThrow('[ERROR]');
  });
});
