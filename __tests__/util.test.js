const App = require("../src/App");
const { ERROR } = require("../src/utils/constants");

describe("입력한 구매 금액이 유효한 값인지 검사한다.", () => {
  test("금액에 숫자 이외의 값이 있다면 예외가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateInput("1oo0");
    }).toThrow(ERROR.ONLY_NUMBER);
    expect(() => {
      app.validateInput("1dollar");
    }).toThrow(ERROR.ONLY_NUMBER);
    expect(() => {
      app.validateInput("삼만사천원");
    }).toThrow(ERROR.ONLY_NUMBER);
    expect(() => {
      app.validateInput("5천원");
    }).toThrow(ERROR.ONLY_NUMBER);
    expect(() => {
      app.validateInput("만원");
    }).toThrow(ERROR.ONLY_NUMBER);
    expect(() => {
      app.validateInput("4000_");
    }).toThrow(ERROR.ONLY_NUMBER);
    expect(() => {
      app.validateInput("1000원");
    }).toThrow(ERROR.ONLY_NUMBER);
    expect(() => {
      app.validateInput("1000won");
    }).toThrow(ERROR.ONLY_NUMBER);
    expect(() => {
      app.validateInput("anything");
    }).toThrow(ERROR.ONLY_NUMBER);
  });

  test("금액이 1000원으로 나눠떨어지지 않으면 예외가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateInput("1500");
    }).toThrow(ERROR.INDIVISIBLE);
    expect(() => {
      app.validateInput("2100");
    }).toThrow(ERROR.INDIVISIBLE);
    expect(() => {
      app.validateInput("800");
    }).toThrow(ERROR.INDIVISIBLE);
    expect(() => {
      app.validateInput("100");
    }).toThrow(ERROR.INDIVISIBLE);
    expect(() => {
      app.validateInput("10");
    }).toThrow(ERROR.INDIVISIBLE);
    expect(() => {
      app.validateInput("50500");
    }).toThrow(ERROR.INDIVISIBLE);
    expect(() => {
      app.validateInput("3333");
    }).toThrow(ERROR.INDIVISIBLE);
    expect(() => {
      app.validateInput("37400");
    }).toThrow(ERROR.INDIVISIBLE);
    expect(() => {
      app.validateInput("10000001");
    }).toThrow(ERROR.INDIVISIBLE);
  });
});

describe("구매 금액으로 로또를 구매할 수 있는 수량을 검사한다.", () => {
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

  test.todo("NaN 처리");
});

describe("입력받은 당첨 번호가 유효한 입력인지 검사한다.", () => {
  test("문자열에 쉼표와 숫자 이외의 문자가 있다면 true를 반환한다.", () => {
    expect(App.hasChar("1,2,3,4w,5")).toEqual(true);
    expect(App.hasChar("1,2,ww,wer,3,45")).toEqual(true);
    expect(App.hasChar("a,b,c,d,e,f")).toEqual(true);
    expect(App.hasChar("one,2,3,4,5,six")).toEqual(true);
    expect(App.hasChar("one,two,three,four,five,six")).toEqual(true);
    expect(App.hasChar("1,2,#,4,5,6")).toEqual(true);
    expect(App.hasChar("1,2,',4,5,6")).toEqual(true);
    expect(App.hasChar('1,2,3,",5,6')).toEqual(true);
  });

  test("문자열에 쉼표가 연속적으로 존재한다면 예외가 발생한다.", () => {
    expect(() => {
      App.makeSplit("1,,2,3,4,5");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit("1,2,,3,4,5");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit("1,2,3,,4,5");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit("1,2,3,4,,5");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit("1,2,3,4,5,");
    }).toThrow(ERROR.MISUSE_COMMA);
  });

  test("문자열이 쉼표로 시작하거나 쉼표로 끝나면 예외가 발생한다.", () => {
    expect(() => {
      App.makeSplit(",1,2,3,4,5,6");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit("1,2,3,4,5,6,");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit(",1,2,3,4,5,6,");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit(",,1,2,3,4,5,6");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit("1,2,3,4,5,6,,");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit(",,1,2,3,4,5,6,,");
    }).toThrow(ERROR.MISUSE_COMMA);
  });

  test("문자열에 두 쉼표가 공백을 사이에 두고 있다면 예외가 발생한다.", () => {
    expect(() => {
      App.makeSplit("1, ,2,3,4,5");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit("1,2, ,3,4,5");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit("1,2,3, ,4,5");
    }).toThrow(ERROR.MISUSE_COMMA);
    expect(() => {
      App.makeSplit("1,2,3,4, ,5");
    }).toThrow(ERROR.MISUSE_COMMA);
  });

  test("숫자와 숫자 사이에 공백이 있다면 예외가 발생한다.", () => {
    expect(() => {
      App.makeNumberArray(["1", "2 3", "3", "4", "5"]);
    }).toThrow(ERROR.IS_NAN);
    expect(() => {
      App.makeNumberArray(["1", "2  3", "3", "4", "5"]);
    }).toThrow(ERROR.IS_NAN);
    expect(() => {
      App.makeNumberArray(["1", "23", "3   5", "4", "5"]);
    }).toThrow(ERROR.IS_NAN);
    expect(() => {
      App.makeNumberArray(["1", "23", "3", "4 4", "5"]);
    }).toThrow(ERROR.IS_NAN);
    expect(() => {
      App.makeNumberArray(["1", "3", "22", "4 4", "5"]);
    }).toThrow(ERROR.IS_NAN);
    expect(() => {
      App.makeNumberArray(["1", "3", "2 2", "4 4", "5"]);
    }).toThrow(ERROR.IS_NAN);
    expect(() => {
      App.makeNumberArray(["1 0", "3 0", "2 2", "4 4", "5 8"]);
    }).toThrow(ERROR.IS_NAN);
  });
});
