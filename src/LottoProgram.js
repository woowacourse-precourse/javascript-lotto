const { Console } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const ValidateInput = require("./ValidateInput");
const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");

class LottoProgram {
  #regExp;

  constructor() {
    this.validateInput = new ValidateInput();
    this.utils = new Utils();
    this.buyLotto = new BuyLotto();
    this.lotto = new Lotto();
    this.winningNumbers;
    this.bonusNumber;
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
      if (!this.validateInput.validateWinningNumbers(this.winningNumbers)) {
        this.utils.throwError("[ERROR] 입력하신 당첨 번호가 유효하지 않습니다. 다시 확인해주세요.");
      }
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      this.bonusNumber = bonusNumber;
      if (!this.validateInput.validateBonusNumber(this.winningNumbers, this.bonusNumber)) {
        this.utils.throwError("[ERROR] 입력하신 보너스 번호가 유효하지 않습니다. 다시 확인해주세요.");
      }
      this.getWinningStat();
      Console.close();
    });
  }

  getWinningStat() {
    Console.print("\n당첨 통계\n---")
    this.lotto.lottosWinningBonus(
      this.buyLotto.getLottoArray(),
      this.winningNumbers,
      this.bonusNumber
    );
  }
}

module.exports = LottoProgram;
