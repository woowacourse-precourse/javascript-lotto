const Money = require("./domain/Money");
const Lottos = require("./domain/Lottos");
const WinNumber = require("./domain/WinNumber");
const Bonus = require("./domain/Bonus");

class LottoGameService {
  #lottos;
  #winNumber;
  #bonus;

  buyLotto(inputMoney) {
    const money = new Money(inputMoney);
    const amount = money.getAmount();
    this.#lottos = new Lottos(amount);
  }

  getLottosSize() {
    return this.#lottos.size();
  }

  getLottos() {
    return this.#lottos.toString();
  }

  setWinNumbers(winNumbers) {
    const winNumber = new WinNumber(winNumbers);
    this.#winNumber = winNumbers;
  }

  setBonus(bonusNumber) {
    const bonus = new Bonus(bonusNumber, this.#winNumber);
    this.#bonus = bonusNumber;
  }
}

module.exports = LottoGameService;
