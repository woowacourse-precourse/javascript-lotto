const Player = require("../src/Player");
const Validation = require("../src/Validation");
const Lotto = require("../src/Lotto");

const {
  ERROR_INPUT_MESSAGE,
  ERROR_LOGIC_MESSAGE,
} = require("../src/constants");

describe("Lotto 클래스 테스트", () => {
  test("1: 로또 번호의 요소가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Validation().type([1, 2, 3, 4, 5, "a"]);
    }).toThrow(ERROR_INPUT_MESSAGE.TYPE);
  });

  test("2: 로또 번호의 요소가 숫자 1~45를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Validation().range([0, -1, 3, 4, 5, 46]);
    }).toThrow(ERROR_INPUT_MESSAGE.RANGE);
  });

  test("3: 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Validation().lengthSix([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_INPUT_MESSAGE.LENGTH_SIX);
  });

  test("4: 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Validation().duplication([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_INPUT_MESSAGE.DUPLICATION);
  });

  test("5: 로또 번호는 다음과 같이 발행되어야 한다: [1,2,3,4,5,6]", () => {
    expect(() => {
      new Validation().formatArray("1, 2, 3, 4, 5, 6");
    }).toThrow(ERROR_INPUT_MESSAGE.FORMAT_ARRAY);
  });

  test("6: 구입 금액에 해당하는 만큼 로또를 발행하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Player().checkTickets(8000, [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
      ]);
    }).toThrow(ERROR_LOGIC_MESSAGE.ISSUE);
  });
});

describe("Player 클래스 테스트", () => {
  test("1: 입력 금액의 타입이 숫자가 아니면 예외 발생", () => {
    expect(() => {
      new Player().buyTickets("a");
    }).toThrow(ERROR_INPUT_MESSAGE.TYPE);
  });

  test("2: 입력 금액이 1,000원 단위로 떨어지지 않으면 예외 발생", () => {
    expect(() => {
      new Player().buyTickets(3500);
    }).toThrow(ERROR_INPUT_MESSAGE.UNIT);
  });

  test("3: 당첨 번호는 다음과 같이 입력되어야 한다: 1,2,3,4,5,6", () => {
    expect(() => {
      new Validation().checkSixString("1.2.3.4.5.6");
    }).toThrow(ERROR_INPUT_MESSAGE.FORMAT_STRING);
  });

  test("4: 입력 당첨 번호의 요소가 숫자가 아닌 경우 예외 발생", () => {
    expect(() => {
      new Validation().checkSixString("a,1,2,3,4,5");
    }).toThrow(ERROR_INPUT_MESSAGE.TYPE);
  });

  test("5: 입력 당첨 번호의 요소의 범위가 1~45가 아닐 경우 예외 발생", () => {
    expect(() => {
      new Validation().checkSixString("0,1,2,3,4,46");
    }).toThrow(ERROR_INPUT_MESSAGE.RANGE);
  });

  test("6: 입력 당첨 번호의 요소가 6자리가 아닐 경우 예외 발생", () => {
    expect(() => {
      new Validation().checkSixString("1,2,3,4,5");
    }).toThrow(ERROR_INPUT_MESSAGE.FORMAT_STRING);
  });

  test("7: 입력 당첨 번호의 요소가 중복될 경우 예외 발생", () => {
    expect(() => {
      new Validation().checkSixString("1,2,3,4,5,5");
    }).toThrow(ERROR_INPUT_MESSAGE.DUPLICATION);
  });
});
