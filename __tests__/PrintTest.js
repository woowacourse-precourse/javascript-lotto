const Print = require("../src/Print");
const ErrorMessage = require("../src/utils/const/error");
const PrintMessage = require("../src/utils/const/print");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const testCase_1 = {
  "1-1": [
    "유효한 값이 아닙니다",
    ["유효X"],
    [{ correct: "??", isBonusCorrect: 12 }],
  ],
  "1-2": [
    [{ correct: 5, isBonusCorrect: false }],
    { purchaseMoney: 8000, profit: 5000 },
    [
      [1, 2, 3, 4, 5, 6],
      [11, 12, 13, 14, 15, 16],
    ],
  ],
};

const logCase_1 = {
  "1-2": [
    [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ],
    ["총 수익률은 62.5%입니다."],
    ["[1, 2, 3, 4, 5, 6]", "[11, 12, 13, 14, 15, 16]"],
  ],
};

describe("Print 클래스 ", () => {
  describe("1. 유효성 테스트", () => {
    test.each(testCase_1["1-1"])(
      `1-1-%# 목록에 없는 값을 받았을 때 예외 발생.`,
      (test) => {
        expect(() => Print.it(test)).toThrow();
      }
    );
    let testRef = { index: 0 };
    test.each(testCase_1["1-2"])(
      `1-2-%# 목록에 있는 값을 받았을때 통과.`,
      (test) => {
        const logspy = getLogSpy();
        Print.it(test);
        const count = testRef;
        count.index++;
        logCase_1["1-2"][count.index - 1].forEach((log) =>
          expect(logspy).toHaveBeenCalledWith(expect.stringContaining(log))
        );
      }
    );
  });

  const testCase_2 = {
    "2-1": [
      [
        [
          [1, 2, 3, 4, 5, 6],
          [11, 12, 13, 14, 15, 16],
        ],
      ],
    ],
    "2-2": [[[{ correct: 4, isBonusCorrect: false }]]],
    "2-3": [{ purchaseMoney: 10000, profit: 1000 }],
  };

  const logCase_2 = {
    "2-1": [["[1, 2, 3, 4, 5, 6]", "[11, 12, 13, 14, 15, 16]"]],
    "2-2": [
      [
        "당첨 통계",
        "---",
        "3개 일치 (5,000원) - 0개",
        "4개 일치 (50,000원) - 1개",
        "5개 일치 (1,500,000원) - 0개",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
        "6개 일치 (2,000,000,000원) - 0개",
      ],
    ],
    "2-3": [["총 수익률은 10%입니다."]],
  };

  describe("2. 출력 테스트", () => {
    const testRef_1 = { index: 0 };
    const testRef_2 = { index: 0 };
    const testRef_3 = { index: 0 };

    test.each(testCase_2["2-1"])(
      "2-1-%#  lotteryNumber 출력값 확인",
      (test) => {
        const logSpy = getLogSpy();
        Print.it(test);
        const count = testRef_1;
        count.index++;
        logCase_2["2-1"][count.index - 1].forEach((log) =>
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
        );
      }
    );
    test.each(testCase_2["2-2"])("2-2-%# 당첨결과 출력값 확인", (test) => {
      console.log(test);
      const logSpy = getLogSpy();
      Print.it(test);
      const count = testRef_2;
      count.index++;
      logCase_2["2-2"][count.index - 1].forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
    test.each(testCase_2["2-3"])("2-3-%# 수익률 출력 값 확인", (test) => {
      const logSpy = getLogSpy();
      Print.it(test);
      const count = testRef_3;
      count.index++;
      logCase_2["2-3"][count.index - 1].forEach((log) =>
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
      );
    });
  });
});
