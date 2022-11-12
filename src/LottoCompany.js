const MissionUtils = require("@woowacourse/mission-utils");

class LottoCompany {
  #winningNumber;

  constructor(winningNumber) {
    this.winningNumber = winningNumber;
  }

  drawLottoNumber() {
    const winningNumbersString = this.getWinningNumber();
    const winningNumbers = this.transferIntArray(winningNumbersString);
    return winningNumbers;
  }

  transferIntArray(winningNumbersString) {
    const winningNumberStringArray = winningNumbersString.split(",");

    const winningNumberArray = winningNumberStringArray.map((element) => {
      const winningNumber = parseInt(element);
      this.isNumberValidate(winningNumber);
      return winningNumber;
    });

    return winningNumberArray;
  }

  getWinningNumber() {
    const winningNumbersWithoutBonus = MissionUtils.Console.readLine(
      "당첨 번호를 입력해주세요.\n",
      (input) => {
        return input;
      }
    );
    const winningBonusNumber = MissionUtils.Console.readLine(
      "보너스 번호를 입력해주세요. \n",
      (input) => {
        return input;
      }
    );

    return `${winningNumbersWithoutBonus},${winningBonusNumber}`;
  }

  isNumberValidate(element) {
    if (isNaN(element)) throw new Error("[ERROR] 입력된 값이 숫자가 아닙니다.");
  }
}

module.exports = LottoCompany;
