const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");

const lotto = new Lotto();


class WinningNumbers {
    constructor() {}

    inputWinningNumbers() {
      MissionUtils.Console.readLine(`당첨 번호를 입력해 주세요.`, (userInput) => {
      const winningNumber = userInput.split(',');
      lotto.validate(winningNumber,6);
      return this.inputBonusNumbers(winningNumber)
      })
    }

    inputBonusNumbers(winningNumber) {
      MissionUtils.Console.readLine(`보너스 번호를 입력해 주세요.`, (userInput) => {
      MissionUtils.Console.close();
      const bonusNumber = userInput.split(',')
      lotto.validate(bonusNumber,1);
      return [winningNumber, bonusNumber]
      })
    }

}

module.exports = WinningNumbers;