const BonusNumber = require('../src/models/BonusNumber');

describe('보너스 번호 클래스 테스트', () => {
  test('보너스 번호는 숫자만 입력 가능하다.', () => {
    expect(() => {
      new BonusNumber('a');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호의 범위는 1~45입니다.', () => {
    const test = [-1, 0, 46, 100];
    test.forEach((item) => {
      expect(() => {
        new BonusNumber(item);
      }).toThrow('[ERROR]');
    });
  });

  test('보너스 번호와 당첨 번호는 중복될 수 없습니다.', () => {
    expect(() => {
      new BonusNumber([1, 2, 3, 4, 5, 6], 1);
    }).toThrow('[ERROR]');
  });
});
