const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

afterAll(() => {
  MissionUtils.Console.close();
});

describe('isBlank(input)', () => {
  const lotto = new Lotto();
  test('빈 문자열이 입력값을 들어오는 경우, true가 반환되어야 합니다', () => {
    expect(lotto.isBlank('')).toBeTruthy();
  });

  test('빈 문자열이 아닌 문자열이 입력값으로 들어오는 경우, false가 반환되어야 합니다.', () => {
    expect(lotto.isBlank('50000원')).toBeFalsy();
  });
});

describe('isNumber(input)', () => {
  const lotto = new Lotto();

  test('문자열이 숫자로만 구성된 경우 true가 반환되어야 합니다.', () => {
    expect(lotto.isNumber('123')).toBeTruthy();
  });

  test('숫자와 문자가 혼합되어 들어오는 경우, false가 반환되어야 합니다.', () => {
    expect(lotto.isNumber('50000원')).toBeFalsy();
  });

  test('숫자 중간에 공백이 들어오는 경우, false가 반환되어야 합니다.', () => {
    expect(lotto.isNumber('5 00 00')).toBeFalsy();
  });
});

describe('isThousandUnit(input)', () => {
  const lotto = new Lotto();

  test('입력값이 1000 단위로 나누어질 경우, true가 반환되어야 합니다.', () => {
    expect(lotto.isThousandUnit('8000')).toBeTruthy();
  });

  test('입력값이 1000 단위로 나누어지지 않는 경우, false가 반환되어야 합니다.', () => {
    expect(lotto.isThousandUnit('8500')).toBeFalsy();
  });
});

describe('validInputMoney(inputMoney)', () => {
  const lotto = new Lotto();

  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(lotto.validateInputMoney('8000')).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다.', () => {
    expect(() => {
      lotto.validateInputMoney('8500');
    }).toThrow();
  });
});

describe('validateWinningNumbers(winningNumbers)', () => {
  const lotto = new Lotto();

  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(lotto.validateWinningNumbers('1,2,3,4,5,6')).toBeTruthy();
  });

  test("공백을 포함하는 입력값도 적합한 입력값이라 판단하였습니다. 따라서 true를 반환해야 합니다.", () => {
    expect(lotto.validateWinningNumbers('1   0 , 2   1 ,  3  3,   4, 5,      6')).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 숫자가 아닌 경우', () => {
    expect(() => {
      lotto.validateWinningNumbers('1,2,3,a,b,6');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 입력받은 수가 6개가 아닌 경우', () => {
    expect(() => {
      lotto.validateWinningNumbers('1,2,3,4,5');
    }).toThrow();

    expect(() => {
      lotto.validateWinningNumbers('1,2,3,4,5,6,7');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 로또 범위 내의 수가 아닌 경우', () => {
    expect(() => {
      lotto.validateWinningNumbers('1,2,3,46,5,6');
    }).toThrow();

    expect(() => {
      lotto.validateWinningNumbers('1,2,3,0,5,6');
    }).toThrow();
    expect(() => {
      lotto.validateWinningNumbers('-1,2,3,4,5,6');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 자연수가 아닌 경우', () => {
    expect(() => {
      lotto.validateWinningNumbers('1,2,3,4.7,5,6');
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 중복된 값이 존재하는 경우', () => {
    expect(() => {
      lotto.validateWinningNumbers('1,2,3,3,5,6');
    }).toThrow();
  });
});
