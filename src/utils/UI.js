const Console = require("./Console");
const Constant = require("../Constant");
const makeLotto = require("./MakeLotto");
const Validate = require("./Validate");
const Lotto = require("../Lotto");
class UI {
  #countLotto;
  #arrUserInputLottoNumbers;
  #bonusNumber;
  #countSameNumberObject;
  #numberUserInputMoney;

  askMoney() {
    Console.readLine(Constant.INPUT_MONEY, (userInputMoney) => {
      this.#numberUserInputMoney = Number(userInputMoney) ?? NaN;
      if (Validate.validateMoney(this.#numberUserInputMoney)) {
        this.#countLotto = this.#numberUserInputMoney / Constant.MINIMUM_AMOUNT;
        this.showLottosCount();
        this.showLottoNumber();
        this.inputUserLottoNumber();
      }
    });
  }

  get numberUserInputMoney() {
    return this.#numberUserInputMoney;
  }

  get countLotto() {
    return this.#countLotto;
  }

  get arrUserInputLottoNumbers() {
    return this.#arrUserInputLottoNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  get countSameNumberObject() {
    return this.#countSameNumberObject;
  }

  set arrUserInputLottoNumbers(value) {
    this.#arrUserInputLottoNumbers = value;
  }

  inputUserLottoNumber() {
    Console.readLine(Constant.INPUT_LOTTO_NUMBERS, (userInputLottoNumbers) => {
      if (Validate.validateUserInputLottoNumbers(userInputLottoNumbers)) {
        this.#arrUserInputLottoNumbers = userInputLottoNumbers
          .split(",")
          .map((number) => +number);
        this.inputBonusNumber();
      }
    });
  }

  inputBonusNumber() {
    Console.readLine(Constant.INPUT_BONUS_NUMBER, (strBonusNumber) => {
      let numberBonusNumber = +strBonusNumber ?? NaN;
      if (
        Validate.validateBonusNumber(
          this.#arrUserInputLottoNumbers,
          numberBonusNumber
        )
      ) {
        this.#bonusNumber = numberBonusNumber;
        this.lotto = new Lotto(this.#arrUserInputLottoNumbers);
        this.#countSameNumberObject = this.lotto.compare(
          this.lottoMachine.lottoNumbers,
          this.#bonusNumber
        );
        this.printWin(this.#countSameNumberObject);
        this.printPrizeRate(this.#countSameNumberObject);
      }
      Console.close();
    });
  }

  showLottosCount() {
    Console.print(Constant.SHOW_LOTTO_COUNT(this.#countLotto));
  }

  showLottoNumber() {
    this.lottoMachine = new makeLotto(this.#countLotto);
    this.lottoMachine.makeLotto();
    this.lottoMachine.lottoNumbers.forEach((numbers) => {
      Console.print(numbers);
    });
  }

  printWin(countObject) {
    Console.print(Constant.STATS_WIN);
    Console.print(Constant.Line);

    for (let key in countObject) {
      Console.print(
        Constant.SHOW_RESULT_ONE_BYONE(
          countObject[key].text,
          countObject[key].price.toLocaleString(),
          countObject[key].count
        )
      );
    }
  }

  printPrizeRate(resultObject) {
    let allPrice = 0;
    for (const resultObjectKey in resultObject) {
      allPrice +=
        resultObject[resultObjectKey].price *
        resultObject[resultObjectKey].count;
    }
    let rate = Number((allPrice / this.#numberUserInputMoney) * 100).toFixed(1);
    Console.print(Constant.SHOW_RATE(rate));
  }
}
module.exports = UI;
