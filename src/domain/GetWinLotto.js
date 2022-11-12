const MissionUtils = require("@woowacourse/mission-utils");
const Exceptions = require("./Exception");
let exception = new Exceptions();

class GetWinLotto {
  constructor() {
    this.lottoNumbers = [];
    this.bonusNumber = 0;
  }

  getLottoNumbers() {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (lottoNumbers) => {
        this.lottoNumbers = lottoNumbers
          .split(",")
          .map((index) => Number(index));
        exception.checkInputCount(this.lottoNumbers);
        this.lottoNumbers.map((index) => {
          exception.checkInputNotNumber(index);
        });
        exception.checkInputDuplicate(this.lottoNumbers);
        this.lottoNumbers.map((index) => {
          exception.checkInputRange(index);
        });
        return this.getBonusNumbers();
      }
    );
  }

  getBonusNumbers() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (bonusNumber) => {
        this.bonusNumber = Number(bonusNumber);
        exception.checkInputNotNumber(this.bonusNumber);
        exception.checkInputRange(this.bonusNumber);
        exception.checkBonusInLotto(this.bonusNumber, this.lottoNumbers);
      }
    );
  }
}

module.exports = GetWinLotto;