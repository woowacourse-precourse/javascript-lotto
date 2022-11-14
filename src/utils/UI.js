const Console = require("./Console");
const Constant = require("../Constant");
const makeLotto = require("./MakeLotto");
const Validate = require("./Validate");
const Lotto = require("../Lotto");
class UI {
  #countLotto;
  #arrUserInputLottoNumbers;
  #bonusNumber;

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

  set arrUserInputLottoNumbers(value){

  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  inputUserLottoNumber() {
    Console.readLine(
      "\n당첨 번호를 입력해 주세요.\n",
      (userInputLottoNumbers) => {
        this.inputBonusNumber()
        if (Validate.validateUserInputLottoNumbers(userInputLottoNumbers)) {
          this.#arrUserInputLottoNumbers = userInputLottoNumbers.split(",").map((number)=> +number);
        }
      }
    );
  }

  inputBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (strBonusNumber) => {
      let numberBonusNumber = +strBonusNumber ?? NaN;
      if (Validate.validateBonusNumber(numberBonusNumber)) {
        this.#bonusNumber = numberBonusNumber;
        const lotto = new Lotto(this.#arrUserInputLottoNumbers);
      }
      Console.close()
    });
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
