const Lotto = require('../Lotto');

class LottoInputDto extends Lotto {
  #bonus = 0;

  constructor(lottoNumbers, bonus) {
    super(lottoNumbers);
    this.#bonus = bonus;
  }

  get bonus() {
    return this.#bonus;
  }
}

module.exports = LottoInputDto;
