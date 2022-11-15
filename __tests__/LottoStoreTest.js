const LottoStore = require("../src/LottoStore");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또를 구매하는 기능", () => {
    test("[예외 처리] 입력한 값이 숫자가 아닌 경우", () => {
        const store = new LottoStore();

        expect(() => store.buy("string")).toThrow("[ERROR]");
        expect(() => store.buy("1000d")).toThrow("[ERROR]");
    });

    test("[예외 처리] 1000원 단위로 나누어 떨어지지 않는 경우", () => {
        const store = new LottoStore();

        expect(()=>store.buy(1234)).toThrow("[ERROR]");
    });

    test("로또를 발행하여 출력하기", () => {
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45]
      ]);
      const logs = [
        "8개를 구매했습니다.",
        "[8, 21, 23, 41, 42, 43]",
        "[3, 5, 11, 16, 32, 38]",
        "[7, 11, 16, 35, 36, 44]",
        "[1, 8, 11, 31, 41, 42]",
        "[13, 14, 16, 38, 42, 45]",
        "[7, 11, 30, 40, 42, 43]",
        "[2, 13, 22, 32, 38, 45]",
        "[1, 3, 5, 14, 22, 45]"
      ];

      const logSpy = getLogSpy();

      const store = new LottoStore();
      store.buy(8000);

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    })
});