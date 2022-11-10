const Lotto = require("../src/Lotto");
const Buyer = require("../src/Buyer")

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

  test("1000원 단위로 떨어지지 않으면 로또를 구매할 수 없다", () => {
    const payment = 1400;
    expect(() => {
      new new Buyer(payment)();
    }).toThrow();
  });

  test("금액은 숫자만 입력이 가능하다.", () => {
    const payment = "testNumber";
    expect(() => {
      new new Buyer(payment)();
    }).toThrow();
  });


});
