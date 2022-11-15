const { OUTPUT_MESSAGE } = require("../constants/message");
const {
  LOTTO_NUMBER,
  STATIC_TEMPLATE,
  STATIC_RANK,
} = require("../constants/gameCondition");

class Statics {
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #rankLottos;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getLottosStatics() {
    const winNumbers = this.#winningNumbers.getWinNumbers();
    const bonusNumber = this.#bonusNumber.getBonusNumber();

    this.#rankLottos = this.#lottos.rankLottos(winNumbers, bonusNumber);

    return this.getTemplate();
  }

  getTemplate() {
    let template = "";

    template += OUTPUT_MESSAGE.THREE_MATCH(this.#rankLottos.get(5));
    template += OUTPUT_MESSAGE.FOUR_MATCH(this.#rankLottos.get(4));
    template += OUTPUT_MESSAGE.FIVE_MATCH(this.#rankLottos.get(3));
    template += OUTPUT_MESSAGE.FIVE_BONUS_MATCH(this.#rankLottos.get(2));
    template += OUTPUT_MESSAGE.SIX_MATCH(this.#rankLottos.get(1));

    return template;
  }

  getIncomeRateFrom(money) {
    let income = 0;

    this.#rankLottos.forEach((count, rank) => {
      const prize = STATIC_TEMPLATE[+rank].price;
      income += prize * count;
    });

    return money.getInComeRate(income);
  }
}

module.exports = Statics;
