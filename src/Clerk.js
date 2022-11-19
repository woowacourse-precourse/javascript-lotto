const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES, LOTTO_INFO } = require("./Constants");
const LottoUtils = require("./LottoUtils");
const QuickPick = require("./QuickPick");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const PurChase = require("./PurChase");
const Result = require("./Result");

class Clerk {
  #payment;
  #quickPick;
  #lotto;
  #bonus;
  #result;

  initLottoGame() {
    Console.readLine(GAME_MESSAGES.ASK_TO_PAY, (payment) => {
      this.inputLottoAmount(payment);
    });
  }

  inputLottoAmount(payment) {
    this.#payment = new PurChase(payment);
    this.#quickPick = new QuickPick(this.#payment.getPayment() / LOTTO_INFO.LOTTO_PRICE);
    this.#quickPick.printNumbersArray();
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    Console.readLine(GAME_MESSAGES.ASK_TO_WINNING_NUMBERS, (winNumbers) => {
      const lottoUtils = new LottoUtils(winNumbers);

      this.#lotto = new Lotto(lottoUtils.getConvertArray());
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(GAME_MESSAGES.ASK_TO_BONUS_NUMBER, (bonusNumber) => {
      this.#bonus = new Bonus(bonusNumber, this.#lotto.getLottoWinningNumber());
      this.makeResult();
    });
  }

  makeResult() {
    this.#result = new Result(
      this.#lotto.getLottoWinningNumber(),
      this.#quickPick.getMyLottoArray(),
      this.#bonus.getBonusNumber(),
      this.#payment.getPayment()
    );

    this.#result.announceScore();
    Console.close();
  }
}

module.exports = Clerk;
