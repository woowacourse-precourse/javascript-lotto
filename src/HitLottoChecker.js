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

  setHitLotto() {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (hitLottoNumbers) => {
        this.hitLotto = this.hitLottoToInt(hitLottoNumbers);
        this.setBonusNumber();
      }
    );
  }
  hitLottoToInt(hitLottoNumbers) {
    return new Lotto(
      hitLottoNumbers.split(",").map(function (stringNumber) {
        return parseInt(stringNumber);
      })
    );
  }
}
module.exports = HitLottoChecker;
