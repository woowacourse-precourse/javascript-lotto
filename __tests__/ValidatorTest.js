const Validator = require('../src/Validator');

describe('검증 함수 테스트', () => {
  test('각 원소가 고유하면 true, 중복이 존재하면 false 반환.', () => {
    expect(Validator.isDistinct([1, 2, 3])).toEqual(true);
    expect(Validator.isDistinct([1, 3, 3])).toEqual(false);
  });

  test('숫자가 로또 범위 안에 존재하면 true, 그렇지 않으면 false 반환.', () => {
    expect(Validator.isInRange(35)).toEqual(true);
    expect(Validator.isInRange(0)).toEqual(false);
    expect(Validator.isInRange(46)).toEqual(false);
  });

  test('보너스 번호가 당첨 번호에 이미 존재하면 에러 발생.', () => {
    expect(() => {
      Validator.validateBonusNumber(4, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('잘못된 금액을 입력받았을 경우 에러 발생.', () => {
    expect(() => {
      Validator.validateMoney('10a00');
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validateMoney(0);
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validateMoney(10020);
    }).toThrow('[ERROR]');
  });
});
