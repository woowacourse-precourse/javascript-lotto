const { Random } = require('@woowacourse/mission-utils');
const { RESTRICTIONS } = require('../lotto-data/Constant');
const Lotto = require('../../Lotto');
const { LottoNumberData } = require('../lotto-data/LottoNumberData');

class LottoNumberIssuedFromComputer {
  return() {
    return this.saveLottoNumberIssued(
      this.sort(this.checkLottoNumbersIssued(this.issueLottoNumbers()))
    );
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

  saveLottoNumberIssued(lottoNumber) {
    LottoNumberData.Issued = LottoNumberData.Issued.concat([lottoNumber]);
    return lottoNumber;
  }
}

module.exports = LottoNumberIssuedFromComputer;
