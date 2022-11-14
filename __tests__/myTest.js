const buyingAmountValidator = require("../src/buyingAmountValidator");
const bonusNumberValidator = require("../src/bonusNumberValidator");

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

describe("보너스 번호 예외처리 테스트", () => {
  const winningNumbers = ["1", "2", "3", "4", "5", "6"];
  test("보너스 번호에 문자를 입력하면 에러 문구를 출력한다.", () => {
    const inputList = ["a", "1a", "a1"];
    inputList.forEach((input) => {
      expect(() => bonusNumberValidator(winningNumbers, input)).toThrow(
        "[ERROR]"
      );
    });
  });
  test("보너스 번호가 1~45 사이의 값이 아닐 경우 에러 문구를 출력한다.", () => {
    const inputList = ["0", "-1", "46", "100"];
    inputList.forEach((input) => {
      expect(() => bonusNumberValidator(winningNumbers, input)).toThrow(
        "[ERROR]"
      );
    });
  });
  test("보너스 번호가 당첨 번호에 포함되면 에러 문구를 출력한다.", () => {
    const inputList = ["1", "2", "3", "4", "5", "6"];
    inputList.forEach((input) => {
      expect(() => bonusNumberValidator(winningNumbers, input)).toThrow(
        "[ERROR]"
      );
    });
  });
  test("보너스 번호에 공백을 입력할 시 에러 문구를 출력한다.", () => {
    const inputList = [" ", "3 ", "10 ", " 9"];
    inputList.forEach((input) => {
      expect(() => bonusNumberValidator(winningNumbers, input)).toThrow(
        "[ERROR]"
      );
    });
  });
});
