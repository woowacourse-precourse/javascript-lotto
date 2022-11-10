const Maker = require('./utils/Maker');
const Lotto = require('./Lotto');

class Player {
  #lottoNumber;

  #lotto;

  buyLotto(priceString) {
    this.#lottoNumber = Maker.getLottoNumber(Maker.makeUsablePrice(priceString));
  }

  getLotto() {
    this.#lotto = Lotto.publish(this.#lottoNumber);
    // console.log(this.#lotto);
  }
}

module.exports = Player;
