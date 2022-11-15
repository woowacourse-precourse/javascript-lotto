const Lotto = require("../src/Lotto");
const ValidatePay = require('../src/ValidatePay');
const ValidateWinningNumber = require('../src/ValidateWinningNumber');
const ValidateBonusNumber = require('../src/ValidateBonusNumber');

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
  test("로또 번호에 1 ~ 45 범위 이외의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 47]);
    }).toThrow("[ERROR]");
  });
});

describe("사용자 입력 금액 검사 클래스 테스트", () => {
  test("구입 금액에 숫자가 아닌 것이 있으면 예외가 발생한다", () => {
    expect(() => {
      new ValidatePay("1000원");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new ValidatePay("50010");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new ValidatePay("999");
    }).toThrow("[ERROR]");
  });
});

describe("사용자 입력 당첨 번호 검사 클래스 테스트", () => {
  test("당첨번호를 ,(콤마)와 숫자가 아닌 것으로 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new ValidateWinningNumber("1,2,3,4,5.6");
    }).toThrow("[ERROR]");
  });
});

describe("사용자 입력 보너스 번호 검사 클래스 테스트", () => {
  test("보너스 번호가 1 ~ 45 이외의 숫자라면 예외가 발생한다.", () => {
    expect(() => {
      new ValidateBonusNumber("47", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 자연수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new ValidateBonusNumber("1.5", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호에 있는 숫자라면 예외가 발생한다.", () => {
    expect(() => {
      new ValidateBonusNumber("2", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
