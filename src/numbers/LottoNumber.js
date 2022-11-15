const MissionUtils = require("@woowacourse/mission-utils");
const CompareNumber = require("../process/CompareNumber");
const Lotto = require("../Lotto");

class LottoNumber {
  constructor(inputLottoNumbers, inputBonusNumbers, computerNumbers) {
    this.inputLottoNumbers = inputLottoNumbers;
    this.inputBonusNumbers = inputBonusNumbers;
    this.computerNumbers = computerNumbers;
    this.compareNumber = new CompareNumber();
  }

  lottoNumbers(computerNumbers) {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해주세요.\n",
      (inputNumbers) => {
        this.inputLottoNumbers = inputNumbers.split(",").map(Number);
        this.computerNumbers = computerNumbers;
        new Lotto(this.inputLottoNumbers);
        this.bonusNumber();
      }
    );
  }

  bonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (inputBonusNumber) => {
        this.inputBonusNumbers = inputBonusNumber;
        this.bonusNumbersError(this.inputBonusNumbers);
        this.compareNumber.comparefirstCipher(
          this.computerNumbers,
          this.inputLottoNumbers,
          this.inputBonusNumbers
        );
      }
    );
  }

  bonusNumbersError(inputBonusNumbers) {
    this.inputLottoNumbers.forEach(function (number) {
      const DATA = inputBonusNumbers.indexOf(number);
      if (DATA > -1) {
        throw new Error("[ERROR] 당첨번호와 보너스번호와 달라야합니다.");
      }
    });
  }
}

module.exports = LottoNumber;
