const LottoGenerator = require('./LottoGenerator');
const CheckWinner = require('./CheckWinner');
const MissionUtils = require('@woowacourse/mission-utils');
const CheckVaild = require('./CheckVaild');
const Print = require('./Print');
const { INPUT_MESSAGES } = require('./common/message');
class App {
  constructor() {
    this.winningLotto = [];
    this.myLotto = [];
    this.bouns = 0;
    this.buyMoney = 0;
  }
  getBuyLottoMoney() {
    const moneyInput = async (money) => {
      CheckVaild.isValidMoney(money);
      this.buyMoney = money;
      const lottoGenerator = new LottoGenerator(this.buyMoney / 1000);
      this.myLotto = lottoGenerator.getLottoNumber();
      Print.myLotto(this.myLotto);
      Print.countLotto(this.myLotto.length);
      this.winningNum();
    };
    MissionUtils.Console.readLine(
      `${INPUT_MESSAGES.INPUT_BUY_LOTTO}`,
      moneyInput
    );
  }

  winningNum() {
    MissionUtils.Console.readLine(
      `${INPUT_MESSAGES.INPUT_WINNING_NUMBER}`,
      (winning) => {
        this.winningLotto = winning.split(',').map(Number);
        CheckVaild.isVaildWinningNumber(this.winningLotto);
        this.bonusNum();
      }
    );
  }
  bonusNum() {
    MissionUtils.Console.readLine(
      `${INPUT_MESSAGES.INPUT_BOUNS_NUMBER}`,
      (bouns) => {
        this.bouns = parseInt(bouns);
        CheckVaild.isVaildBounsNumber(this.winningLotto, this.bouns);

        const count = new CheckWinner(
          this.winningLotto,
          this.bouns,
          this.myLotto
        );
        const reward = count.getReward();
        const rinking = count.getRanking();
        Print.result(reward, rinking, this.buyMoney);
      }
    );
  }

  play() {
    this.getBuyLottoMoney();
  }
}
const app = new App();
app.play();
module.exports = App;
