const { Random } = require('@woowacourse/mission-utils');

const Lotto = require('../Lotto/Lotto');

class AutoLottoMachine {
  generateLotto() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumbers.sort((a, b) => a - b);

    return new Lotto(lottoNumbers);
  }
}

module.exports = AutoLottoMachine;
