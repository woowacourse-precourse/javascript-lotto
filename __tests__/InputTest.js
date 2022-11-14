const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

  describe('isNumber(input)', () => {
    const lotto = new Lotto();
  
    test('숫자가 정상적으로 입력되었을 경우', () => {
      expect(lotto.isNumber('43525')).toBeTruthy();
    });
  
    test('숫자외의 값이 들어오는 경우 EX_1', () => {
      expect(lotto.isNumber('4000원')).toBeFalsy();
    });
  
    test('숫자외의 값이 들어오는 경우 EX_2', () => {
      expect(lotto.isNumber('5 00 00')).toBeFalsy();
    });

    test('숫자외의 값이 들어오는 경우 EX_3', () => {
     expect(lotto.isNumber('234%^')).toBeFalsy();
    });
  });

  describe('isBlank(input)', () => {
    const lotto = new Lotto();
    test('빈 문자열일 경우', () => {
      expect(lotto.isBlank('')).toBeTruthy();
    });
  
    test('빈 문자열이 아닐 경우', () => {
      expect(lotto.isBlank('3000')).toBeFalsy();
    });
  });

  describe('isThousandUnit(input)', () => {
    const lotto = new Lotto();
  
    test('입력값이 천 단위인 경우', () => {
      expect(lotto.isThousandUnit('12000')).toBeTruthy();
    });
  
    test('입력값이 천 단위가 아닌경우', () => {
      expect(lotto.isThousandUnit('35000원')).toBeFalsy();
    });
  });


  afterAll(() => {
    MissionUtils.Console.close();
  });