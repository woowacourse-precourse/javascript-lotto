const MissionUtils = require("@woowacourse/mission-utils");

class LottoNumber {
  constructor(inputLottoNumbers, inputBonusNumbers) {
    this.inputLottoNumbers = inputLottoNumbers;
    this.inputBonusNumbers = inputBonusNumbers;
  }

  lottoNumbers() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해주세요.\n",
      (inputNumbers) => {
        this.inputLottoNumbers = inputNumbers.split(",").map(Number);
        this.bonusNumber();
      }
    );
  }

  bonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (inputBonusNumber) => {
        this.inputBonusNumbers = inputBonusNumber;
      }
    );
  }
}

module.exports = LottoNumber;
