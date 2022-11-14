const Validator = require('../src/Validator');
const { ERROR_MESSAGES } = require('../src/common/messages');

describe('✅ Validator 클래스 : 구입 금액 테스트', () => {
  test('🖐 사용자가 1,000으로 나누어 떨어지지 않는 금액을 입력하면 에러가 발생한다.', () => {
    const invalidMoney = '1234';

    expect(() => {
      Validator.checkValidMoneyBundle(invalidMoney);
    }).toThrowError(`${ERROR_MESSAGES.INVALID_REST_MONEY}`);
  });

  test('🖐 사용자가 음수를 입력하면 에러가 발생한다', () => {
    const invalidMoney = '-1';

    expect(() => {
      Validator.checkValidMoneyBundle(invalidMoney);
    }).toThrowError(`${ERROR_MESSAGES.INVALID_NEGATIVE_NUMBER}`);
  });

  test('🖐 사용자가 미입력 또는 공백, 0을 입력하면 에러가 발생한다.', () => {
    const invalidMoney = ['0', '', ' '];

    expect(() => {
      invalidMoney.forEach((money) => {
        Validator.checkValidMoneyBundle(money);
      });
    }).toThrowError(`${ERROR_MESSAGES.INVALID_EMPTY_INPUT}`);
  });

  test('🖐 사용자 숫자가 아닌 값을 입력하면 에러가 발생한다.', () => {
    const invalidMoney = ['1e3', 'abc', '우테코 조아요'];

    expect(() => {
      invalidMoney.forEach((money) => {
        Validator.checkValidMoneyBundle(money);
      });
    }).toThrowError(`${ERROR_MESSAGES.INVALID_NUMBER}`);
  });
});

describe('✅ Validator 클래스 : 당첨 번호 테스트', () => {
  test('🖐 사용자가 숫자가 아닌 번호를 입력하면 에러가 발생한다', () => {
    const invalidInputs = ['우테코 조아요', '', ' ', 'Reason', '1a', '1e4'];

    expect(() => {
      invalidInputs.forEach((input) => {
        Validator.checkWinNumbersBundle(input);
      });
    }).toThrowError(`${ERROR_MESSAGES.INVALID_INPUT}`);
  });

  test('🖐 사용자가 당첨 번호를 6개 미만 또는 초과 입력 시 에러가 발생한다.', () => {
    const invalidInputs = ['1,2,3,4,5', '1', '1,2,3,4,5,6,7'];

    expect(() => {
      invalidInputs.forEach((input) => {
        Validator.checkWinNumbersBundle(input);
      });
    }).toThrowError(`${ERROR_MESSAGES.INVALID_LOTTO_COUNT}`);
  });

  test(`🖐 사용자가 입력한 당첨 번호가 1 ~ 45 사이 숫자가 아니면 에러가 발생한다.`, () => {
    const invalidInputs = ['46,47,48,4,5,6', '0,-1,7,48,5,1'];

    expect(() => {
      invalidInputs.forEach((input) => {
        Validator.checkWinNumbersBundle(input);
      });
    }).toThrowError(`${ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE}`);
  });
});

describe('✅ Validator 클래스 : 보너스 번호 테스트', () => {
  test('🖐 사용자가 당첨 번호와 중복되는 숫자를 입력하면 에러가 발생한다.', () => {
    const winLottoNumbers = '1,2,3,4,5,6';
    const bonusNumber = '6';

    expect(() => {
      Validator.checkDuplicateBonusNumber(winLottoNumbers, bonusNumber);
    }).toThrowError(`${ERROR_MESSAGES.DUPLICATE_NUMBER}`);
  });

  test('🖐 사용자가 보너스 번호에 음수를 입력하면 에러가 발생한다.', () => {
    const bonusNumber = '-1';
    expect(() => {
      Validator.checkNegativeBonusNumber(bonusNumber);
    }).toThrowError(`${ERROR_MESSAGES.INVALID_NEGATIVE_NUMBER}`);
  });

  test('🖐 사용자가 보너스 번호로 1 ~ 45 범위의 숫자가 아닌 값을 입력하면 에러가 발생한다.', () => {
    const bonusNumber = '505';
    expect(() => {
      Validator.checkBonusNumberRange(bonusNumber);
    }).toThrowError(`${ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE}`);
  });

  test('🖐 사용자가 보너스 번호로 숫자가 아닌 값을 입력하면 에러가 발생한다.', () => {
    const notNumbers = ['우테코 조아요', '1e8', ' ', ''];
    expect(() => {
      notNumbers.forEach((notNumber) => {
        Validator.checkNotNumber(notNumber);
      });
    }).toThrowError(`${ERROR_MESSAGES.INVALID_NUMBER}`);
  });
});
