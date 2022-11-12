const Utils = require("../src/Utils");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

afterAll(() => {
  MissionUtils.Console.close();
});

const utils = new Utils();

describe('isBlank(input)', () => {
  test('빈 문자열이 입력값을 들어오는 경우, true가 반환되어야 합니다', () => {
    expect(utils.isBlank('')).toBeTruthy();
  });

  test('빈 문자열이 아닌 문자열이 입력값으로 들어오는 경우, false가 반환되어야 합니다.', () => {
    expect(utils.isBlank('50000원')).toBeFalsy();
  });
});

describe('isNumber(input)', () => {
  test('문자열이 숫자로만 구성된 경우 true가 반환되어야 합니다.', () => {
    expect(utils.isNumber('123')).toBeTruthy();
  });

  test('숫자와 문자가 혼합되어 들어오는 경우, false가 반환되어야 합니다.', () => {
    expect(utils.isNumber('50000원')).toBeFalsy();
  });

  test('숫자 중간에 공백이 들어오는 경우, false가 반환되어야 합니다.', () => {
    expect(utils.isNumber('5 00 00')).toBeFalsy();
  });
});

describe('isThousandUnit(input)', () => {
  test('입력값이 1000 단위로 나누어질 경우, true가 반환되어야 합니다.', () => {
    expect(utils.isThousandUnit('8000')).toBeTruthy();
  });

  test('입력값이 1000 단위로 나누어지지 않는 경우, false가 반환되어야 합니다.', () => {
    expect(utils.isThousandUnit('8500')).toBeFalsy();
  });
});
