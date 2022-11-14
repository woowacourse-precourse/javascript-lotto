const Validator = require('../src/Validator');

describe('검증기 클래스 테스트', () => {
  test('입력값이 숫자나 심표가 아니면 예외가 발생한다.', () => {
    const input = '1000.0';
    expect(() => {
      Validator.checkInput(input);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아니면 예외가 발생한다.', () => {
    const nanList = ['one', '1st', '2nd', '10e-9'];
    nanList.forEach((nan) => {
      expect(() => {
        Validator.checkNumber(nan);
      }).toThrow('[ERROR]');
    });
  });

  test('정수가 아니면 예외가 발생한다.', () => {
    const number = 1e-9;
    expect(() => {
      Validator.checkNumber(number);
    }).toThrow('[ERROR]');
  });

  test('로또 범위가 아니면 예외가 발생한다.', () => {
    const number = 46;
    expect(() => {
      Validator.checkLottoNumber(number);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 중복되면 예외가 발생한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 5];
    expect(() => {
      Validator.checkLottoNumbers(numbers);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 중복되면 예외가 발생한다.', () => {
    const bonusNumber = 1;
    const winNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      Validator.checkLottoNumbers(bonusNumber, winNumbers);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 로또 단가 이하면 예외가 발생한다.', () => {
    const payList = [-1000, 0, 999];
    payList.forEach((pay) => {
      expect(() => {
        Validator.checkPay(pay);
      }).toThrow('[ERROR]');
    });
  });

  test('구입 금액이 로또 단가에 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    const pay = 1001;
    expect(() => {
      Validator.checkPay(pay);
    }).toThrow('[ERROR]');
  });
});
