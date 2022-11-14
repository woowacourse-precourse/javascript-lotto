const buyingAmountValidator = require("../src/buyingAmountValidator");

describe("입력값 예외처리 테스트", () => {
  test("입력값에 공백이 포함되어 있으면 에러 문구를 출력한다.", () => {
    const inputList = [" ", "1 000", " 1000", "5000 "];
    inputList.forEach((input) => {
      expect(() => buyingAmountValidator(input)).toThrow("[ERROR]");
    });
  });

  test("숫자 이외의 문자가 들어가면 에러 문구를 출력한다.", () => {
    const inputList = ["a", "1000a", "a1000", "500a00"];
    inputList.forEach((input) => {
      expect(() => buyingAmountValidator(input)).toThrow("[ERROR]");
    });
  });

  test("구입 금액이 1000원 단위로 나누어 떨어지지 않으면 에러 문구를 출력한다.", () => {
    const inputList = ["100", "1", "1300", "15384"];
    inputList.forEach((input) => {
      expect(() => buyingAmountValidator(input)).toThrow("[ERROR]");
    });
  });

  test("구입 금액이 0원이면 에러 문구를 출력한다.", () => {
    const input = "0";
    expect(() => {
      buyingAmountValidator(input);
    }).toThrow("[ERROR]");
  });
});
