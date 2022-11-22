//당첨 번호와 보너스 번호에 대한 기능 테스트
const Lotto = require("../src/Lotto");
const bonusValidate = require("../src/bonusValidate");

describe("로또 번호 및 당첨 번호 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 입력값이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', 'k']);
    }).toThrow("[ERROR]");
  });

  test("로또 번호로 아무것도 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto("");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호로 아무것도 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      bonusValidate("", [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호 입력값이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      bonusValidate("k", [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호들 중 보너스 번호가 중복되면 예외가 발생한다.", () => {
    expect(() => {
      bonusValidate(6, [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

});
