const LottoPicker = require('./lib/LottoPicker');
const LottoScoreBoard = require('./LottoScoreBoard');
const Validator = require('./lib/Validator');

class Inventory {
  #lottos;
  #lottoScoreBoard = new LottoScoreBoard();

  generateLottoWithMoney(money) {
    Validator.errorIfMoneyInvalidFormat(money);
    const lottoCount = money / 1000;
    this.#lottos = [...LottoPicker.pickMultipleSortedLotto(lottoCount)];
  }

  getLottosData() {
    return this.#lottos;
  }
}

module.exports = Inventory;
