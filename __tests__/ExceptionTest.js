const ExceptionCheck = require('../src/utils/ExceptionCheck');

const errorCheck = new ExceptionCheck();
const answer_example = [1,2,3,4,5,6];

describe("예외 throw 테스트 (Lotto test와 ApplicationTest 속 예외 제외)", () => {
  test("구매갯수가 1000원 단위가 아닌 경우 예외처리", () => {
    expect(() => {
      const input = 1500;
      errorCheck.purchaseMoneyErrorCheck(input);
    }).toThrow("[ERROR]");
  });

  test("6개의 숫자가 들어오지 않은 경우(구분자를 제대로 사용하지 않은 경우 포함)", () => {
    expect(() => {
      const input = [1,2,3,4,5];
      errorCheck.noSeperatorErrorCheck(input);
    }).toThrow("[ERROR]");
  });

  test("보너스 숫자에 숫자가 들어오지 않은 경우", () => {
    expect(() => {
      const input = 'ten';
      errorCheck.bonusNumCheck(input, answer_example);
    }).toThrow("[ERROR]");
  });

  test("보너스 숫자가 1-45 사이를 만족하지 않은 경우", () => {
    expect(() => {
      const input = 50;
      errorCheck.bonusNumCheck(input, answer_example);
    }).toThrow("[ERROR]");
  });

  test("보너스 숫자가 이미 입력한 6개의 수 중 하나와 중복되게 입력된경우", () => {
    expect(() => {
      const input = 6;
      errorCheck.bonusNumCheck(input, answer_example);
    }).toThrow("[ERROR]");
  });
});
