const { Console } = require('@woowacourse/mission-utils');

const Validator = require('../src/Validator');

afterAll(() => Console.close());

test('공백을 포함한 경우 예외 발생', () => {
  const inputValues = ['q e', ' 123', '123 ', ' '];

  inputValues.forEach((value) => {
    expect(() => Validator.throwErrorIfHasBlack(value)).toThrow('[ERROR]');
  });
});

test('0으로 시작하는 경우 예외 발생', () => {
  const inputValues = ['0', '05', '01000', '0000'];

  inputValues.forEach((value) => {
    expect(() => Validator.throwErrorIfStartsWithZero(value)).toThrow(
      '[ERROR]'
    );
  });
});

test('1이상 45이하의 수가 아닌 경우 예외 발생', () => {
  const numbers = [0, 50, -4, '49', '2000', '-12'];

  numbers.forEach((number) => {
    expect(() => Validator.throwErrorIfOutOfRange(number)).toThrow('[ERROR]');
  });
});

describe('입력된 돈에 대한 유효성 검사 테스트', () => {
  test('공백을 포함한 경우 예외 발생', () => {
    const inputValues = ['q e', ' 123', '123 ', ' '];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidMoney(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('0으로 시작하는 경우 예외 발생', () => {
    const inputValues = ['0', '05', '01000', '0000'];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidMoney(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('숫자가 아닌 경우 예외 발생', () => {
    const inputValues = ['1e3', '5214!', '!@#', '한글'];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidMoney(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('1000의 배수가 아닌 경우 예외 발생', () => {
    const inputValues = ['1e3', '5214!', '!@#', '한글'];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidMoney(value)).toThrow(
        '[ERROR]'
      );
    });
  });
});

describe('입력된 당첨 번호에 대한 유효성 검사 테스트', () => {
  test('공백을 포함한 경우 예외 발생', () => {
    const inputValues = ['q, e', ' 123,', '1,23 ', ' '];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidWinningForm(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test(',를 기준으로 구분했을 때 숫자가 아닌 경우 예외 발생', () => {
    const inputValues = ['12,qw', '#,45', '1,2,3,4,a', ',1,2', '1,2,'];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidWinningForm(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test(',를 기준으로 구분했을 때 0으로 시작하는 숫자가 존재하는 경우 예외 발생', () => {
    const inputValues = ['1,2,3,03', '00,123,34', '4,05,6,7,8'];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidWinningForm(value)).toThrow(
        '[ERROR]'
      );
    });
  });
});

describe('숫자 배열 당첨 번호에 대한 유효성 검사 테스트', () => {
  test('배열의 길이가 6이 아닌 경우 예외 발생', () => {
    const winningNumbers = [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 6, 7],
    ];

    winningNumbers.forEach((numbers) => {
      expect(() =>
        Validator.throwErrorIfInvalidWinningNumbers(numbers)
      ).toThrow('[ERROR]');
    });
  });

  test('각 요소가 1에서 45까지의 수가 아닌 경우 예외 발생', () => {
    const winningNumbers = [
      [1, 2, 3, 4, 5, 50],
      [-2, 5, 6, 7, 25, 31],
      [0, 5, 13, 21, 25, 45],
    ];

    winningNumbers.forEach((numbers) => {
      expect(() =>
        Validator.throwErrorIfInvalidWinningNumbers(numbers)
      ).toThrow('[ERROR]');
    });
  });

  test('중복된 숫자가 존재하는 경우 예외 발생', () => {
    const winningNumbers = [
      [1, 1, 3, 4, 5, 50],
      [2, 5, 7, 7, 25, 31],
      [4, 5, 13, 21, 25, 25],
    ];

    winningNumbers.forEach((numbers) => {
      expect(() =>
        Validator.throwErrorIfInvalidWinningNumbers(numbers)
      ).toThrow('[ERROR]');
    });
  });
});

describe('입력된 보너스 번호에 대한 유효성 검사 테스트', () => {
  test('공백을 포함한 경우 예외 발생', () => {
    const inputValues = [' 13', ' 45', '2 7', ' '];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidBonusNumber(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('0으로 시작하는 경우 예외 발생', () => {
    const inputValues = ['013', '05', '009', '0000'];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidBonusNumber(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('1에서 45까지의 수가 아닌 경우 예외 발생', () => {
    const inputValues = ['-4', '46', '100'];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidBonusNumber(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('당첨 번호에 포함된 숫자일 경우 예외 발생', () => {
    const winningNumbers = [
      [1, 2, 3, 4, 5, 6],
      [3, 5, 13, 31, 42, 45],
      [28, 30, 31, 32, 34, 35],
    ];
    const inputValues = ['1', '13', '35'];

    inputValues.forEach((value, i) => {
      expect(() =>
        Validator.throwErrorIfInvalidBonusNumber(value, winningNumbers[i])
      ).toThrow('[ERROR]');
    });
  });
});
