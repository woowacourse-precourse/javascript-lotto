const MissionUtils = require("@woowacourse/mission-utils");

class LottoCompany {
  #winningNumber;

  constructor(winningNumber) {
    this.winningNumber = winningNumber;
  }

  drawLottoNumber(lottos) {
    MissionUtils.Console.readLine("당첨 번호를 입력해주세요.\n", (input) => {
      this.drawLottoBonusNumber(lottos, input);
    });
  }

  drawLottoBonusNumber(lottos, winningNumbersWithoutBonus) {
    MissionUtils.Console.readLine("보너스 번호를 입력해주세요. \n", (input) => {
      const winningNumbersString = `${winningNumbersWithoutBonus},${input}`;
      const winningNumbers = this.transferIntArray(
        lottos,
        winningNumbersString
      );
      this.analyzeLotto(winningNumbers);
    });
  }

  transferIntArray(winningNumbersString) {
    const winningNumberStringArray = winningNumbersString.split(",");
    const winningNumberArray = winningNumberStringArray.map((element) => {
      const winningNumber = parseInt(element);
      this.isNumberValidate(winningNumber);
      return winningNumber;
    });
  }

  isNumberValidate(element) {
    if (isNaN(element)) throw new Error("[ERROR] 입력된 값이 숫자가 아닙니다.");
  }
}

module.exports = LottoCompany;
