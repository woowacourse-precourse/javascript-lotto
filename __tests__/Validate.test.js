const Constant = require("../src/Constant");
const Validate = require("../src/utils/Validate");
describe("유효성 검사 테스트", () => {
  describe("Validate.validateMoney", () => {
    test("금액은 숫자만 입력해야 한다.", () => {
      //given
      const userInput = "100-";
      //when
      //then
      expect(() => Validate.validateMoney(userInput)).toThrow(
        Constant.INPUT_ONLY_NUMBER
      );
    });
    test("1000원 이상 입력해야 한다.", () => {
      //given
      const userInput = "100";
      //when
      //then
      expect(() => Validate.validateMoney(userInput)).toThrow(
        Constant.INPUT_OVER_1000
      );
    });
    test("1000원 단위로 입력해야 한다.", () => {
      //given
      const userInput = "15500";
      //when
      //then
      expect(() => Validate.validateMoney(userInput)).toThrow(
        Constant.INPUT_SHOULD_DIVIDED_1000
      );
    });
  });

  describe("Validate.validateUserInputLottoNumbers", () => {
    test("당첨번호 사이에는 ,를 입력해야한다.", () => {
      //given
      const userInputLottoNumbers = "123456";
      //when
      //then
      expect(() =>
        Validate.validateUserInputLottoNumbers(userInputLottoNumbers)
      ).toThrow("당첨번호 사이에 ','를 입력하세요.");
    });

    test("당첨번호에는 숫자만 입력해야 한다.", () => {
      //given
      const userInputLottoNumbers = "1,2,3,4,5,-";
      //when
      //then
      expect(() =>
        Validate.validateUserInputLottoNumbers(userInputLottoNumbers)
      ).toThrow("당첨번호는 숫자만 입력하세요.");
    });
  });

  describe("Validate.validateBonusNumber", () => {
    test("보너스 넘버는 숫자만 입력해야한다.", () => {
      //given
      const bonusNumber = "d";
      //when
      //then
      expect(() => Validate.validateBonusNumber(bonusNumber)).toThrow(
        Constant.INPUT_ONLY_NUMBER
      );
    });
    test("보너스 넘버는 1~45까지만 입력해야 한다.", () => {
      //given
      const bonusNumber = "46";
      //when
      //then
      expect(() => Validate.validateBonusNumber(bonusNumber)).toThrow(
        Constant.INPUT_ONLY_1_TO_45
      );
    });
  });
});
