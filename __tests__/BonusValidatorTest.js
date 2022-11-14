const BonusValidator = require('../src/validator/BonusValidator');

describe('보너스 번호 유효성 검사기 클래스 테스트', () => {
  test('보너스 번호가 당첨 번호와 중복인 경우 예외가 발생한다.', () => {
    expect(() => {
      const winning = [1, 2, 3, 4, 5, 6];
      const bonus = 5;
      BonusValidator.validate(winning, bonus);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호의 범위가 1 ~ 45에 해당하지 않을 시 예외가 발생한다.', () => {
    expect(() => {
      const winning = [1, 2, 3, 4, 5, 6];
      const bonus = 50;
      BonusValidator.validate(winning, bonus);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      const winning = [1, 2, 3, 4, 5, 6];
      const bonus = 'i';
      BonusValidator.validate(winning, bonus);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 공백일 경우 예외가 발생한다.', () => {
    expect(() => {
      const winning = [1, 2, 3, 4, 5, 6];
      const bonus = '';
      BonusValidator.validate(winning, bonus);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 null일 경우 예외가 발생한다.', () => {
    expect(() => {
      const winning = [1, 2, 3, 4, 5, 6];
      const bonus = null;
      BonusValidator.validate(winning, bonus);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 undefined일 경우 예외가 발생한다.', () => {
    expect(() => {
      const winning = [1, 2, 3, 4, 5, 6];
      const bonus = undefined;
      BonusValidator.validate(winning, bonus);
    }).toThrow('[ERROR]');
  });
});
