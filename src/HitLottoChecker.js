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
  setBonusNumber() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (bonusNumber) => {
        this.bonusNumber = parseInt(bonusNumber);
      }
    );
  }
  findHitLotto() {
    for (let lotto of this.boughtLottoArray) {
      let matchNumbersAmount = lotto
        .getLottoNumbers()
        .filter((lottoNumber) =>
          this.hitLotto.getLottoNumbers().includes(lottoNumber)
        ).length;
      this.fillMatchLottoNumbersTable(matchNumbersAmount, lotto);
    }
  }
  fillMatchLottoNumbersTable(matchNumbersAmount, lotto) {
    if (
      matchNumbersAmount === 5 &&
      lotto.getLottoNumbers().includes(this.bonusNumber)
    ) {
      this.matchLottoNumbersTable["5B"] += 1;
    } else if ([3, 4, 5, 6].includes(matchNumbersAmount)) {
      this.matchLottoNumbersTable[matchNumbersAmount] += 1;
    }
  }
}
module.exports = HitLottoChecker;
