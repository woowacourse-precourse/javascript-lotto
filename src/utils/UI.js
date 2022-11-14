const Console = require("./Console");
const Constant = require("../Constant");
const makeLotto = require("./MakeLotto");
class UI {
  #countLotto;

  getLottoPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (userInputMoney) => {
      let numberUserInputMoney = Number(userInputMoney) ?? NaN;
      if (UI.#validateMoney(numberUserInputMoney)) {
        this.#countLotto = numberUserInputMoney / 1000;
        this.showLottosCount();
        this.showLottoNumber();
      }
    });
  }

  get countLotto() {
    return this.#countLotto;
  }

  static #validateMoney(lottoPurchaseAmount) {
    if (isNaN(lottoPurchaseAmount)) {
      throw new Error(Constant.INPUT_ONLY_NUMBER);
    }
    if (lottoPurchaseAmount < Constant.MINIMUM_AMOUNT) {
      throw new Error(Constant.INPUT_OVER_1000);
    }
    if (lottoPurchaseAmount % Constant.MINIMUM_AMOUNT !== 0) {
      throw new Error(Constant.LOTTO_NUMBERS_SHOULD_BE_UNIQUE);
    }
    return true;
  }

  static inputBonusNumber() {
    Console.readLine(Constant.INPUT_BONUS_NUMBER, (strBonusNumber) => {
      const numberBonusNumber = +strBonusNumber;
      if (UI.#validateBonusNumber(numberBonusNumber)) {
      }
    });
  }

  static #validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(Constant.INPUT_ONLY_NUMBER);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(Constant.INPUT_ONLY_1_TO_45);
    }
    if (bonusNumber.length !== 1) {
      throw new Error(Constant.INPUT_ONLY_ONE_BONUS_NUMBER);
    }
  }

  inputLottoNumber() {}
  showLottosCount() {
    Console.print(`\n${this.#countLotto}개를 구매했습니다.`);
  }

  showLottoNumber() {
    const lottoMachine = new makeLotto(this.#countLotto);
    lottoMachine.makeLotto();
    lottoMachine.lottoNumbers.forEach((numbers) => {
      Console.print(numbers);
    });
    Console.close();
  }
}

module.exports = UI;
