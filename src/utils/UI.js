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
    Console.readLine("구입금액을 입력해 주세요.\n", (userInputMoney) => {
      this.#numberUserInputMoney = Number(userInputMoney) ?? NaN;
      if (Validate.validateMoney(this.#numberUserInputMoney)) {
        this.#countLotto = this.#numberUserInputMoney / 1000;
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
    Console.readLine(
      "\n당첨 번호를 입력해 주세요.\n",
      (userInputLottoNumbers) => {
        if (Validate.validateUserInputLottoNumbers(userInputLottoNumbers)) {
          this.#arrUserInputLottoNumbers = userInputLottoNumbers
            .split(",")
            .map((number) => +number);
          this.inputBonusNumber();
        }
      }
    );
  }

  inputBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (strBonusNumber) => {
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
    Console.print(`${this.#countLotto}개를 구매했습니다.`);
  }

  showLottoNumber() {
    this.lottoMachine = new makeLotto(this.#countLotto);
    this.lottoMachine.makeLotto();
    this.lottoMachine.lottoNumbers.forEach((numbers) => {
      Console.print(numbers);
    });
  }

  printWin(countObject) {
    Console.print("당첨 통계");
    Console.print("---");

    for (let key in countObject) {
      Console.print(
        `${countObject[key].text} (${countObject[
          key
        ].price.toLocaleString()}원) - ${countObject[key].count}개`
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
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}
module.exports = UI;
