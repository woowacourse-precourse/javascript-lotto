const LottoController = require("../src/LottoController");
const Validation = require("../src/Validation");
const validation = new Validation();

describe("로또 보너스 번호 입력 유효성 테스트", () => {
  it("보너스 번호가 1~45 이외의 숫자로 입력될 경우 예외처리", () => {
    const lottoController = new LottoController();
    const inputNumber = 80;
    const result = () => lottoController.setBonusNumber(inputNumber);

    expect(result).toThrow("[ERROR] 보너스 번호의 범위는 1~45여야 합니다.");
  });

  it("보너스 번호가 1개가 아닐 경우 예외처리", () => {
    const lottoController = new LottoController();
    const inputNumber = "1,2";
    const result = () => lottoController.setBonusNumber(inputNumber);

    expect(result).toThrow("[ERROR] 보너스 번호는 숫자이어야 합니다.");
  });

  it("보너스 번호에 숫자가 아닌 값 입력할 경우 예외처리", () => {
    const lottoController = new LottoController();
    const inputNumber = "a";
    const result = () => lottoController.setBonusNumber(inputNumber);

    expect(result).toThrow("[ERROR] 보너스 번호는 숫자이어야 합니다.");
  });

  it("보너스 번호가 당첨번호와 중복될 경우 예외처리", () => {
    const number = 6;
    const winNumbers = [1, 2, 3, 4, 5, 6];
    const result = () => validation.checkBonusNumber(number, winNumbers);

    expect(result).toThrow(
      "[ERROR] 보너스 번호가 당첨 번호에 포함되어 있습니다."
    );
  });
});
