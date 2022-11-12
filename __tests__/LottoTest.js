const Lotto = require("../src/Lotto");
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

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1, 2, 3, 4, 5, 6, 7");
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1, 2, 3, 4, 5, 5");
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 범위가 1 ~ 45가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1, 2, 3, 77, 5, 6");
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능

  test("보너스 숫자의 범위가 1 ~ 45가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1, 2, 3, 4, 5, 6", "77", "1000");
    }).toThrow("[ERROR]")
  })

  test("금액을 1000원 단위로 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1, 2, 3, 4, 5, 6", "10", "7777");
    }).toThrow("[ERROR]")
  })

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("1, 2, 3, 4, 5, 6", "1", "5000");
    }).toThrow("[ERROR]")
  })
});

describe("로또번호 생성 관련 테스트", () => {
  test("로또가 잘 생성되나 확인", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44]
    ]);
    mockQuestions(["1, 2, 3, 4, 5, 6", "10", "3000"]);
    const logs = [
      "3개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]"
    ];
    const logSpy = getLogSpy();
    const lotto = new Lotto("1, 2, 3, 4, 5, 6", "10", "3000");
    lotto.makeRandomValue(3000);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

});