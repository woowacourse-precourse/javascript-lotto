const Validator = require('../src/Validator');

describe('Validator 클래스 테스트', () => {
  test('아무 입력이 없는 경우', () => {
    expect(() => {
      new Validator().isValidInput('');
    }).toThrow('[ERROR]');
  });

  test('입력에 공백이 있는 경우', () => {
    expect(() => {
      new Validator().isValidInput(' ');
    }).toThrow('[ERROR]');
  });

  test('숫자 입력이 아닌 경우', () => {
    expect(() => {
      new Validator().isValidNumber('a');
    }).toThrow('[ERROR]');
  });

  test('정수 입력이 아닌 경우', () => {
    expect(() => {
      new Validator().isValidNumber('2.3');
    }).toThrow('[ERROR]');
  });

  test('배열에 중복된 숫자가 있는 경우', () => {
    expect(() => {
      new Validator().hasDuplicateNumberInNumbers([1, 2, 1]);
    }).toThrow('[ERROR]');
  });
});
