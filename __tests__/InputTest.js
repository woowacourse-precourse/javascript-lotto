const LottoProgram = require("../src/LottoProgram");
const ValidateInput = require("../src/ValidateInput");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

afterAll(() => {
  MissionUtils.Console.close();
});

const validateInput = new ValidateInput();

describe('validateInputMoney(inputMoney)', () => {
  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(validateInput.validateInputMoney('8000')).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, false를 반환해야 합니다.', () => {
    expect(validateInput.validateInputMoney('8500')).toBeFalsy();
  });
});

describe('validateBonusNumber(bonusNumber)', () => {
  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(validateInput.validateBonusNumber([1, 2, 3, 4, 5, 6], '7')).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 숫자가 아닌 경우', () => {
    expect(() => {
      validateInput.validateBonusNumber([1, 2, 3, 4, 5, 6], 'a');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 입력받은 수가 1개가 아닌 경우', () => {
    expect(() => {
      validateInput.validateBonusNumber([1, 2, 3, 4, 5, 6], '1,2');
    }).toThrow();

    expect(() => {
      validateInput.validateBonusNumber([1, 2, 3, 4, 5, 6], '');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 로또 범위 내의 수가 아닌 경우', () => {
    expect(() => {
      validateInput.validateBonusNumber([1, 2, 3, 4, 5, 6], '46');
    }).toThrow();

    expect(() => {
      validateInput.validateBonusNumber([1, 2, 3, 4, 5, 6], '0');
    }).toThrow();
    expect(() => {
      validateInput.validateBonusNumber([1, 2, 3, 4, 5, 6], '-12');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 자연수가 아닌 경우', () => {
    expect(() => {
      validateInput.validateBonusNumber([1, 2, 3, 4, 5, 6], '4.7');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 중복된 값이 존재하는 경우', () => {
    expect(() => {
      validateInput.validateBonusNumber([1, 2, 3, 4, 5, 6], 4);
    }).toThrow();
  });
});
