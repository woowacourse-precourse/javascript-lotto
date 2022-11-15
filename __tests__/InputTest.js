const Input = require("../src/Input");
const keys = require("../src/utils/key");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const { inputType } = keys;

const testCase = [
  ["나 숫자아님", "-1", "", "23"],
  [
    "0,0.,..",
    "1,2,3,4,5,6,7",
    "1,,2,3,4,5,6",
    "1,1,2,3,4,5",
    ",1,2,3,4,5,6",
    "10,2,43,1,5,7",
  ],
  ["나 숫자아님", "56", "1", "7"],
];

describe("Input 클래스 테스트", () => {
  mockQuestions(testCase.flat());
  describe("1 구입금액 입력 테스트", () => {
    test("1-1 숫자가 아닌 값을 입력했을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(inputType.purchaseMoney, (inputValue) => {})
      ).toThrow();
    });
    test("1-2 음수의 값을 입력했을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(inputType.purchaseMoney, () => {})
      ).toThrow();
    });
    test("1-3 값을 입력하지 않았을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(inputType.purchaseMoney, (InputValue) => {})
      ).toThrow();
    });
    test("1-4 정확한 값을 입력했을 때 통과", () => {
      Input.getValueWithType(inputType.purchaseMoney, (InputValue) => {
        expect(InputValue).toEqual("23");
      });
    });
  });
  describe("2. 당첨번호 입력 테스트", () => {
    test("2-1 ,와 숫자 이외의 값을 받았을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(inputType.lotteryNumber, (InputValue) => {})
      ).toThrow();
    });
    test("2-2 배열로 받은 숫자가 더 많을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(inputType.lotteryNumber, (InputValue) => {})
      ).toThrow();
    });
    test("2-3 ,가 두번이상 연속으로 입력되었을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(inputType.lotteryNumber, (InputValue) => {})
      ).toThrow();
    });
    test("2-4 중복되는 숫자를 입력받았을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(inputType.lotteryNumber, (InputValue) => {})
      ).toThrow();
    });
    test("2-5 ,가 먼저 입력되었을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(inputType.lotteryNumber, (InputValue) => {
          // 입력된 배열로 값을 테스트하는 과정에서 에러 처리, -> 뒤의 console.log 함수를 실행시켜 주었을때 에러 발생
          console.log(inputValue);
        })
      ).toThrow();
    });
    test("2-6 정확한 값이 입력되었을 때 통과", () => {
      Input.getValueWithType(inputType.lotteryNumber, (InputValue) => {
        // 입력된 배열로 값을 테스트하는 과정에서 에러 처리, -> 뒤의 console.log 함수를 실행시켜 주었을때 에러 발생
        expect(InputValue).toEqual("10,2,43,1,5,7");
      });
    });
  });
  describe("3. 보너스번호 입력 테스트", () => {
    const mockWinningNumber = [1, 2, 3, 4, 5, 6];
    test("3-1 숫자가 아닌 값을 입력했을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(
          inputType.bonusNumber,
          (InputValue) => {},
          mockWinningNumber
        )
      ).toThrow();
    });
    test("3-2 로또 숫자 범위가 아닌 값을 입력했을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(
          inputType.bonusNumber,
          (InputValue) => {},
          mockWinningNumber
        )
      ).toThrow();
    });
    test("3-3 당첨번호와 중복되는 값을 입력했을 때 예외 발생", () => {
      expect(() =>
        Input.getValueWithType(
          inputType.bonusNumber,
          (InputValue) => {},
          mockWinningNumber
        )
      ).toThrow();
    });

    test("3-4 정확한 값을 입력했을 때 통과", () => {
      Input.getValueWithType(
        inputType.bonusNumber,
        (InputValue) => {
          expect(InputValue).toEqual("7");
        },
        mockWinningNumber
      );
    });
  });
});
