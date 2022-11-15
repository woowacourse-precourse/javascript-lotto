const LottoPurchase = require("../src/LottoPurchase");

describe("LottoPurchase 클래스 테스트", () => {

  test("로또 구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoPurchase(1100);
    }).toThrow("[ERROR]");
  });

  test("구입한 금액 만큼 랜덤한 번호를 발행한다.", () => {
    expect(new LottoPurchase(2000).lottoPublish()
    ).toHaveLength(2);
  })

  test("6자리 번호를 오름차순으로 정렬한다.", () => {
    expect(new LottoPurchase(1000).lottoNumbersSort([[6, 5, 4, 3, 2, 1]])
    ).toEqual([[1, 2, 3, 4, 5, 6]]);
  })
});