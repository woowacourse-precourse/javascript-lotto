const Validation = require('../src/domain/Validation');

describe('Validation 클래스 테스트', () => {
  test('구매금액이 0~9로 이루어진 숫자입력이 아니라면 예외가 발생한다.', () => {
    expect(() => Validation.validatePerchaseAmount('abc')).toThrow('[ERROR]');
    expect(() => Validation.validatePerchaseAmount('123a')).toThrow('[ERROR]');
    expect(() => Validation.validatePerchaseAmount('-1abc')).toThrow('[ERROR]');
  });

  test('구매금액이 0보다 큰 숫자입력이 아니라면 예외가 발생한다.', () => {
    expect(() => 
      Validation.validatePerchaseAmount('0')
    ).toThrow('[ERROR]');
  });

  test('구매금액이 0으로 시작하는 입력이라면 예외가 발생한다.', () => {
    expect(() => 
      Validation.validatePerchaseAmount('001')
    ).toThrow('[ERROR]');
  });

  test('구매금액이 1000원 단위가 아니라면 예외가 발생한다.', () => {
    expect(() => 
      Validation.validatePerchaseAmount('1500')
    ).toThrow('[ERROR]');
  });

  test('당첨번호 입력이 "1,2,3,4,5,6" 형식이 아니라면 예외가 발생한다.', () => {
    expect(() => 
      Validation.validateWinningNumbersInput('1,2,3,4,5,6,')
    ).toThrow('[ERROR]');

    expect(() => 
      Validation.validateWinningNumbersInput('abc')
    ).toThrow('[ERROR]');

    expect(() => 
      Validation.validateWinningNumbersInput('1,2,3,4,5,,6')
    ).toThrow('[ERROR]');
  });

  test('당첨번호가 1~45사이의 서로 다른 6개의 수가 아니라면 예외가 발생한다.', () => {
    expect(() => 
      Validation.validateWinningNumbers([1,2,3])
    ).toThrow('[ERROR]');

    expect(() => 
      Validation.validateWinningNumbers([1,2,3,4,5,50])
    ).toThrow('[ERROR]');

    expect(() => 
      Validation.validateWinningNumbers([1,2,3,4,5,5])
    ).toThrow('[ERROR]');
  });

  test('보너스번호가 1~45사이의 수가 아니거나 당첨번호에 포함된다면 예외가 발생한다.', () => {
    expect(() => 
      Validation.validateBonusNumber('46', [1,2,3,4,5,6])
    ).toThrow('[ERROR]');

    expect(() => 
      Validation.validateBonusNumber('6', [1,2,3,4,5,6])
    ).toThrow('[ERROR]');
  });
});