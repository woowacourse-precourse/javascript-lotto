const CheckError = require("../src/CheckError.js");

describe("CheckError 클래스 테스트", () => {
  test("구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외 처리.", () => {
    expect(() => {
      CheckError.checkPurchaseAmount(1100);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아닌 경우 예외 처리 - 문자", () => {
    expect(() => {
      CheckError.checkPurchaseAmount("aa");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아닌 경우 예외 처리 - 공백", () => {
    expect(() => {
      CheckError.checkPurchaseAmount("");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 이하일 경우 예외 처리 - 0", () => {
    expect(() => {
      CheckError.checkPurchaseAmount(0);
    }).toThrow("[ERROR]");
  });

  test("로또 배열이 오름차순으로 정렬되지 않았을 경우 예외 처리", () => {
    expect(() => {
      CheckError.checkLottoSort([[9, 8, 7, 6, 5, 4]]);
    }).toThrow("[ERROR]");
  });

  test("isRangeInLottoNumber함수 Test", () => {
    const number = 46;
    const test = CheckError.isRangeInLottoNumber(number);
    expect(test).toBeFalsy();
  });

  test("isUniqueNumber함수 Test", () => {
    const bonusNumber = 1;
    const winningNumberArray = [1, 2, 3, 4, 5, 6];
    const test = CheckError.isUniqueNumber(bonusNumber, winningNumberArray);
    expect(test).toBeFalsy();
  });

  test("isNumber함수 Test", () => {
    const string = "aa";
    const test = CheckError.isNumber(string);
    expect(test).toBeFalsy();
  });

  test("보너스 번호 입력 예외 케이스", () => {
    const bonusNumber = 1;
    const winningNumberArray = [1, 2, 3, 4, 5, 6];
    expect(() => {
      CheckError.checkBonusNumber(bonusNumber, winningNumberArray);
    }).toThrow("[ERROR]");
  });
});
