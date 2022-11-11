const LottoProgram = require("../src/LottoProgram");
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

describe('validateInputMoney(inputMoney)', () => {
  const lottoProgram = new LottoProgram();

  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(lottoProgram.validateInputMoney('8000')).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다.', () => {
    expect(() => {
      lottoProgram.validateInputMoney('8500');
    }).toThrow();
  });
});

describe('validateWinningNumbers(winningNumbers)', () => {
  const lottoProgram = new LottoProgram();

  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(lottoProgram.validateWinningNumbers('1,2,3,4,5,6')).toBeTruthy();
  });

  test("공백을 포함하는 입력값도 적합한 입력값이라 판단하였습니다. 따라서 true를 반환해야 합니다.", () => {
    expect(lottoProgram.validateWinningNumbers('1   0 , 2   1 ,  3  3,   4, 5,      6')).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 숫자가 아닌 경우', () => {
    expect(() => {
      lottoProgram.validateWinningNumbers('1,2,3,a,b,6');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 입력받은 수가 6개가 아닌 경우', () => {
    expect(() => {
      lottoProgram.validateWinningNumbers('1,2,3,4,5');
    }).toThrow();

    expect(() => {
      lottoProgram.validateWinningNumbers('1,2,3,4,5,6,7');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 로또 범위 내의 수가 아닌 경우', () => {
    expect(() => {
      lottoProgram.validateWinningNumbers('1,2,3,46,5,6');
    }).toThrow();

    expect(() => {
      lottoProgram.validateWinningNumbers('1,2,3,0,5,6');
    }).toThrow();
    expect(() => {
      lottoProgram.validateWinningNumbers('-1,2,3,4,5,6');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 자연수가 아닌 경우', () => {
    expect(() => {
      lottoProgram.validateWinningNumbers('1,2,3,4.7,5,6');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 중복된 값이 존재하는 경우', () => {
    expect(() => {
      lottoProgram.validateWinningNumbers('1,2,3,3,5,6');
    }).toThrow();
  });
});

describe('validateBonusNumber(winningNumbers)', () => {
  const lottoProgram = new LottoProgram();

  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(lottoProgram.validateBonusNumber('7')).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 숫자가 아닌 경우', () => {
    expect(() => {
      lottoProgram.validateBonusNumber('a');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 입력받은 수가 1개가 아닌 경우', () => {
    expect(() => {
      lottoProgram.validateBonusNumber('1,2');
    }).toThrow();

    expect(() => {
      lottoProgram.validateBonusNumber('');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 로또 범위 내의 수가 아닌 경우', () => {
    expect(() => {
      lottoProgram.validateBonusNumber('46');
    }).toThrow();

    expect(() => {
      lottoProgram.validateBonusNumber('0');
    }).toThrow();
    expect(() => {
      lottoProgram.validateBonusNumber('-12');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 자연수가 아닌 경우', () => {
    expect(() => {
      lottoProgram.validateBonusNumber('4.7');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 중복된 값이 존재하는 경우', () => {
    expect(() => {
      mockQuestions(["8000", "1,2,3,4,5,6", "3"]);
      lottoProgram.start();
    }).toThrow();
  });
});
