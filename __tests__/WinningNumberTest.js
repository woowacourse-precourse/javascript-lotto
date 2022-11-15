const LottoController = require("../src/LottoController");
const { ERROR_LOTTO } = require("../src/constants/messages.js");

describe("로또 당첨 번호 입력 유효성 테스트", () => {
  it("당첨 번호가 1~45 이외의 숫자로 입력될 경우 예외처리", () => {
    const lottoController = new LottoController();
    const inputNumber = "1,2,3,4,5,50";
    const result = () => lottoController.setWinNumbers(inputNumber);

    expect(result).toThrow(ERROR_LOTTO.RANGE);
  });

  it("당첨 번호가 6개 숫자가 아닌 경우 예외처리", () => {
    const lottoController = new LottoController();
    const inputNumber = "1,2,3,4,5,6,7,8";
    const result = () => lottoController.setWinNumbers(inputNumber);

    expect(result).toThrow(ERROR_LOTTO.LENGTH);
  });

  it("당첨 번호가 중복되는 숫자일 경우 예외처리", () => {
    const lottoController = new LottoController();
    const inputNumber = "20,20,21,22,23,24";
    const result = () => lottoController.setWinNumbers(inputNumber);

    expect(result).toThrow(ERROR_LOTTO.DUPLICATED);
  });

  it("당첨 번호가 숫자가 아닌 경우 예외처리", () => {
    const lottoController = new LottoController();
    const inputNumber = "a,b,c,d,e,f";
    const result = () => lottoController.setWinNumbers(inputNumber);

    expect(result).toThrow(ERROR_LOTTO.TYPE);
  });

  it("당첨 번호에 공백이 입력된 경우 예외처리", () => {
    const lottoController = new LottoController();
    const inputNumber = "";
    const result = () => lottoController.setWinNumbers(inputNumber);

    expect(result).toThrow(ERROR_LOTTO.LENGTH);
  });
});
