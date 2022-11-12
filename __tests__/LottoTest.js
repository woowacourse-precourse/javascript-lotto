const MESSAGE = require("../src/constants/message");
const Lotto = require("../src/Lotto");
const LottoMachine = require("../src/LottoMachine");

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

  // 아래에 추가 테스트 작성 가능
  test("사용자가 로또 구입 금액이 숫자가 아닌 값을 입력하는 경우 예외 처리한다.", () => {
    expect(() => {
      const lottoMachine = new LottoMachine();
      if (lottoMachine.isNotANumber("abc!")) throw new Error(MESSAGE.ERROR.PAYMENT_MUST_BE_NUMBER);
    }).toThrow("[ERROR]");
  });
});
