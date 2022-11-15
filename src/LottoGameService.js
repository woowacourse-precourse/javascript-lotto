const Money = require("./domain/Money");
const Lottos = require("./domain/Lottos");
const WinNumber = require("./domain/WinNumber");
const Bonus = require("./domain/Bonus");
const Statics = require("./domain/Statics");

class LottoGameService {
  #money;
  #lottos;
  #statics;
  #bonus;
  #winNumber;

  buyLotto(inputMoney) {
    this.#money = new Money(inputMoney);
    const amount = this.#money.getAmount();
    this.#lottos = new Lottos(amount);
  }

  getLottosSize() {
    return this.#lottos.size();
  }

  getLottos() {
    return this.#lottos.toString();
  }

  setWinNumbers(winNumbers) {
    this.#winNumber = new WinNumber(winNumbers);
  }

  setBonus(bonusNumber) {
    const bonus = new Bonus(bonusNumber, this.#winNumber);
    this.#bonus = bonus;
  }

  getStatics() {
    this.#statics = new Statics(this.#lottos, this.#winNumber, this.#bonus);
    return this.#statics.getLottosStatics();
  }

  getIncomeRate() {
    return this.#statics.getIncomeRateFrom(this.#money);
  }
}

module.exports = LottoGameService;
