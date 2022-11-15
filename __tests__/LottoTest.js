const Lotto = require("../src/Lotto");
const AmountError = require("../src/errors/AmountError");
const BonusNumberError = require("../src/errors/BonusNumberError");

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

  test("로또 번호에 1-45 외 입력시 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow("[ERROR]");
  }); // 아래에 추가 테스트 작성 가능
});

describe("에러 발생 테스트", () => {
  test("1000원 단위로 구입하지 않았을때 에러 발생", () => {
    expect(() => {
      new AmountError(1500);
    }).toThrow("[ERROR]");
  });

  test("당첨 숫자와 보너스 숫자랑 중복되면 에러 발생", () => {
    expect(() => {
      new BonusNumberError([1, 2, 3, 4, 5, 6], 4);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});
