const { describe, expect, test } = require('@jest/globals');
const WinningNumbers = require('../src/WinningNumbers');

describe('WinningNumbers 클래스 생성 테스트', () => {
  test.each([
    [[1, 2, 3, 4, '5j', 6]],
    [[1, 2, 'hi', 4, 5, 6]],
    [['A', 'B', 'C', 'D', 'E', 'F']],
  ])(
    '당첨 번호에 숫자가 아닌 문자열이 있으면 예외가 발생한다. new WinningNumbers(%p)',
    (numbers) => {
      expect(() => {
        new WinningNumbers(numbers);
      }).toThrow('[ERROR] 당첨 번호: 숫자만 입력할 수 있습니다.');
    }
  );

  test.each([
    [[1, 2, 3, 4, 5, 6, 7]],
    [[1, 2, 3, 4, 5, 6, 6]],
    [[14, 19, 21, 1, 5, 38, 45]],
    [[43, 38, 12, 17]],
  ])(
    '당첨 번호의 개수가 6개가 아니라면 예외가 발생한다. new WinningNumbers(%p)',
    (numbers) => {
      expect(() => {
        new WinningNumbers(numbers);
      }).toThrow(
        '[ERROR] 당첨 번호: 중복되지 않은 6개의 숫자로 이루어져야 합니다.'
      );
    }
  );

  test.each([
    [[1, 2, 3, 4, 5, 5]],
    [[14, 1, 1, 5, 38, 45]],
    [[43, 38, 12, 17, 17, 17]],
  ])(
    '당첨 번호에 중복된 숫자가 있으면 예외가 발생한다. new WinningNumbers(%p)',
    (numbers) => {
      expect(() => {
        new WinningNumbers(numbers);
      }).toThrow(
        '[ERROR] 당첨 번호: 중복되지 않은 6개의 숫자로 이루어져야 합니다.'
      );
    }
  );

  test.each([
    [[1, 2, 3, -4, 5, 19]],
    [[14, 1, 12, 65, 38, 45]],
    [[43, 38, 12, 17, 55, 21]],
  ])(
    '당첨 번호가 1~45사이의 숫자가 아니라면 예외가 발생한다. new WinningNumbers(%p)',
    (numbers) => {
      expect(() => {
        new WinningNumbers(numbers);
      }).toThrow('[ERROR] 당첨 번호: 1~45 사이의 값만 입력할 수 있습니다.');
    }
  );

  test.each([
    [[20, 24, 30, 41, 43, 44]],
    [[1, 10, 13, 14, 40, 41]],
    [[6, 22, 28, 31, 42, 44]],
    [[1, 4, 15, 27, 28, 39]],
  ])('WinningNumbers 클래스 생성 테스트, 당첨 번호: %p', (numbers) => {
    const winningNumbers = new WinningNumbers(numbers);

    expect(winningNumbers.value).toEqual(numbers);
  });
});
