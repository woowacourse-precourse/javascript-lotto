const InstanceException = require('../../exception/InstanceException');
const Lotto = require('./Lotto');

class LottoTicket {
  #lottos;

  constructor(lottos) {
    LottoTicket.validate(lottos);
    this.#lottos = lottos;
  }

  static of(lottos) {
    return new LottoTicket(lottos);
  }

  static validate(lottos) {
    lottos.forEach(LottoTicket.validateIsTicket);
  }

  static validateIsTicket(lotto) {
    if (!(lotto instanceof Lotto)) {
      throw new InstanceException('Lotto');
    }
  }

  getLottos() {
    return this.#lottos;
  }
}
module.exports = LottoTicket;
