const Lotto = require("../src/Lotto");
const Bonus = require("../src/Bonus");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌것이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 범위 밖의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 범위 밖의 숫자면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(50);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호와 보너스 숫자가 겹치면 예외를 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5]);
      lotto.isUniqueBonus(5);
    }).toThrow("[ERROR]");
  });

  test("test.", () => {
    const logs = ["총 수익률은 62.5%입니다."];
    const logSpy = getLogSpy();
    new Lotto([1, 2, 3, 4, 5, 6]).showRateOfReturn(8000, [1, 0, 0, 0, 0]);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
