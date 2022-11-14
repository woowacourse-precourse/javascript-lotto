const Console = require("./Console");
const Constant = require("../Constant");
const makeLotto = require("./MakeLotto");
const Validate = require("./Validate");
class UI {
  #countLotto;

  getLottoPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (userInputMoney) => {
      let numberUserInputMoney = Number(userInputMoney) ?? NaN;
      if (Validate.validateMoney(numberUserInputMoney)) {
        this.#countLotto = numberUserInputMoney / 1000;
        this.showLottosCount();
        this.showLottoNumber();
        this.inputUserLottoNumber();
      }
    });
  }

  get countLotto() {
    return this.#countLotto;
  }

  static inputBonusNumber() {
    Console.readLine(Constant.INPUT_BONUS_NUMBER, (strBonusNumber) => {
      const numberBonusNumber = +strBonusNumber ?? NaN;
      if (Validate.validateBonusNumber(numberBonusNumber)) {
      }
    });
  }

  inputUserLottoNumber() {
    Console.readLine(
      "\n당첨 번호를 입력해 주세요.\n",
      (userInputLottoNumbers) => {
        if (Validate.validateUserInputLottoNumbers(UserInputLottoNumbers)) {
          let arrUserInputLottoNumbers = userInputLottoNumbers.split(",");
        }
      }
    );
  }

  showLottosCount() {
    Console.print(`\n${this.#countLotto}개를 구매했습니다.`);
  }

  showLottoNumber() {
    const lottoMachine = new makeLotto(this.#countLotto);
    lottoMachine.makeLotto();
    lottoMachine.lottoNumbers.forEach((numbers) => {
      Console.print(numbers);
    });
  }
}

module.exports = UI;
