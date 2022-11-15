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

  askMoney() {
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

  get arrUserInputLottoNumbers() {
    return this.#arrUserInputLottoNumbers;
  }

  set arrUserInputLottoNumbers(value) {
    this.#arrUserInputLottoNumbers = value;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  get countSameNumberObject() {
    return this.#countSameNumberObject;
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
      if (Validate.validateBonusNumber(numberBonusNumber)) {
        this.#bonusNumber = numberBonusNumber;
        this.lotto = new Lotto(this.#arrUserInputLottoNumbers);
        this.#countSameNumberObject = this.lotto.compare(
          this.lottoMachine.lottoNumbers,
          this.#bonusNumber
        );
        this.printWin(this.#countSameNumberObject);
      }
      Console.close();
    });
  }

  showLottosCount() {
    Console.print(`\n${this.#countLotto}개를 구매했습니다.`);
  }

  showLottoNumber() {
    this.lottoMachine = new makeLotto(this.#countLotto);
    this.lottoMachine.makeLotto();
    this.lottoMachine.lottoNumbers.forEach((numbers) => {
      Console.print(numbers);
    });
  }

  printWin(winObject) {
    Console.print("\n당첨 통계\n" + "---");
    winObject.forEach((winCount) => console.log(winCount.countSameNumber));
  }
}

module.exports = UI;
