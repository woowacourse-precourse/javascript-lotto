const Result = require("../src/Result");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Result 클래스 테스트", () => {
  test("당첨이 1개도 안될 경우 수익률 0%", () => {
    const logSpy = getLogSpy();
    const result = new Result(
      [[1, 2, 3, 4, 5, 6]],
      [7, 8, 9, 10, 11, 12],
      13,
      1
    );
    expect(logSpy).toHaveBeenCalledWith("총 수익률은 0.0%입니다.");
  });
  test("3개 일치 1개", () => {
    const logSpy = getLogSpy();
    const result = new Result(
      [[1, 2, 3, 4, 5, 6]],
      [1, 2, 3, 10, 11, 12],
      13,
      1
    );
    expect(logSpy).toHaveBeenCalledWith("3개 일치 (5,000원) - 1개");
    expect(logSpy).toHaveBeenCalledWith("4개 일치 (50,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith("5개 일치 (1,500,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개"
    );
    expect(logSpy).toHaveBeenCalledWith("6개 일치 (2,000,000,000원) - 0개");
  });

  test("4개 일치 2개", () => {
    const logSpy = getLogSpy();
    const result = new Result(
      [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 7, 8],
      ],
      [1, 2, 3, 4, 11, 12],
      13,
      2
    );
    expect(logSpy).toHaveBeenCalledWith("3개 일치 (5,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith("4개 일치 (50,000원) - 2개");
    expect(logSpy).toHaveBeenCalledWith("5개 일치 (1,500,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개"
    );
    expect(logSpy).toHaveBeenCalledWith("6개 일치 (2,000,000,000원) - 0개");
  });
  test("5개, 5개+보너스 일치", () => {
    const logSpy = getLogSpy();
    const result = new Result(
      [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 13, 20, 7, 8],
        [1, 2, 3, 4, 5, 13],
      ],
      [1, 2, 3, 4, 5, 12],
      13,
      3
    );
    expect(logSpy).toHaveBeenCalledWith("3개 일치 (5,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith("4개 일치 (50,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith("5개 일치 (1,500,000원) - 1개");
    expect(logSpy).toHaveBeenCalledWith(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개"
    );
    expect(logSpy).toHaveBeenCalledWith("6개 일치 (2,000,000,000원) - 0개");
  });
  test("6개 일치", () => {
    const logSpy = getLogSpy();
    const result = new Result(
      [
        [1, 2, 3, 4, 5, 12],
        [21, 22, 23, 24, 25],
        [30, 31, 32, 33, 34],
      ],
      [1, 2, 3, 4, 5, 12],
      13,
      3
    );
    expect(logSpy).toHaveBeenCalledWith("3개 일치 (5,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith("4개 일치 (50,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith("5개 일치 (1,500,000원) - 0개");
    expect(logSpy).toHaveBeenCalledWith(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개"
    );
    expect(logSpy).toHaveBeenCalledWith("6개 일치 (2,000,000,000원) - 1개");
  });
});
