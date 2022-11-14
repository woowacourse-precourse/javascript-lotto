const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호의 개수는 6개입니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복될 수 없습니다.");
  });

  test("금액이 1000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).validateMoney(900);
    }).toThrow("[ERROR] 금액이 부족합니다.");
  });

  test("금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).validateMoney(1100);
    }).toThrow("[ERROR] 1000원 단위의 금액을 입력해 주세요.");
  });

  test("금액을 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]).validateMoney();
    }).toThrow("[ERROR] 금액을 입력해주세요.");
  });

  test("알맞은 개수의 로또를 생성한다.", () => {
    const result = new Lotto([1, 2, 3, 4, 5, 6]).createLottos(3);
    result.forEach((lotto) => {
      new Lotto(lotto);
    });

    expect(result.length).toEqual(3);
  });
});
