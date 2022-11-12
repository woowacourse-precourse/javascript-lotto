const LottoProgram = require("../src/LottoProgram");
const Lotto = require("../src/Lotto");
const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const ValidateInput = require("../src/ValidateInput");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

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

afterAll(() => {
  MissionUtils.Console.close();
});

// describe("로또 클래스 테스트", () => {
//   test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
//     expect(() => {
//       new Lotto([1, 2, 3, 4, 5, 6, 7]);
//     }).toThrow("[ERROR]");
//   });

//   // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
//   test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
//     expect(() => {
//       new Lotto([1, 2, 3, 4, 5, 5]);
//     }).toThrow("[ERROR]");
//   });

// 아래에 추가 테스트 작성 가능
// });

// describe("start()", () => {
//   const lottoProgram = new LottoProgram();
//   const logSpy = getLogSpy();

//   test("start() 메서드의 출력이 제대로 작동하는지 확인합니다.", () => {
//     lottoProgram.inputMoney();

//     expect(logSpy).toHaveBeenCalledWith('구입금액을 입력해주세요.');
//   })
// });

describe("randomSelectWithoutOverlap()", () => {
  const lottoProgram = new LottoProgram();

  test("randomSelectWithoutOverlap() 메서드의 반환값의 길이가 6인지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = lottoProgram.randomSelectWithoutOverlap();
      expect(lottoArray.length === 6).toBeTruthy();
    }
  });

  test("randomSelectWithoutOverlap() 메서드의 반환값에 중복되는 요소가있는지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = lottoProgram.randomSelectWithoutOverlap();
      expect([...new Set(lottoArray)].every((value, idx) => value === lottoArray[idx])).toBeTruthy();
    }
  })
});

describe("isValidLottoArray()", () => {
  const lottoProgram = new LottoProgram();

  test("적절한 로또 번호 배열일 경우 true를 반환해야합니다.", () => {
    expect(lottoProgram.isValidLottoArray([1, 2, 3, 4, 5, 6])).toBeTruthy();
    expect(lottoProgram.isValidLottoArray([1, 20, 31, 41, 42, 43])).toBeTruthy();
    expect(lottoProgram.isValidLottoArray([12, 15, 20, 23, 28, 40])).toBeTruthy();
  });

  test("적절하지 않은 배열일 경우, false를 반환해야 합니다. (유효하지 않은 길이)", () => {
    expect(lottoProgram.isValidLottoArray([1, 2, 3, 4, 5])).toBeFalsy();
    expect(lottoProgram.isValidLottoArray([1, 2, 3, 4, 5, 6, 7])).toBeFalsy();
    expect(lottoProgram.isValidLottoArray([])).toBeFalsy();
  })

  test("적절하지 않은 배열일 경우, false를 반환해야 합니다. (졍렬되지 않은 상태)", () => {
    expect(lottoProgram.isValidLottoArray([15, 7, 3, 2, 10, 14])).toBeFalsy();
    expect(lottoProgram.isValidLottoArray([9, 5, 6, 23, 45, 11])).toBeFalsy();
  })

  test("적절하지 않은 배열일 경우, false를 반환해야 합니다. (중복되는 요소가 존재하는 경우)", () => {
    expect(lottoProgram.isValidLottoArray([15, 7, 3, 2, 10, 14])).toBeFalsy();
    expect(lottoProgram.isValidLottoArray([9, 5, 6, 23, 45, 11])).toBeFalsy();
  })
});

describe("getEachLottoArray()", () => {
  const lottoProgram = new LottoProgram();

  test("getEachLottoArray() 메서드의 반환값의 길이가 6인지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = lottoProgram.getEachLottoArray();
      expect(lottoArray.length === 6).toBeTruthy();
    }
  });

  test("getEachLottoArray() 메서드의 반환값에 중복되는 요소가있는지 확인합니다.", () => {
    for (let i = 0; i < 1000; i++) {
      const lottoArray = lottoProgram.getEachLottoArray();
      expect([...new Set(lottoArray)].every((value, idx) => value === lottoArray[idx])).toBeTruthy();
    }
  })
});

// describe('#printLottoList', () => {
//   test("기능 테스트", () => {
//     mockRandoms([
//       [8, 21, 23, 41, 42, 43],
//       [3, 5, 11, 16, 32, 38],
//       [7, 11, 16, 35, 36, 44],
//       [1, 8, 11, 31, 41, 42],
//       [13, 14, 16, 38, 42, 45],
//       [7, 11, 30, 40, 42, 43],
//       [2, 13, 22, 32, 38, 45],
//       [1, 3, 5, 14, 22, 45],
//     ]);
//     mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
//     const logs = [
//       "8개를 구매했습니다.",
//       "[8, 21, 23, 41, 42, 43]",
//       "[3, 5, 11, 16, 32, 38]",
//       "[7, 11, 16, 35, 36, 44]",
//       "[1, 8, 11, 31, 41, 42]",
//       "[13, 14, 16, 38, 42, 45]",
//       "[7, 11, 30, 40, 42, 43]",
//       "[2, 13, 22, 32, 38, 45]",
//       "[1, 3, 5, 14, 22, 45]",
//       // "3개 일치 (5,000원) - 1개",
//       // "4개 일치 (50,000원) - 0개",
//       // "5개 일치 (1,500,000원) - 0개",
//       // "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
//       // "6개 일치 (2,000,000,000원) - 0개",
//       // "총 수익률은 62.5%입니다.",
//     ];
//     const logSpy = getLogSpy();
//     const app = new App();
//     app.play();
//     // const lottoProgram = new LottoProgram();
//     logSpy.p
//     logs.forEach((log) => {
//       expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
//     });
//   });
// });

const valiateInput = new ValidateInput();

describe('당첨 번호에 대한 유효성 검사', () => {
  test("적절한 입력값이 들어오는 경우, true를 반환해야 합니다.", () => {
    expect(valiateInput.validateWinningNumbers([1, 2, 3, 4, 5, 6])).toBeTruthy();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 숫자가 아닌 경우', () => {
    expect(() => {
      valiateInput.validateWinningNumbers([1, 2, 3, 'a', 'b', 6]);
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 입력받은 수가 6개가 아닌 경우', () => {
    expect(() => {
      valiateInput.validateWinningNumbers([1, 2, 3, 4, 5]);
    }).toThrow();

    expect(() => {
      valiateInput.validateWinningNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 로또 범위 내의 수가 아닌 경우', () => {
    expect(() => {
      valiateInput.validateWinningNumbers([1, 2, 3, 46, 5, 6]);
    }).toThrow();

    expect(() => {
      valiateInput.validateWinningNumbers([1, 2, 3, 0, 5, 6]);
    }).toThrow();
    expect(() => {
      valiateInput.validateWinningNumbers([-1, 2, 3, 4, 5, 6]);
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 자연수가 아닌 경우', () => {
    expect(() => {
      valiateInput.validateWinningNumbers([1, 2, 3, 4.7, 5, 6]);
    }).toThrow();
  });

  test('적절하지 않은 입력값이 들어오는 경우, 에러를 발생해야 합니다. - 중복된 값이 존재하는 경우', () => {
    expect(() => {
      valiateInput.validateWinningNumbers([1, 2, 3, 3, 5, 6]);
    }).toThrow();
  });
});
