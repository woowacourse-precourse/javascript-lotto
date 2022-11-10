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
    expect(lotto.validateInputMoney('8500')).toThrow("[ERROR] 유효하지 않은 값을 입력하셨습니다. 다시 확인하세요.");
  });
});

