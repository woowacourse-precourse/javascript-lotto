const { Console, Random } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const ValidateInput = require("./ValidateInput");
const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");

class LottoProgram {
  #regExp;

  constructor() {
    this.validateInput = new ValidateInput();
    this.utils = new Utils();
    this.buyLotto = new BuyLotto;
    this.winningNumbers;
  }

  start() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해주세요.\n", (inputMoney) => {
      if (!this.validateInput.validateInputMoney(inputMoney)) {
        this.utils.throwError("[ERROR] 유효하지 않은 값을 입력하셨습니다. 다시 확인하세요.");
      }
      this.buyLotto.buyLotto(Number(inputMoney) / 1000);
      this.inputWinningNumbers();
    });
  }

  inputWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (inputWinningNumbers) => {
      this.winningNumbers = inputWinningNumbers.replace(this.#regExp, '').split(',');
      this.validateInput.validateWinningNumbers(this.winningNumbers);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      this.validateInput.validateBonusNumber(this.winningNumbers, bonusNumber);
      Console.close();
    });
  }
}

module.exports = LottoProgram;
