const Lotto = require('../Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

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
