const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class HitLottoChecker {
  lottoPurchaseFee;
  boughtLottoArray;
  hitLotto;
  bonusNumber;
  matchLottoNumbersTable = {
    3: 0,
    4: 0,
    5: 0,
    "5B": 0,
    6: 0,
  };

  constructor(lottoPurchaseFee, lottoArray) {
    this.lottoPurchaseFee = lottoPurchaseFee;
    this.boughtLottoArray = lottoArray;
  }
}
module.exports = HitLottoChecker;
