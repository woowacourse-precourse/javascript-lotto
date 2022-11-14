const Lottos = require("../src/model/Lottos");
const { ERROR, UNIT } = require("../src/utils/constants");

describe("Lottos 클래스 테스트", () => {
  test("구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lottos(15500);
    }).toThrow(ERROR.UNIT);
  });

  test("숫자를 입력하지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lottos("만원");
    }).toThrow(ERROR.ISNAN);
  });

  test("사용자가 구입한 장 수 만큼 로또가 생성되는 경우", () => {
    const purchaseAmount = 5000;
    const lottos = new Lottos(purchaseAmount);
    expect(lottos.lottos.length).toEqual(purchaseAmount / UNIT.DIVIDE);
  });
});
