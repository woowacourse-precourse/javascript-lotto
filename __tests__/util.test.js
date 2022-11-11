const App = require("../src/App");
const { ERROR } = require("../src/utils/constants");

describe("입력한 구매 금액이 유효한 값인지 검사한다.", () => {
  test("금액에 숫자 이외의 값이 있다면 예외가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.validateInput("1oo0");
      app.validateInput("1oo0");
      app.validateInput("1dollar");
      app.validateInput("삼만사천원");
      app.validateInput("5천원");
      app.validateInput("만원");
      app.validateInput("4000_");
      app.validateInput("1000원");
      app.validateInput("1000won");
      app.validateInput("anything");
    }).toThrow(ERROR.INVALID_INPUT);
  });

  test("금액이 1000원으로 나눠떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.validateInput("1500");
      app.validateInput("2100");
      app.validateInput("800");
      app.validateInput("100");
      app.validateInput("10");
      app.validateInput("50500");
      app.validateInput("3333");
      app.validateInput("37400");
      app.validateInput("10000001");
    }).toThrow(ERROR.INDIVISIBLE);
  });
});

describe.only("구매 금액으로 로또를 구매할 수 있는 수량을 검사한다.", () => {
  test("구매 금액이 숫자로 들어올 때 1000으로 나눈 값을 반환한다.", () => {
    const app = new App();
    expect(app.countAvailableQuantity(1000)).toEqual(1);
    expect(app.countAvailableQuantity(3000)).toEqual(3);
    expect(app.countAvailableQuantity(8000)).toEqual(8);
    expect(app.countAvailableQuantity(10000)).toEqual(10);
    expect(app.countAvailableQuantity(35000)).toEqual(35);
    expect(app.countAvailableQuantity(248000)).toEqual(248);
    expect(app.countAvailableQuantity(2147000000)).toEqual(2147000);
  });

  test("구매 금액이 문자열로 들어올 때 1000으로 나눈 값을 반환한다.", () => {
    const app = new App();
    expect(app.countAvailableQuantity("1000")).toEqual(1);
    expect(app.countAvailableQuantity("3000")).toEqual(3);
    expect(app.countAvailableQuantity("8000")).toEqual(8);
    expect(app.countAvailableQuantity("10000")).toEqual(10);
    expect(app.countAvailableQuantity("35000")).toEqual(35);
    expect(app.countAvailableQuantity("248000")).toEqual(248);
    expect(app.countAvailableQuantity("2147000000")).toEqual(2147000);
  });
});
