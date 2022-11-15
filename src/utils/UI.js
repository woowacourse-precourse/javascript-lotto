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
  _numberUserInputMoney;

  askMoney() {
    Console.readLine(Constant.INPUT_MONEY, (userInputMoney) => {
      this._numberUserInputMoney = Number(userInputMoney) ?? NaN;
      if (Validate.validateMoney(this._numberUserInputMoney)) {
        this.#countLotto = this._numberUserInputMoney / Constant.MINIMUM_AMOUNT;
        this.showLottosCount();
        this.showLottoNumber();
        this.inputUserLottoNumber();
      }
    });
  }

  get numberUserInputMoney() {
    return this._numberUserInputMoney;
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
    Console.print("");
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
          this.makeArrayAgain(this.lottoMachine.lottoNumbers),
          this.#bonusNumber
        );
        this.printWin(this.#countSameNumberObject);
        this.printPrizeRate(this.#countSameNumberObject);
      }
    });
  }

  makeArrayAgain(stringArray) {
    let arr = [];
    stringArray.forEach((string) => {
      let onluNumber = string.slice(0, -1).slice(1);
      let arrOnlyNumber = onluNumber
        .split(",")
        .map((str) => str.trim())
        .reduce((newArr, item) => {
          let numberRegex = /^[0-9]*$/;
          if (numberRegex.test(item)) {
            newArr.push(+item);
            return newArr;
          }
          return newArr;
        }, []);
      arr.push(arrOnlyNumber);
    });
    return arr;
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
    Console.print(Constant.LINE);

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
    let rate = this.lotto.caculatePriceRate(
      resultObject,
      this._numberUserInputMoney
    );
    Console.print(Constant.SHOW_RATE(rate));
    Console.close();
  }
}
module.exports = UI;
