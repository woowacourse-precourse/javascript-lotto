const ValidateInput = require("../src/ValidateInput");
const MissionUtils = require("@woowacourse/mission-utils");

afterAll(() => {
  MissionUtils.Console.close();
});

const validateInput = new ValidateInput();

describe('isValidLottoNumber - 로또 번호로 적합한지 확인합니다.', () => {
  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(validateInput.isValidLottoNumber('1')).toBeTruthy();
    expect(validateInput.isValidLottoNumber('45')).toBeTruthy();
    expect(validateInput.isValidLottoNumber('3')).toBeTruthy();
    expect(validateInput.isValidLottoNumber('17')).toBeTruthy();
    expect(validateInput.isValidLottoNumber('  1  ')).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 로또 범위 내의 값이 아닌 경우', () => {
    expect(validateInput.isValidLottoNumber('0')).toBeFalsy();
    expect(validateInput.isValidLottoNumber('46')).toBeFalsy();
    expect(validateInput.isValidLottoNumber('-15')).toBeFalsy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 숫자가 아닌 경우', () => {
    expect(validateInput.isValidLottoNumber('a')).toBeFalsy();
    expect(validateInput.isValidLottoNumber('one')).toBeFalsy();
    expect(validateInput.isValidLottoNumber('eleven')).toBeFalsy();
    expect(validateInput.isValidLottoNumber('')).toBeFalsy();
  });
});

describe('validateInputMoney() - 구매 금액으로 적절한지 확인합니다.', () => {
  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(validateInput.validateInputMoney('8000')).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다.', () => {
    expect(validateInput.validateInputMoney('8500')).toBeFalsy();
  });
});

describe('validateWinningNumbers() - 당첨 번호에 대한 유효성 검사합니다.', () => {
  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(validateInput.validateWinningNumbers([1, 2, 3, 4, 5, 6])).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 숫자가 아닌 경우', () => {
    expect(validateInput.validateWinningNumbers([1, 2, 3, 'a', 'b', 6])).toBeFalsy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 입력받은 수가 6개가 아닌 경우', () => {
    expect(validateInput.validateWinningNumbers([1, 2, 3, 4, 5])).toBeFalsy();
    expect(validateInput.validateWinningNumbers([1, 2, 3, 4, 5, 6, 7])).toBeFalsy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 로또 범위 내의 수가 아닌 경우', () => {
    expect(validateInput.validateWinningNumbers([1, 2, 3, 46, 5, 6])).toBeFalsy();
    expect(validateInput.validateWinningNumbers([1, 2, 3, 0, 5, 6])).toBeFalsy();
    expect(validateInput.validateWinningNumbers([-1, 2, 3, 4, 5, 6])).toBeFalsy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 자연수가 아닌 경우', () => {
    expect(validateInput.validateWinningNumbers([1, 2, 3, 4.7, 5, 6])).toBeFalsy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 중복된 값이 존재하는 경우', () => {
    expect(validateInput.validateWinningNumbers([1, 2, 3, 3, 5, 6])).toBeFalsy();
  });
});

describe('validateBonusNumber() - 보너스 번호가 적절한지 확인합니다.', () => {
  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(validateInput.validateBonusNumber(['1', '2', '3', '4', '5', '6'], '7')).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 숫자가 아닌 경우', () => {
    expect(validateInput.validateBonusNumber(['1', '2', '3', '4', '5', '6'], 'a')).toBeFalsy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 입력받은 수가 1개가 아닌 경우', () => {
    expect(validateInput.validateBonusNumber(['1', '2', '3', '4', '5', '6'], '1,2')).toBeFalsy();
    expect(validateInput.validateBonusNumber(['1', '2', '3', '4', '5', '6'], '')).toBeFalsy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 로또 범위 내의 수가 아닌 경우', () => {
    expect(validateInput.validateBonusNumber(['1', '2', '3', '4', '5', '6'], '46')).toBeFalsy();
    expect(validateInput.validateBonusNumber(['1', '2', '3', '4', '5', '6'], '0')).toBeFalsy();
    expect(validateInput.validateBonusNumber(['1', '2', '3', '4', '5', '6'], '-12')).toBeFalsy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 자연수가 아닌 경우', () => {
    expect(validateInput.validateBonusNumber(['1', '2', '3', '4', '5', '6'], '4.7')).toBeFalsy();
  });
  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다. - 중복된 값이 존재하는 경우', () => {
    expect(validateInput.validateBonusNumber(['1', '2', '3', '4', '5', '6'], '4')).toBeFalsy();
  });
});
