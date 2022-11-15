const App = require('../src/App');
const ExceptionCheck = require('../src/ExceptionCheck');
const { Console } = require('@woowacourse/mission-utils');

afterEach(() => {
  Console.close();
});

describe('ExeptionCheck 클래스의 userInputMoneyValue 테스트', () => {
  test('유저 입력값이 1,000단위가 아닐때 예외를 throw 하는지 확인', () => {
    const exceptionCheck = new ExceptionCheck();
    const moneyValue = 1100;
    expect(() => {
      exceptionCheck.userInputMoneyValue(moneyValue);
    }).toThrow();
  });

  test('예외 처리 발생시에 [ERROR]문구가 메세지의 맨앞에 있는지 확인', () => {
    const exceptionCheck = new ExceptionCheck();
    const moneyValue = 1100;
    expect(() => {
      exceptionCheck.userInputMoneyValue(moneyValue);
    }).toThrowError(/^\[ERROR\]/);
  });
});

describe('ExeptionCheck 클래스의 userInputWinNumbers() 테스트', () => {
  test('당첨 숫자 입력값이 6자리가 아닐때 예외처리 throw 확인', () => {
    const exceptionCheck = new ExceptionCheck();
    const input = [1, 2, 3, 4, 5];
    expect(() => {
      exceptionCheck.userInputWinNumbers(input);
    }).toThrowError('[ERROR]');
  });
});

describe('ExeptionCheck 클래스의 userInputWinNumberRange() 테스트', () => {
  test('입력 범위 외인 46이 입력됐을때 에러 throw확인', () => {
    const exceptionCheck = new ExceptionCheck();
    const input = [1, 2, 3, 4, 5, 0];

    expect(() => {
      exceptionCheck.userInputWinNumberRange(input);
    }).toThrowError('[ERROR]');
  });
  test('입력 범위 외인 46이 입력됐을때 에러 throw확인', () => {
    const exceptionCheck = new ExceptionCheck();
    const input = [1, 2, 3, 4, 5, 46];

    expect(() => {
      exceptionCheck.userInputWinNumberRange(input);
    }).toThrowError('[ERROR]');
  });
});
