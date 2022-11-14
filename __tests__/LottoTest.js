const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

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

  // 아래에 추가 테스트 작성 가능
});

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

// const testBonusNumber = (bonusNumber) => {
//   const winNumbers = [1, 2, 3, 4, 5, 6];
//   expect(() => {
//     const lotto = new Lotto(winNumbers);
//     lotto.inputBonusNumber([...winNumbers, bonusNumber], 7);
//   }).toThrow("[ERROR]");
// };

describe("[기능2] 금액 입력 예외 처리", () => {
  test("[2-1] 1000원 이하로 입력하면 예외가 발생한다.", () => {
    mockQuestions(["900"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
  test("[2-2] 숫자 외 문자를 입력하면 예외가 발생한다.", () => {
    mockQuestions(["300a0"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
  test("[2-3] 1000원 단위가 아니면 예외가 발생한다.", () => {
    mockQuestions(["2400"]);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("[ERROR]");
  });
});

describe("[기능4] 랜덤 번호 뽑기 테스트", () => {
  test("3000원 입력 시 3번 랜덤 번호 뽑기", () => {
    const logSpyRandom = jest.spyOn(
      MissionUtils.Random,
      "pickUniqueNumbersInRange"
    );

    mockQuestions(["3000"]);

    const app = new App();
    app.play();

    expect(logSpyRandom).toBeCalledTimes(3);
  });
});

describe("[기능6] 당첨 번호 입력 예외 처리", () => {
  test("[6-1] 6자리가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4]);
    }).toThrow("[ERROR]");
  });
  test("[6-2] 숫자 외 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR]");
  });
  test("[6-3] 숫자가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 67]);
    }).toThrow("[ERROR]");
  });
  test("[6-4] 중복 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 1, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});

describe("[기능8] 보너스 번호 입력 예외 처리", () => {
  test("[8-1] 1자리가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).checkWinNumber([[1, 2], 1]);
    }).toThrow("[ERROR]");
  });
  test("[8-2] 숫자 외 문자면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).checkWinNumber(["a", 1]);
    }).toThrow("[ERROR]");
  });
  test("[8-3] 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).checkWinNumber(["57", 1]);
    }).toThrow("[ERROR]");
  });
});
