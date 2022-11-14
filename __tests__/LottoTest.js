const Lotto = require("../src/Lotto");

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
  test("(금액 /1000) 개 만큼의 복권을 발행한다", () => {
    const lotto = new Lotto();
    lotto.money = 3000;
    expect(lotto.calcLottoCount(lotto.money)).toEqual(3);
  });

  test("복권을 1~45까지의 중복되지 않는 숫자 6개를 발행한다", () => {
    const lotto = new Lotto();
    expect(lotto.getRandomNumbers()).toHaveLength(6);
  });
});
