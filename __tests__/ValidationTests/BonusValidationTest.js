const BonusValidation = require('../../src/Validation/BonusValidation');

describe('로또 보너스 번호 입력값 유효성 검사 테스트 ', () => {
  test('아무것도 입력하지 않으면 예외가 발생한다. (1)', () => {
    expect(() => {
      const bonusValidation = new BonusValidation('', []);
      bonusValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });
  test('아무것도 입력하지 않으면 예외가 발생한다. (2)', () => {
    expect(() => {
      const bonusValidation = new BonusValidation(null, []);
      bonusValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });
  test('아무것도 입력하지 않으면 예외가 발생한다. (3)', () => {
    expect(() => {
      const bonusValidation = new BonusValidation(undefined, []);
      bonusValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });

  test('1부터 45까지의 숫자가 아니라면 예외가 발생한다. (1)', () => {
    expect(() => {
      const bonusValidation = new BonusValidation('0', []);
      bonusValidation.validate();
    }).toThrow('[ERROR] 1부터 45 중 6개의 숫자를 입력해주세요.');
  });
  test('1부터 45까지의 숫자가 아니라면 예외가 발생한다. (2)', () => {
    expect(() => {
      const bonusValidation = new BonusValidation('46', []);
      bonusValidation.validate();
    }).toThrow('[ERROR] 1부터 45 중 6개의 숫자를 입력해주세요.');
  });
  test('1부터 45까지의 숫자가 아니라면 예외가 발생한다. (3)', () => {
    expect(() => {
      const bonusValidation = new BonusValidation('100', []);
      bonusValidation.validate();
    }).toThrow('[ERROR] 1부터 45 중 6개의 숫자를 입력해주세요.');
  });

  test('당첨 번호와 중복되는 값이라면 예외가 발생한다. (1)', () => {
    expect(() => {
      const bonusValidation = new BonusValidation('1', [1, 2, 3, 4, 5]);
      bonusValidation.validate();
    }).toThrow('[ERROR] 중복되는 숫자는 입력할 수 없습니다.');
  });
  test('당첨 번호와 중복되는 값이라면 예외가 발생한다. (2)', () => {
    expect(() => {
      const bonusValidation = new BonusValidation('12', [9, 8, 10, 11, 12]);
      bonusValidation.validate();
    }).toThrow('[ERROR] 중복되는 숫자는 입력할 수 없습니다.');
  });
});
