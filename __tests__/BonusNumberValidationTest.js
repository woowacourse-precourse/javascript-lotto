const BonusNumberValidation = require('../src/Validation/BonusNumberValidation');

describe('로또 보너스 번호 입력값 유효성 검사 테스트 ', () => {
  test('아무것도 입력하지 않으면 예외가 발생한다. (1)', () => {
    expect(() => {
      const bonusNumberValidation = new BonusNumberValidation('', []);
      bonusNumberValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });
  test('아무것도 입력하지 않으면 예외가 발생한다. (2)', () => {
    expect(() => {
      const bonusNumberValidation = new BonusNumberValidation(null, []);
      bonusNumberValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });
  test('아무것도 입력하지 않으면 예외가 발생한다. (3)', () => {
    expect(() => {
      const bonusNumberValidation = new BonusNumberValidation(undefined, []);
      bonusNumberValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });

  test('1부터 45까지의 숫자가 아니라면 예외가 발생한다. (1)', () => {
    expect(() => {
      const bonusNumberValidation = new BonusNumberValidation('0', []);
      bonusNumberValidation.validate();
    }).toThrow('[ERROR] 1부터 45까지의 숫자를 입력해주세요.');
  });
  test('1부터 45까지의 숫자가 아니라면 예외가 발생한다. (2)', () => {
    expect(() => {
      const bonusNumberValidation = new BonusNumberValidation('46', []);
      bonusNumberValidation.validate();
    }).toThrow('[ERROR] 1부터 45까지의 숫자를 입력해주세요.');
  });
  test('1부터 45까지의 숫자가 아니라면 예외가 발생한다. (3)', () => {
    expect(() => {
      const bonusNumberValidation = new BonusNumberValidation('100', []);
      bonusNumberValidation.validate();
    }).toThrow('[ERROR] 1부터 45까지의 숫자를 입력해주세요.');
  });

  test('당첨 번호와 중복되는 값이라면 예외가 발생한다. (1)', () => {
    expect(() => {
      const bonusNumberValidation = new BonusNumberValidation('1', [1, 2, 3, 4, 5]);
      bonusNumberValidation.validate();
    }).toThrow('[ERROR] 중복되는 숫자는 입력할 수 없습니다.');
  });
  test('당첨 번호와 중복되는 값이라면 예외가 발생한다. (2)', () => {
    expect(() => {
      const bonusNumberValidation = new BonusNumberValidation('12', [9, 8, 10, 11, 12]);
      bonusNumberValidation.validate();
    }).toThrow('[ERROR] 중복되는 숫자는 입력할 수 없습니다.');
  });
});
