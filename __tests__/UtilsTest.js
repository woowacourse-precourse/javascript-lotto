const Utils = require("../src/Utils");
const MissionUtils = require("@woowacourse/mission-utils");

afterAll(() => {
  MissionUtils.Console.close();
});

const utils = new Utils();

describe('isBlank(input) - 입력값이 빈 문자열인지 판별합니다.', () => {
  test('빈 문자열이 입력값으로 들어오는 경우, true가 반환되어야 합니다', () => {
    expect(utils.isBlank('')).toBeTruthy();
  });

  test('빈 문자열이 아닌 문자열이 입력값으로 들어오는 경우, false가 반환되어야 합니다.', () => {
    expect(utils.isBlank('50000원')).toBeFalsy();
  });
});

describe('isNumber(input) - 입력값이 숫자인지 판별합니다.', () => {
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

describe('isThousandUnit(input) - 입력값이 1000으로 나누어지는지 판별합니다.', () => {
  test('입력값이 1000 단위로 나누어질 경우, true가 반환되어야 합니다.', () => {
    expect(utils.isThousandUnit('8000')).toBeTruthy();
  });

  test('입력값이 1000 단위로 나누어지지 않는 경우, false가 반환되어야 합니다.', () => {
    expect(utils.isThousandUnit('8500')).toBeFalsy();
  });
});

describe('isPositive(input) - 입력값이 양수인지 확인합니다.', () => {
  test('입력값이 양수일 경우, true가 반환되어야 합니다.', () => {
    expect(utils.isPositive('8000')).toBeTruthy();
  });

  test('입력값이 음수일 경우, false가 반환되어야 합니다.', () => {
    expect(utils.isPositive('-8000')).toBeFalsy();
  });
});

describe('isNaturalNumber(input) - 입력값이 자연수인지 확인합니다.', () => {
  test('입력값이 자연수일 경우, true가 반환되어야 합니다.', () => {
    expect(utils.isNaturalNumber('8000')).toBeTruthy();
  });

  test('입력값이 소수일 경우, false가 반환되어야 합니다.', () => {
    expect(utils.isNaturalNumber('8000.00000000001')).toBeFalsy();
  });
});

describe("randomSelectWithoutOverlap() - 길이가 6인 오름차순 정렬한 무작위로 선택된 요소의 배열을 반환합니다.", () => {
  test("randomSelectWithoutOverlap() 메서드의 반환값의 길이가 6인지 확인합니다.", () => {
    for (let count = 0; count < 1000; count++) {
      const lottoArray = utils.randomSelectWithoutOverlap();
      expect(lottoArray.length === 6).toBeTruthy();
    }
  });

  test("randomSelectWithoutOverlap() 메서드의 반환값에 중복되는 요소가있는지 확인합니다.", () => {
    for (let count = 0; count < 1000; count++) {
      const lottoArray = utils.randomSelectWithoutOverlap();
      expect([...new Set(lottoArray)].every((value, idx) => value === lottoArray[idx])).toBeTruthy();
    }
  })
});

