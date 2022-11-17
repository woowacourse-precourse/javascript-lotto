const Lotto = require("../src/Lotto");
const Judge = require("../src/Judge");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 주어진 범위 (1-45) 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 45, 46, 47, 48]);
    }).toThrow("[ERROR]");
  });
});

describe("유효성을 검증하는 심판 클래스 테스트", () => {
  test("구매자가 입력한 금액이 1000의 배수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const judge = new Judge();
      judge.isBuyerInputValid("1500");
    }).toThrow("[ERROR]");
  });

  test("구매자가 입력한 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const judge = new Judge();
      judge.isBuyerInputValid("1000!");
    }).toThrow("[ERROR]");
  });

  test("추첨인이 입력한 로또 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const judge = new Judge();
      judge.isLottoInputNaN("1, 2, 3, 4, 5, #");
    }).toThrow("[ERROR]");
  });

  test("추첨인이 입력한 로또 번호가 주어진 범위(1-45) 안의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const judge = new Judge();
      judge.isLottoInputInRange("1, 46, 47, 48, 49, 50");
    }).toThrow("[ERROR]");
  });

  test("추첨인이 입력한 로또 번호가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const judge = new Judge();
      judge.isLottoInputLengthValid("1, 2, 3, 4, 5, 6, 7");
    }).toThrow("[ERROR]");
  });

  test("추첨인이 입력한 로또 번호가 중복이 된다면 예외가 발생한다.", () => {
    expect(() => {
      const judge = new Judge();
      judge.isLottoInputDuplicate("1, 2, 3, 4, 5, 5");
    }).toThrow("[ERROR]");
  });

  test("추첨인이 입력한 보너스 번호가 기존 로또 번호와 중복이 된다면 예외가 발생한다.", () => {
    expect(() => {
      const judge = new Judge();
      judge.lottoInputValid("1, 2, 3, 4, 5, 6");
      judge.isBonusNumDuplicate("1");
    }).toThrow("[ERROR]");
  });
});
