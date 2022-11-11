const Lotto = require("../src/Lotto");
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

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([101, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 출력 하기", () => {
    const logSpy = getLogSpy();
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
      [6, 11, 17, 27, 35, 42],
    ];
    const logs = [
      "[1, 2, 3, 4, 5, 6]",
      "[2, 3, 4, 5, 6, 7]",
      "[6, 11, 17, 27, 35, 42]",
    ];

    lottos.forEach((numbers) => new Lotto(numbers).printNumbers());

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
