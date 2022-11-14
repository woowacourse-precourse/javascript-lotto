const { Console } = require('@woowacourse/mission-utils');
const {
  MATCHING_MESSAGES,
  PRIZE_MESSAGES,
  INPUT_MESSAGES,
  ACTION_MESSAGES,
} = require('../constant/messages');
const Purchaser = require('../domain/Purchaser');
const Validator = require('../utils/Validator');

class UserInterface {
  #winnerNumber;

  #bonusNumber;

  #lottos;

  inputMoney() {
    Console.readLine(INPUT_MESSAGES.money, (money) => {
      const validator = new Validator();
      validator.validateInput(money);
      this.purchaser = new Purchaser(money);
      this.#lottos = this.purchaser.buyLotto(money / 1000);
      this.showLottoNumber();
      this.inputWinnerNumber();
    });
  }

  showLottoNumber() {
    Console.print(`${this.#lottos.length}${ACTION_MESSAGES.purchase}`);
    this.#lottos.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`)
    );
  }

  inputWinnerNumber() {
    Console.readLine(INPUT_MESSAGES.winnerNumber, (winnerNumber) => {
      this.#winnerNumber = winnerNumber
        .split(',')
        .map((number) => +number.trim());
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(INPUT_MESSAGES.bonusNumber, (bonusNumber) => {
      this.#bonusNumber = +bonusNumber;
      this.showResult();
      Console.close();
    });
  }

  showResult() {
    Console.print(ACTION_MESSAGES.result);
    const matchedCountList = this.purchaser.countMatchedNumber(
      this.#lottos,
      this.#winnerNumber,
      this.#bonusNumber
    );
    this.showMatchedNumber(matchedCountList);
    this.showReturnRate(matchedCountList);
  }

  showMatchedNumber(matchedCountlist) {
    Object.keys(MATCHING_MESSAGES).forEach((matched, idx) => {
      Console.print(
        `${MATCHING_MESSAGES[matched]} ${PRIZE_MESSAGES[matched]} - ${
          matchedCountlist[idx + 3]
        }개`
      );
    });
  }

  showReturnRate(matchedCountList) {
    const money = this.purchaser.getInputMoney();
    const revenue = this.purchaser.getRevenue(matchedCountList);
    Console.print(
      `총 수익률은 ${this.purchaser.getReturnRate(money, revenue)}%입니다.`
    );
    Console.close();
  }
}

module.exports = UserInterface;
