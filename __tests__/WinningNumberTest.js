const WinningNumber = require("../src/WinningNumber");
const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const {MESSAGE, LOTTO} = require("../src/constant");

afterAll(() => {
  Console.close();
});

describe("당첨 번호 클래스 테스트", () => {
  describe("입력된 값을 유효성 검사", () => {
    test("입력된 당첨 번호는 쉽표로 구분된 6개의 숫자여야 한다.", () => {
      const correctInput = "1,3,5,7,9,11";
      const errorInput = "1,3,5,7,9,11,13";
      const isLength = jest.fn(input => {
        const winningNumber = input.split(",");
        if (winningNumber.length !== 6) {
          throw new Error(MESSAGE.ERROR.LOTTO_LENGTH);
        }
        return "올바른 값"
      });

      expect(isLength(correctInput)).toBe("올바른 값");
      expect(() => {
        isLength(errorInput)
      }).toThrow("[ERROR]")
    });

    test("입력된 당첨 번호는 1~45 사이의 자연수만 포함되어야 한다.", () => {
      const correctInput = [1, 12, 16, 27, 31, 44]
      const errorRangeInput = [0, 1, 24, 33, 36, 41]
      const errorNumberInput = [1, 1.5, 24, 33, 36, 41]
      const isInRange = jest.fn(input => {
        input.forEach(number => {
          if (number < 1 || number > 45 || Math.floor(number) !== number) {
            throw new Error(MESSAGE.ERROR.NUMBER_RANGE);
          }
        });
        return "올바른 값"
      })

      expect(isInRange(correctInput)).toBe("올바른 값");
      expect(() => {
        isInRange(errorRangeInput)
      }).toThrow("[ERROR]");
      expect(() => {
        isInRange(errorNumberInput)
      }).toThrow("[ERROR]");
    });

    test("입력된 당첨 번호는 중복 되지 않아야 한다.", () => {
      const correctInput = [1, 3, 5, 7, 9, 11];
      const errorInput = [1, 3, 5, 7, 9, 9];
      const isDuplicate = jest.fn(input => {
        const inputSet = new Set(input);
        if (inputSet.size !== input.length) {
          throw new Error(MESSAGE.ERROR.NUMBER_DUPLICATE);
        }
        return "올바른 값"
      });
      
      expect(isDuplicate(correctInput)).toBe("올바른 값");
      expect(() => {
        isDuplicate(errorInput)
      }).toThrow("[ERROR]");
    });

    test("입력된 보너스 번호는 당첨 번호와 중복 되지 않아야 한다.", () => {
      const correctInput = 8;
      const errorInput = 1;
      const winningNumber = [1, 2, 3, 4, 5, 6];
      const isWinningNumber = jest.fn(input => {
        if (winningNumber.includes(input)) {
          throw new Error(MESSAGE.ERROR.BONUS_DUPLICATE);
        }
        return "올바른 값"
      });

      expect(isWinningNumber(correctInput)).toBe("올바른 값");
      expect(() => {
        isWinningNumber(errorInput);
      }).toThrow("[ERROR]");
    });
  });

  test("", () => {

  });

});
