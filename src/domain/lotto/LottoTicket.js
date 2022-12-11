const Lotto = require('./Lotto');
const InstanceException = require('../../exception/InstanceException');

class LottoTicket {
  #lottos;

  constructor(lottos) {
    LottoTicket.validate(lottos);
    this.#lottos = lottos;
  }

  static validate(lottos) {
    LottoTicket.validateLottosInstance(lottos);
  }

  static validateLottosInstance(lottos) {
    lottos.forEach(LottoTicket.checkLottoInstance);
  }

  static checkLottoInstance(lotto) {
    if (!(lotto instanceof Lotto)) {
      throw new InstanceException('Lotto');
    }
  }

  forEach(callback) {
    this.#lottos.forEach(callback);
  }

  toString() {
    return `${this.#lottos.map(((lotto) => lotto.toString())).join('\n')}\n`;
  }
}

module.exports = LottoTicket;
