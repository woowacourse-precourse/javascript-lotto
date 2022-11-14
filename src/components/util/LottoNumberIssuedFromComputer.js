const { Random } = require('@woowacourse/mission-utils');
const { RESTRICTIONS } = require('../lotto-data/Constant');
const Lotto = require('../number-check/Lotto');

class LottoNumberIssuedFromComputer {
  return() {
    return this.sort(this.checkLottoNumbersIssued(this.issueLottoNumbers()));
  }

  sort(arr) {
    return arr.sort((front, back) => front - back);
  }

  issueLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      RESTRICTIONS.lottoNumberStart_One,
      RESTRICTIONS.lottoNumberEnd_FortyFive,
      RESTRICTIONS.lottoNumberCount_Six
    );
  }

  checkLottoNumbersIssued(issuedNumber) {
    const lotto = new Lotto(issuedNumber);
    lotto.checkIssuedNumberFromComputer();
    return issuedNumber;
  }
}

module.exports = LottoNumberIssuedFromComputer;
