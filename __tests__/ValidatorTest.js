const Validator = require('../src/Validator');

test('공백을 포함하면 예외 발생', () => {
  const inputValues = ['q e', ' 123', '123 ', ' '];

  inputValues.forEach((value) => {
    expect(() => Validator.throwErrorIfHasBlack(value)).toThrow('[ERROR]');
  });
});

test('문자가 0으로 시작하면 예외 발생', () => {
  const inputValues = ['0', '05', '01000', '0000'];

  inputValues.forEach((value) => {
    expect(() => Validator.throwErrorIfStartsWithZero(value)).toThrow(
      '[ERROR]'
    );
  });
});

test('1이상 45이하의 수가 아니라면 예외 발생', () => {
  const numbers = [0, 50, -4, '49', '2000', '-12'];

  numbers.forEach((number) => {
    expect(() => Validator.throwErrorIfOutOfRange(number)).toThrow('[ERROR]');
  });
});
