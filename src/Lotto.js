const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('./setting/Message');
const { LOTTO_VALUE } = require('./setting/Constants');
const LottoView = require('./view/LottoView')

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.lottoList = [];
    this.LottoView = new LottoView();
  }

  NumberPackage(money) {
    this.validate(money);
    this.#numbers = this.howManyLotto(money);
    this.LottoView.buyLotto(this.#numbers);
    this.printLotto();
    
    return this.lottoList;
  }

  printLotto() {
    for (let i = LOTTO_VALUE.zero; i < this.#numbers; i += LOTTO_VALUE.plus) {
      const lottoNumber = this.sortLottoNumber(Random.pickUniqueNumbersInRange(LOTTO_VALUE.min, LOTTO_VALUE.max, LOTTO_VALUE.digit));
      this.LottoView.printList(lottoNumber);
      this.lottoList.push(lottoNumber);
    }
  }

  howManyLotto(money) {
    return money / LOTTO_VALUE.thousand;
  }

  sortLottoNumber(Array) {
    return Array.sort((a, b) => a - b);
  }

  validate(money) {
    this.isItEmpty(money);
    this.isItNumber(money);
    this.rightAmount(money);
    return true;
  }

  isItEmpty(money) {
    if (money < 1) throw new Error(LOTTO_MESSAGE.EMPTY);
  }

  isItNumber(money) {
    if (isNaN(money)) throw new Error(LOTTO_MESSAGE.NO_MONEY);
  }

  rightAmount(money) {
    if (money % LOTTO_VALUE.thousand !== LOTTO_VALUE.zero)
      throw new Error(LOTTO_MESSAGE.WRONG_UNIT);
  }
}

module.exports = Lotto;
