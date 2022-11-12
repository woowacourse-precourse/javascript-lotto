const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");

const lotto = new Lotto();


class WinningNumbers {
    constructor() {
      this.makedLottos = [];
    }

    inputWinningNumbers() {
      MissionUtils.Console.readLine(`\n당첨 번호를 입력해 주세요.\n`, (userInput) => {
      const winningNumber = userInput.split(',');
      lotto.validate(winningNumber,6);

      return this.inputBonusNumbers(winningNumber)
      })
    }

    inputBonusNumbers(winningNumber) {
      MissionUtils.Console.readLine(`\n보너스 번호를 입력해 주세요.\n`, (userInput) => {
      const bonusNumber = userInput.split(',')
      lotto.validate(bonusNumber,1);
      MissionUtils.Console.close();

      return this.deliverLottos([winningNumber, bonusNumber])
      })
    }

    deliverLottos(winningAndBonusNum) {
      lotto.checkResult(winningAndBonusNum,this.makedLottos)
    }
    
}

module.exports = WinningNumbers;