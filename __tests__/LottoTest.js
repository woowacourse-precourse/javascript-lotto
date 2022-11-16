const Bonus = require("../src/Bonus");
const Lotto = require("../src/Lotto");
const { ERROR_MESSAGE } = require("../src/constant/message");
const validatePayment = require("../src/modules/validatePayment");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.NOT_LENGTH_SIX);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.OVERLAP);
  });
  test("로또 번호를 콤마로 구분짓지 않은 경우 + 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      const input = "1,2,3.4-5,6".split(",");
      new Lotto(input);
    }).toThrow(ERROR_MESSAGE.SPLIT_COMMA);
  });
  test("로또 번호가 1 미만 45 초과면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 55]);
    }).toThrow(ERROR_MESSAGE.NOT_RANGE);
  });
});

describe("보너스 클래스 테스트", () => {
  test("보너스 번호가 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("5W", ["1", "2", "3", "4", "5", "6"]);
    }).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });
  test("당첨 번호와 중복되는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("1", ["1", "2", "3", "4", "5", "6"]);
    }).toThrow(ERROR_MESSAGE.OVERLAP);
  });
  test("보너스 번호가 1 미만 45 초과면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("58", ["1", "2", "3", "4", "5", "6"]);
    }).toThrow(ERROR_MESSAGE.NOT_RANGE);
  });
});
describe("구매금액 예외 테스트", () => {
  test("구매금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validatePayment("money");
    }).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });

  test("구매금액이 1,000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      validatePayment("900");
    }).toThrow(ERROR_MESSAGE.LESS_MONEY);
  });

  test("구매금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validatePayment("1234");
    }).toThrow(ERROR_MESSAGE.NOT_DIVIDED);
  });
});
