const { describe, expect, test } = require('@jest/globals');
const checkValue = require('../src/libs/checkValue');

describe('checkValue.money() 테스트', () => {
  test.each([['1000j'], ['hello']])(
    '숫자가 아닌 값을 매개변수로 받으면 errorMsg의 값이 존재하는 객체를 반환한다. checkValue.money(%s)',
    (money) => {
      expect(checkValue.money(money)).toEqual({
        errorMsg: '[ERROR] 구입금액: 숫자만 입력할 수 있습니다.',
      });
    }
  );

  test.each([[100], [999]])(
    '1000보다 작은 값을 매개변수로 받으면 errorMsg의 값이 존재하는 객체를 반환한다. checkValue.money(%d)',
    (money) => {
      expect(checkValue.money(money)).toEqual({
        errorMsg: '[ERROR] 구입금액: 1000 이상 입력할 수 있습니다.',
      });
    }
  );

  test.each([[1200], [5500]])(
    '1000단위가 아닌 값을 매개변수로 받으면 errorMsg의 값이 존재하는 객체를 반환한다. checkValue.money(%d)',
    (money) => {
      expect(checkValue.money(money)).toEqual({
        errorMsg: '[ERROR] 구입금액: 1000 단위로 로또를 구입해야 합니다.',
      });
    }
  );

  test.each([[4000], [5000], [18000]])(
    '조건에 만족하는 값을 매개변수로 받으면 errorMsg는 undefined이다. checkValue.money(%d)',
    (money) => {
      expect(checkValue.money(money)).toEqual({
        errorMsg: undefined,
      });
    }
  );
});

describe('checkValue.numbers() 테스트', () => {
  test.each([
    [[1, 2, 3, '4j', 5, 6], '로또 번호'],
    [[1, 2, 3, 4, 5, '6k'], '로또 번호'],
  ])(
    '숫자가 아닌 값을 첫번째 매개변수로 받으면 errorMsg의 값이 존재하는 객체를 반환한다. checkValue.numbers(%p, %s)',
    (numbers, name) => {
      expect(checkValue.numbers(numbers, name)).toEqual({
        errorMsg: '[ERROR] 로또 번호: 숫자만 입력할 수 있습니다.',
      });
    }
  );

  test.each([
    [[1, 2, 3, 3, 5, 6], '로또 번호'],
    [[1, 2, 3, 4, 5, 6, 7], '로또 번호'],
    [[1, 2, 3, 4], '로또 번호'],
  ])(
    '중복되지 않은 6개지의 숫자들이 아닌 값을 첫번째 매개변수로 받으면 errorMsg의 값이 존재하는 객체를 반환한다. checkValue.numbers(%p, %s)',
    (numbers, name) => {
      expect(checkValue.numbers(numbers, name)).toEqual({
        errorMsg:
          '[ERROR] 로또 번호: 중복되지 않은 6개의 숫자로 이루어져야 합니다.',
      });
    }
  );

  test.each([
    [[1, 2, 3, 4, 55, 6], '로또 번호'],
    [[1, 2, -3, 4, 5, 6], '로또 번호'],
  ])(
    '1~45의 범위를 벗어난 숫자을 첫번째 매개변수로 받으면 errorMsg의 값이 존재하는 객체를 반환한다. checkValue.numbers(%p, %s)',
    (numbers, name) => {
      expect(checkValue.numbers(numbers, name)).toEqual({
        errorMsg: '[ERROR] 로또 번호: 1~45 사이의 값만 입력할 수 있습니다.',
      });
    }
  );

  test.each([
    [[1, 2, 3, 4, 5, 6], '로또 번호'],
    [[11, 22, 33, 44, 25, 36], '로또 번호'],
  ])(
    '조건에 만족하는 값을 매개변수로 받으면 errorMsg는 undefined이다. checkValue.numbers(%p, %s)',
    (numbers, name) => {
      expect(checkValue.numbers(numbers, name)).toEqual({
        errorMsg: undefined,
      });
    }
  );
});

describe('checkValue.bonusNumber() 테스트', () => {
  test.each([
    ['one', [1, 2, 3, 4, 5, 6]],
    ['1j', [1, 2, 3, 4, 5, 6]],
  ])(
    '숫자가 아닌 값을 첫번째 매개변수로 받으면 errorMsg의 값이 존재하는 객체를 반환한다. checkValue.bonusNumber(%s, %p)',
    (number, winningNumbers) => {
      expect(checkValue.bonusNumber(number, winningNumbers)).toEqual({
        errorMsg: '[ERROR] 보너스 번호: 숫자만 입력할 수 있습니다.',
      });
    }
  );

  test.each([
    [1, [1, 2, 3, 4, 5, 6]],
    [20, [10, 20, 30, 40, 35, 36]],
  ])(
    '당첨 번호에 포함되어 있는 값을 첫번째 매개변수로 받으면 errorMsg의 값이 존재하는 객체를 반환한다. checkValue.bonusNumber(%s, %p)',
    (number, winningNumbers) => {
      expect(checkValue.bonusNumber(number, winningNumbers)).toEqual({
        errorMsg: '[ERROR] 보너스 번호: 이미 당첨 번호에 포함되어 있습니다.',
      });
    }
  );

  test.each([
    [-1, [1, 2, 3, 4, 5, 6]],
    [50, [10, 20, 30, 40, 35, 36]],
  ])(
    '1~45의 범위를 벗어난 숫자을 첫번째 매개변수로 받으면 errorMsg의 값이 존재하는 객체를 반환한다. checkValue.bonusNumber(%s, %p)',
    (number, winningNumbers) => {
      expect(checkValue.bonusNumber(number, winningNumbers)).toEqual({
        errorMsg: '[ERROR] 보너스 번호: 1~45 사이의 값만 입력할 수 있습니다.',
      });
    }
  );

  test.each([
    [9, [1, 2, 3, 4, 5, 6]],
    [15, [10, 20, 30, 40, 35, 36]],
  ])(
    '조건에 만족하는 값을 매개변수로 받으면 errorMsg의 값이 존재하는 객체를 반환한다. checkValue.bonusNumber(%s, %p)',
    (number, winningNumbers) => {
      expect(checkValue.bonusNumber(number, winningNumbers)).toEqual({
        errorMsg: undefined,
      });
    }
  );
});
