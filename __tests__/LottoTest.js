/*
const Lotto = require("../src/Lotto");
const {
  validateInputMoney,
  validateInputBonusNum,
} = require("../src/validator");

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

  test("로또 번호에 0이하의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 46이상의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow();
  });

  test("보유 금액이 숫자가 아니면 예외가 발생한다.", () => {
    const money = ["a", "B", "하나"];

    money.forEach((result) => {
      expect(() => {
        validateInputMoney(result);
      }).toThrow();
    });
  });

  test("보유 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    const money = [999, 1001, 100, 500, 0];

    money.forEach((result) => {
      expect(() => {
        validateInputMoney(result);
      }).toThrow();
    });
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    const bonusNumber = ["a", "ABC", "에이"];

    bonusNumber.forEach((result) => {
      expect(() => {
        validateInputBonusNum(result);
      }).toThrow();
    });
  });

  test("보너스 번호가 0이하의 숫자면 예외가 발생한다.", () => {
    const bonusNumber = 0;

    expect(() => {
      validateInputBonusNum(bonusNumber);
    }).toThrow();
  });

  test("보너스 번호가 46이상의 숫자면 예외가 발생한다", () => {
    const bonusNumber = 46;

    expect(() => {
      validateInputBonusNum(bonusNumber);
    }).toThrow();
  });

  test("보너스 번호와 당첨 번호가 중복되면 예외가 발생한다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 1;

    expect(() => {
      validateInputBonusNum(winningNumbers, bonusNumber);
    }).toThrow();
  });
});
*/
