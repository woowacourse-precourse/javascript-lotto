const Lotto = require("../src/Lotto");
const LottoMoney = require("../src/LottoMoney");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복된 숫자가 있습니다.");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 1보다 작거나 45보다 큰 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 48]);
    }).toThrow("[ERROR] 로또 번호는 1과 45사이의 수여야 합니다.");
  });

  test("구매금액은 1000원 단위가 아니면 예외가 발생한다.", () => {
    const money = '1000j';
    expect(() => {
      const lottoMoney = new LottoMoney();
      lottoMoney.validate(money);
    }).toThrow("[ERROR] 구매금액은 1000원 단위여야 합니다.");
  });
});
