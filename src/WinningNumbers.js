const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");

const lotto = new Lotto();


class WinningNumbers {
    constructor() {
      this.makedLottos = [];
      this.winningNumsLs;
      this.bonusNum;
    }

    inputWinningNumbers() {
      MissionUtils.Console.readLine(`\n당첨 번호를 입력해 주세요.\n`, (userInput) => {
        this.winningNumsLs = userInput.split(',');
      lotto.validate(this.winningNumsLs,6);

      return this.inputBonusNumbers()
      })
    }

    inputBonusNumbers() {
      MissionUtils.Console.readLine(`\n보너스 번호를 입력해 주세요.\n`, (userInput) => {
      this.bonusNum = [userInput];
      lotto.validate(this.bonusNum,1);
      lotto.validateBonus(this.winningNumsLs, this.bonusNum)
      MissionUtils.Console.close();

      return this.deliverLottos([this.winningNumsLs, this.bonusNum])
      })
    }

    deliverLottos(winningAndBonusNum) {
      lotto.checkCorrect(winningAndBonusNum,this.makedLottos)
    }
    
}

module.exports = WinningNumbers;