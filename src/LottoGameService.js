const Money = require("./domain/Money");
const Lottos = require("./domain/Lottos");

class LottoGameService {
  buyLotto(inputMoney) {
    const money = new Money(inputMoney);
    const amount = money.getAmount();

    const lottos = new Lottos(amount);

    return lottos;
  }
}

module.exports = LottoGameService;
