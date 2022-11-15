const LottoStore = require("../src/LottoStore");

describe("로또 스토어 클래스 테스트", () => {

  // validate
  test("금액에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoStore("1000a");
    }).toThrow("[ERROR]");
  });

  test("금액에 특수문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoStore("1000@");
    }).toThrow("[ERROR]");
  });

  test("금액이 1,000단위가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new LottoStore("1234");
    }).toThrow("[ERROR]");
  });

  // getCount
  test("로또 발행 개수를 반환한다.", () => {
    const autoLotto = new LottoStore("8000");
    const result = autoLotto.getCount()

    expect(result).toEqual(8);
  });

  // setAutoLotto & getAutoLotto
  test("자동 로또를 발행한다.", () => {
    const autoLotto = new LottoStore("8000");
    const result = autoLotto.setAutoLotto();

    expect(result).toEqual(autoLotto.getAutoLotto());
  });

});
