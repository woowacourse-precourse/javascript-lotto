const LottoAnswer = require("../src/LottoAnswer");

describe("LottoAnswer 클래스 테스트", () => {
  test("6자리 당첨 숫자 예외가 발생하지 않으면 저장된다.", () => {
    const lottoAnswer = new LottoAnswer([1, 2, 3, 4, 5, 6]);
    expect(lottoAnswer.numbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(() => {
      new LottoAnswer([1, 2, 3, 4]);
    }).toThrow("[ERROR] 로또 번호는 6개를 쉼표(,)로 구분하여 정확하게 입력해 주세요.");
  });
});
