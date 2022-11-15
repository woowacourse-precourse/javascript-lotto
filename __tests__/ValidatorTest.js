const { ERROR_HEADER } = require('../src/lottoOptions');
const Validator = require('../src/Validator');
const LottoValidator = require('../src/LottoValidator');

describe('Validator 클래스 테스트', () => {
  test('아무 입력이 없는 경우', () => {
    expect(() => {
      new Validator().isValidInput('');
    }).toThrow(ERROR_HEADER);
  });

  test('입력에 공백이 있는 경우', () => {
    expect(() => {
      new Validator().isValidInput(' ');
    }).toThrow(ERROR_HEADER);
  });

  test('숫자 입력이 아닌 경우', () => {
    expect(() => {
      new Validator().isValidNumber('a');
    }).toThrow(ERROR_HEADER);
  });

  test('정수 입력이 아닌 경우', () => {
    expect(() => {
      new Validator().isValidNumber('2.3');
    }).toThrow(ERROR_HEADER);
  });

  test('배열에 중복된 숫자가 있는 경우', () => {
    expect(() => {
      new Validator().hasDuplicateNumberInNumbers([1, 2, 1]);
    }).toThrow(ERROR_HEADER);
  });
});

describe('LottoValidator 테스트', () => {
  test('1000원 미만의 금액 입력', () => {
    expect(() => {
      new LottoValidator().isValidMoney('300');
    }).toThrow(ERROR_HEADER);
  });

  test('1000원으로 나누어 떨어지지 않는 금액 입력', () => {
    expect(() => {
      new LottoValidator().isValidMoney('10500');
    }).toThrow(ERROR_HEADER);
  });

  test('중복되는 숫자 입력', () => {
    expect(() => {
      new LottoValidator().isValidLottoNumbers([1, 2, 3, 1, 1, 5]);
    }).toThrow(ERROR_HEADER);
  });

  test('6개 미만 숫자 입력', () => {
    expect(() => {
      new LottoValidator().isValidLottoNumbers([1, 2, 3]);
    }).toThrow(ERROR_HEADER);
  });

  test('범위(1~45)를 벗어난 숫자 입력', () => {
    expect(() => {
      new LottoValidator().isValidLottoNumbers([1, 2, 3, 0, 45, 9]);
    }).toThrow(ERROR_HEADER);
  });

  test('보너스 번호 오류 테스트', () => {
    expect(() => {
      new LottoValidator().isValidBonusNumber(5, [1, 2, 3, 4, 45, 5]);
    }).toThrow(ERROR_HEADER);
  });
});
