const Money = require("./domain/Money");
const Lottos = require("./domain/Lottos");

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

  setWinNumbers(winNumber) {
    this.#winNumber = winNumber;
  }

  setBonus(bonus) {
    this.#bonus = bonus;
  }
}

module.exports = LottoGameService;
