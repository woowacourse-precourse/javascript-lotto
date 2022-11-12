const MissionUtils = require('@woowacourse/mission-utils');
const Validator = require('./Validator');
const { LOTTO_LENGTH } = require('../constants');

class Lotto {
  #numbers;

  getWinningLotto(numbers) {
    this.#numbers = Validator.lottoValidCheck(numbers);    
    return this.#numbers;
  }
  getUserLottos(sheets) {
    const lottos = [];
    while(lottos.length < sheets) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, LOTTO_LENGTH);
      lotto.sort((a,b) => a - b);
      lottos.push(lotto);
    }
    return lottos;
  }
}

module.exports = Lotto;
