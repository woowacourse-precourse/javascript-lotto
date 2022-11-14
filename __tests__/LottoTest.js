const Lotto = require("../src/Lotto");
const Player = require("../src/Player");
const Validation = require("../src/Validation");

const { ERROR_INPUT_MESSAGE } = require("../src/constants");

describe("Lotto 클래스 유효성 테스트", () => {
  test("로또 번호의 요소가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Validation().type([1, 2, 3, 4, 5, "a"]);
    }).toThrow(ERROR_INPUT_MESSAGE.TYPE);
  });

  test("로또 번호의 요소가 숫자 1~45를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Validation().range([0, -1, 3, 4, 5, 46]);
    }).toThrow(ERROR_INPUT_MESSAGE.RANGE);
  });

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Validation().lengthSix([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_INPUT_MESSAGE.LENGTH_SIX);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Validation().duplication([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_INPUT_MESSAGE.DUPLICATION);
  });

  test("로또 번호는 쉼표로 구분되며, [] 안에 있어야 한다.", () => {
    expect(() => {
      new Validation().formatArray("1, 2, 3, 4, 5, 6");
    }).toThrow(ERROR_INPUT_MESSAGE.FORMAT_ARRAY);
  });
});

describe("Player 클래스 테스트", () => {
  test("입력 금액의 타입이 숫자가 아니면 예외 발생", () => {
    expect(() => {
      new Player().buyTickets("a");
    }).toThrow(ERROR_INPUT_MESSAGE.TYPE);
  });

  test("입력 금액이 1,000원 단위로 떨어지지 않으면 예외 발생", () => {
    expect(() => {
      new Player().buyTickets(3500);
    }).toThrow(ERROR_INPUT_MESSAGE.UNIT);
  });
});
