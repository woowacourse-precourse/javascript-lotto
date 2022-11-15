const { describe, expect, test } = require('@jest/globals');
const BonusNumber = require('../src/BonusNumber');

describe('BonusNumber 클래스 생성 테스트', () => {
  test.each([['hi'], ['5j']])(
    '보너스 번호에 숫자가 아닌 문자열이 있으면 예외가 발생한다. new BonusNumber(%s, winningNumbers)',
    (number) => {
      const winningNumber = [1, 2, 3, 4, 5, 6];
      expect(() => {
        new BonusNumber(number, winningNumber);
      }).toThrow('[ERROR] 보너스 번호: 숫자만 입력할 수 있습니다.');
    }
  );

  test.each([
    [12, [1, 2, 12, 21, 27, 38]],
    [45, [10, 20, 21, 24, 44, 45]],
    [36, [8, 9, 18, 22, 36, 38]],
  ])(
    '보너스 번호가 당첨 번호에 포함되어 있으면 예외가 발생한다. new BonusNumber(%s, %p)',
    (number, winningNumbers) => {
      expect(() => {
        new BonusNumber(number, winningNumbers);
      }).toThrow('[ERROR] 보너스 번호: 이미 당첨 번호에 포함되어 있습니다.');
    }
  );

  test.each([[0], [-3], [46], [100]])(
    '보너스 번호가 1~45사이의 숫자가 아니라면 예외가 발생한다. new BonusNumber(%s, winningNumber)',
    (number) => {
      const winningNumber = [1, 2, 3, 4, 5, 6];
      expect(() => {
        new BonusNumber(number, winningNumber);
      }).toThrow('[ERROR] 보너스 번호: 1~45 사이의 값만 입력할 수 있습니다.');
    }
  );

  test.each([
    [12, [20, 24, 30, 41, 43, 44]],
    [9, [1, 10, 13, 14, 40, 41]],
    [45, [6, 22, 28, 31, 42, 44]],
    [22, [1, 4, 15, 27, 28, 39]],
  ])(
    'BonusNumber 클래스 생성 테스트, new BonusNumber(%s, %p)',
    (number, winningNumbers) => {
      const bonusNumber = new BonusNumber(number, winningNumbers);

      expect(bonusNumber.value).toEqual(number);
    }
  );
});
