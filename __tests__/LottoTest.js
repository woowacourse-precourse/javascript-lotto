const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test.only("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 당첨번호는 6개여야 합니다.");
  });

  test.only("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 당첨번호는 중복되지 않은 6개 숫자여야합니다");
  });

  test.only("로또 번호에 범위가 벗어난 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR] 당첨번호는 1~45사의 숫자이어야합니다");
  });

  test("금액이 숫자이면서 1000의 배수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      Lotto.checkMoney("1001");
    }).toThrow("[ERROR] 금액은 1000의 배수인 숫자이여야 합니다.");
  });

  test("금액이 숫자이면서 1000의 배수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      Lotto.checkMoney("문자열");
    }).toThrow("[ERROR] 금액은 1000의 배수인 숫자이여야 합니다.");
  });

  test("입력받은 금액/로또가격 만큼의 배열이 반환된다", () => {
    const money = 3000;
    const price = 1000;
    expect(() => Lotto.genLottoNumArr(money).length.toEqual(money / price));
  });
});
