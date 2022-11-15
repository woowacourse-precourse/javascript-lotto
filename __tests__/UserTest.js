const User = require("../src/User");

describe("사용자 클래스 테스트", () => {
  test("사용자로부터 구입금액을 입력 받는다.", () => {
    const user = new User(8000);
    expect(
      user.getMoney()
    ).toBe(8000);
  });

  test("구입금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new User("팔천원");
    }).toThrow("[ERROR]");
  });

  test("구입금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new User(7500);
    }).toThrow("[ERROR]");
  });

  test("구입금액만큼 구입할 로또의 개수를 정한다.", () => {
    const user = new User(6000);
    expect(
      user.getLottoAmount()
    ).toBe(6);
  });

  test("1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 선택한다.", () => {
    const user = new User(6000);
    const lotto = user.createLotto()
    expect(
      new Set(lotto).size
    ).toBe(6);
  });

  test("로또 번호를 출력할 때 오름차순 정렬하여 출력한다.", () => {
    const user = new User(6000);
    const lotto = [1,6,5,3,4,2];
    expect(
      user.sortLottoAscending(lotto) 
    ).toEqual([1,2,3,4,5,6]);
  });

});