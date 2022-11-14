const Money = require("../src/Money");
const Lotto = require("../src/Lotto");

describe("금액 클래스 테스트", () => {
  test("금액이 1000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Money().validateMoney(900);
    }).toThrow("[ERROR] 금액이 부족합니다.");
  });

  test("금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Money().validateMoney(1100);
    }).toThrow("[ERROR] 1000원 단위의 금액을 입력해 주세요.");
  });

  test("금액을 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Money().validateMoney();
    }).toThrow("[ERROR] 금액을 입력해주세요.");
  });

  test("알맞은 개수의 로또를 생성한다.", () => {
    const result = new Money().createLottos(3);
    result.forEach((lotto) => {
      new Lotto(lotto);
    });
    expect(result.length).toEqual(3);
  });
});
