const Lotto = require("../src/Lotto");
const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const { PrizeInformation } = require("../src/LottoInfo");

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


describe("로또 구매 비용 입력 테스트", () => {
  const APP = new App();

  test("입력한 로또 구매 비용이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "abc1000";
      APP.checkCost(INPUT)
    }).toThrow("[ERROR] 로또 구입 금액은 숫자여야 합니다.");
  });

  test("입력한 로또 구매 비용이 천 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "20500";
      APP.checkCost(INPUT)
    }).toThrow("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.")
  });

  test("로또 구매 비용을 올바르게 입력하면 예외가 발생하지 않는다.", () => {
    expect(() => {
      const INPUT = "15000";
      APP.checkCost(INPUT)
    }).not.toThrow("[ERROR]")
  });
})

describe("로또 당첨 번호 입력 테스트", () => {
  const APP = new App();

  test("입력한 로또 번호 중 숫자가 아닌 것이 있으면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "1,2,a,4,5,6";
      APP.convertSixInputsToNumbers(INPUT)
    }).toThrow("[ERROR] 번호 입력은 숫자여야 합니다.")
  });

  test("입력한 로또 번호에 콤마가 올바르지 않게 들어있으면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "1,2,3,4,5,6,";
      APP.convertSixInputsToNumbers(INPUT)
    }).toThrow("[ERROR] 입력된 데이터 중 빈 데이터가 없어야 합니다.")
  });

  test("로또 번호를 올바르게 입력했다면 숫자로 변환이 가능하다", () => {
    const INPUT = "1,3,5,7,10,13";
    const RESULT = APP.convertSixInputsToNumbers(INPUT);
    expect(RESULT).toEqual([1, 3, 5, 7, 10, 13])
  });
})

describe("로또 보너스 번호 입력 테스트", () => {
  const APP = new App();
  const WON_LOTTO = new Lotto([1, 4, 10, 11, 12, 13]);

  test("보너스 번호에 아무 것도 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "";
      APP.checkBonusNumber(INPUT, WON_LOTTO)
    }).toThrow("[ERROR] 입력된 데이터 중 빈 데이터가 없어야 합니다.")
  });

  test("보너스 번호에 숫자가 아닌 문자를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "ab";
      APP.checkBonusNumber(INPUT, WON_LOTTO)
    }).toThrow("[ERROR] 번호 입력은 숫자여야 합니다.")
  });

  test("보너스 번호에 1-45를 벗어난 숫자를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "50";
      APP.checkBonusNumber(INPUT, WON_LOTTO)
    }).toThrow("[ERROR] 보너스 번호는 1-45 범위 숫자여야 합니다.")
  });

  test("보너스 번호에 당첨 번호 중 하나를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "4";
      APP.checkBonusNumber(INPUT, WON_LOTTO)
    }).toThrow("[ERROR] 보너스 번호는 기존 당첨 번호와 중복될 수 없습니다.")
  });

  test("보너스 번호를 올바르게 입력하면 예외가 발생하지 않는다.", () => {
    expect(() => {
      const INPUT = "30";
      APP.checkBonusNumber(INPUT, WON_LOTTO)
    }).not.toThrow("[ERROR]")
  });
})

describe("로또 클래스 예외 발생 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복이 없어야 합니다.");
  });

  test("로또 번호에 1-45 범위를 벗어난 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 50, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 1-45 사이 숫자여야 합니다.");
  });

  test("로또 번호를 올바르게 넣으면 예외가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow("[ERROR]");
  });
});

describe("로또 발행 테스트", () => {
  test("로또 5개 발행하기", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45]
    ]);
    const LOGS = [
      "5개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]"
    ];
    const LOG_SPY = getLogSpy();
    const APP = new App();
    const MY_LOTTOS = APP.publishLottos(5000);
    APP.printMyLottos(MY_LOTTOS);

    LOGS.forEach((log) => {
      expect(LOG_SPY).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe("로또 결과 반환 테스트", () => {
  const WON_LOTTO = new Lotto([2, 3, 4, 5, 6, 7]);
  const BONUS = 8;

  test("6개 일치는 1등이다", () => {
    const MY_LOTTO = new Lotto([2, 3, 4, 5, 6, 7]);
    expect(MY_LOTTO.compareWithWinningNumbers(WON_LOTTO, BONUS)).toBe(1);
  });

  test("5개 일치하고 보너스 볼이 일치하면 2등이다", () => {
    const MY_LOTTO = new Lotto([2, 3, 4, 5, 6, 8]);
    expect(MY_LOTTO.compareWithWinningNumbers(WON_LOTTO, BONUS)).toBe(2);
  });

  test("5개 일치하고 보너스 볼이 불일치하면 3등이다", () => {
    const MY_LOTTO = new Lotto([2, 3, 4, 5, 6, 9]);
    expect(MY_LOTTO.compareWithWinningNumbers(WON_LOTTO, BONUS)).toBe(3);
  });

  test("4개 일치는 4등이다", () => {
    const MY_LOTTO = new Lotto([2, 3, 4, 5, 9, 10]);
    expect(MY_LOTTO.compareWithWinningNumbers(WON_LOTTO, BONUS)).toBe(4);
  });

  test("3개 일치는 5등이다", () => {
    const MY_LOTTO = new Lotto([2, 3, 4, 9, 10, 11]);
    expect(MY_LOTTO.compareWithWinningNumbers(WON_LOTTO, BONUS)).toBe(5);
  });

  test("3개 미만 일치하면 아무 것도 얻지 못한다", () => {
    const MY_LOTTO = new Lotto([2, 3, 9, 10, 11, 12]);
    expect(MY_LOTTO.compareWithWinningNumbers(WON_LOTTO, BONUS)).toBe(0);
  });
})

describe("여러 로또 비교 테스트", () => {
  const APP = new App();
  const PRIZE_INFORMATION = new PrizeInformation();

  const WON_LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
  const BONUS = 7;

  let lottos = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([1, 2, 3, 4, 5, 7]),
  new Lotto([1, 2, 3, 4, 5, 8]), new Lotto([3, 4, 5, 6, 7, 8]),
  new Lotto([10, 11, 12, 13, 14, 15]), new Lotto([30, 31, 32, 33, 34, 7])];

  APP.compareMyLottosWithWinningNumbers(lottos, WON_LOTTO, BONUS, PRIZE_INFORMATION);

  test("여러 로또를 비교하여 하나의 자료 구조에 저장할 수 있다", () => {
    expect(PRIZE_INFORMATION.quantity).toEqual([2, 1, 1, 1, 1, 0]);
  });

  test("여러 로또를 비교하여 그 수익을 계산할 수 있다", () => {
    const RESULT = PRIZE_INFORMATION.getTotalPrize();
    expect(RESULT).toBe(2031550000);
  })

  test("여러 로또를 비교하여 총 수익률을 계산할 수 있다", () => {
    const RESULT = APP.getIncomeRate(6000, PRIZE_INFORMATION);
    expect(RESULT).toBe(33859166.7);
  })
})