const ValidCheckUtils = require("../src/utils/ValidCheckUtils");

describe("입력값 유효성 테스트", () => {
  test("구입 금액에 숫자가 아닌 값이 입력되면 에러를 발생시킨다.", () => {
    expect(() => {
      ValidCheckUtils.checkPay("100j");
    }).toThrow("[ERROR]");
  });

  test("구입 금액에 1000원 단위가 아닌 값이 입력되면 에러를 발생시킨다.", () => {
    expect(() => {
      ValidCheckUtils.checkPay("100");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복이 포함되면 에러를 발생시킨다.", () => {
    expect(() => {
      ValidCheckUtils.checkWinningNumber("1,2,3,4,5,5");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 1부터 45 사이의 번호가 아닌 값이 포함되면 에러를 발생시킨다.", () => {
    const invalidInput = [
      "1,2,3,4,5,46",
      "1,2,3,4,5,0",
      "1,2,325,4,5,6",
      "1,2,-5,4,5,6",
    ];

    invalidInput.forEach((input) => {
      expect(() => {
        ValidCheckUtils.checkWinningNumber(input);
      }).toThrow("[ERROR]");
    });
  });

  test("당첨 번호가 6개가 아니면 에러를 발생시킨다.", () => {
    const invalidInput = ["1,2,3", "1,2,3,4,5,6,7"];
    invalidInput.forEach((input) => {
      expect(() => {
        ValidCheckUtils.checkWinningNumber(input);
      }).toThrow("[ERROR]");
    });
  });

  test("당첨 번호에 숫자가 아닌 문자가 포함되면 에러를 발생시킨다.", () => {
    const invalidInput = ["1,2,3,j", "k", " "];
    invalidInput.forEach((input) => {
      expect(() => {
        ValidCheckUtils.checkWinningNumber(input);
      });
    });
  });
});
