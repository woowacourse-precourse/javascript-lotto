const MissionUtils = require("@woowacourse/mission-utils");
const CompareNumber = require("./CompareNumber");

class LottoNumber {
  constructor(
    inputLottoNumbers,
    inputBonusNumbers,
    computerNumbers,
    purchaseAmout
  ) {
    this.inputLottoNumbers = inputLottoNumbers;
    this.inputBonusNumbers = inputBonusNumbers;
    this.computerNumbers = computerNumbers;
    this.purchaseAmout = purchaseAmout;
    this.compareNumber = new CompareNumber();
  }

  lottoNumbers(purchaseAmout, computerNumbers) {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해주세요.\n",
      (inputNumbers) => {
        this.inputLottoNumbers = inputNumbers.split(",").map(Number);
        this.computerNumbers = computerNumbers;
        this.purchaseAmout = purchaseAmout;
        this.bonusNumber();
      }
    );
  }

  bonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (inputBonusNumber) => {
        this.inputBonusNumbers = inputBonusNumber;
        this.compareNumber.checkNumber(
          this.computerNumbers,
          this.inputLottoNumbers,
          this.inputBonusNumbers
        );
      }
    );
  }
}

module.exports = LottoNumber;
